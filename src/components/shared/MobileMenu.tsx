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
import { Button } from "../ui/button";
import { headerLinks } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";

const MobileMenu = () => {
	const { isActive } = useActiveSection();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button
						className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
						aria-label="Open menu"
					>
						<Menu className="h-4 w-4 text-slate-300" />
					</button>
				</SheetTrigger>

				<SheetContent
					side="right"
					className="w-[75%] max-w-[320px] border-l border-white/6 bg-[rgba(2,8,23,0.97)] p-0 backdrop-blur-xl"
					showCloseButton={false}
				>
					<div className="flex items-center justify-between border-b border-white/6 px-5 py-5">
						<SheetTitle asChild>
							<Link
								href="/"
								onClick={() => setIsOpen(false)}
								className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
							>
								<BrandLogo />
								<span className="text-[16px] font-medium tracking-[0.02em] text-slate-100">
									Aletheia
								</span>
							</Link>
						</SheetTitle>

						<button
							onClick={() => setIsOpen(false)}
							className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
							aria-label="Close menu"
						>
							<X className="h-4 w-4 text-slate-400" />
						</button>
					</div>

					<nav className="flex flex-col gap-1 px-3 py-4">
						{headerLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								onClick={() => setIsOpen(false)}
								className={cn(
									"group relative flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-all duration-200",
									isActive(href)
										? "bg-blue-600/20 text-blue-300 ring-1 ring-blue-500/30"
										: "text-slate-400 hover:bg-white/5 hover:text-slate-100",
								)}
							>
								{/* Active: bold left bar + glowing dot */}
								{isActive(href) && (
									<>
										<span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
										<span className="absolute right-3 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.9)]" />
									</>
								)}
								{label}
							</Link>
						))}
					</nav>

					<div className="px-4 pt-2">
						<Button
							asChild
							className="h-12 w-full rounded-[10px] bg-blue-600 px-6 text-[15px] font-medium shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_8px_24px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.6),0_12px_32px_rgba(37,99,235,0.35)]"
						>
							<Link
								href="#contact"
								onClick={() => setIsOpen(false)}
							>
								Book a Demo
							</Link>
						</Button>
					</div>

					<div className="absolute bottom-0 left-0 right-0 border-t border-white/6 p-4">
						<p className="text-center text-[11px] text-slate-600">
							© 2026 Aletheia
						</p>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
