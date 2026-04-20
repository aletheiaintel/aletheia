import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const body = await req.json();
	const { fullName, email, company, service, message } = body;

	try {
		await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "aletheiaintel@gmail.com",
			subject: `New Inquiry from ${fullName}`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #1d4ed8;">New Contact Form Submission</h2>
					<table style="width: 100%; border-collapse: collapse;">
						<tr><td style="padding: 8px; font-weight: bold; color: #555;">Full Name</td><td style="padding: 8px;">${fullName}</td></tr>
						<tr><td style="padding: 8px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
						<tr><td style="padding: 8px; font-weight: bold; color: #555;">Company</td><td style="padding: 8px;">${company || "—"}</td></tr>
						<tr><td style="padding: 8px; font-weight: bold; color: #555;">Service</td><td style="padding: 8px;">${service || "—"}</td></tr>
						<tr><td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${message}</td></tr>
					</table>
				</div>
			`,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Resend error:", error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
