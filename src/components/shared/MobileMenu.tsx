"use client";
import { BrandLogo } from "@/assets";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { headerLinks } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";

const MobileMenu = ({ onDark = false }: { onDark?: boolean }) => {
	const { isActive } = useActiveSection();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button
						className={cn(
							"flex h-9 w-9 items-center justify-center rounded-lg bg-transparent transition-colors",
							onDark ? "hover:bg-white/10" : "hover:bg-black/5",
						)}
						aria-label="Open menu"
					>
						<Menu
							className={cn(
								"h-4 w-4 transition-colors duration-300",
								onDark ? "text-white" : "text-[#121212]",
							)}
						/>
					</button>
				</SheetTrigger>

				<SheetContent
					side="right"
					className="w-[75%] max-w-[320px] border-l border-black/[0.07] bg-[rgba(253,250,245,0.98)] p-0 backdrop-blur-xl"
					showCloseButton={false}
				>
					{/* Header */}
					<div className="flex items-center justify-between border-b border-black/[0.07] px-5 py-5">
						<SheetTitle asChild>
							<Link
								href="/"
								onClick={() => setIsOpen(false)}
								className="flex items-center gap-2.5 transition-opacity hover:opacity-75"
							>
								<BrandLogo />
								<span className="text-[16px] font-semibold tracking-tight text-[#121212]">
									Aletheia
								</span>
							</Link>
						</SheetTitle>

						<button
							onClick={() => setIsOpen(false)}
							className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.07] bg-white/80 text-[#666] transition-colors hover:bg-black/5 hover:text-[#121212]"
							aria-label="Close menu"
						>
							<X className="h-4 w-4" />
						</button>
					</div>

					{/* Nav links */}
					<nav className="flex flex-col gap-1 px-3 py-4">
						{headerLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								onClick={() => setIsOpen(false)}
								className={cn(
									"group relative flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-all duration-200",
									isActive(href)
										? "bg-[#FFF8E6] text-[#C9981A] ring-1 ring-[#C9981A]/20"
										: "text-[#666] hover:bg-black/4 hover:text-[#C9981A]",
								)}
							>
								{/* Active indicators — kept as requested */}
								{isActive(href) && (
									<>
										<span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[#C9981A]" />
										<span className="absolute right-3 h-1.5 w-1.5 rounded-full bg-[#C9981A]" />
									</>
								)}
								{label}
							</Link>
						))}
					</nav>

					{/* CTA button */}
					<div className="px-4 pt-2">
						<Link
							href="#contact"
							onClick={() => setIsOpen(false)}
							className="flex h-11 w-full items-center justify-center rounded-full bg-[#121212] px-6 text-[14px] font-medium text-white shadow-lg shadow-black/10 transition-all hover:scale-[1.02] hover:bg-[#222]"
						>
							Book a Demo
						</Link>
					</div>

					{/* Footer */}
					<div className="absolute bottom-0 left-0 right-0 border-t border-black/[0.07] p-4">
						<p className="text-center font-serif text-[11px] italic text-[#999]">
							Aletheia — truth revealed.
						</p>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
