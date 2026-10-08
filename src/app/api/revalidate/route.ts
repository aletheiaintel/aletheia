import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Called by a Sanity webhook on publish. Expires every Sanity-tagged fetch so
// the next visit renders the new content.
export async function POST(req: NextRequest) {
	try {
		const { isValidSignature, body } = await parseBody<{ _type?: string }>(
			req,
			process.env.SANITY_REVALIDATE_SECRET,
		);

		if (!isValidSignature) {
			return new NextResponse("Invalid signature", { status: 401 });
		}

		revalidateTag("sanity", { expire: 0 });

		return NextResponse.json({ revalidated: true, type: body?._type });
	} catch (error) {
		return new NextResponse(
			error instanceof Error ? error.message : "Revalidation failed",
			{ status: 500 },
		);
	}
}
