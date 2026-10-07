import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQLink({
	lead,
	label,
	className,
}: {
	lead: string;
	label: string;
	className?: string;
}) {
	return (
		<p
			className={cn(
				"text-center text-[14px] font-light leading-relaxed text-[#777]",
				className,
			)}
		>
			{lead}{" "}
			<Link
				href="/faq"
				className="group inline-flex items-center gap-1 font-medium text-[#C9981A] underline-offset-4 transition-colors duration-200 hover:text-[#121212] hover:underline"
			>
				{label}
				<ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
			</Link>
		</p>
	);
}
