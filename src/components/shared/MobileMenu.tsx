// "use client";
// import { BrandLogo } from "@/assets";
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetTitle,
// 	SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";
// import { TextAlignEnd, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Button } from "../ui/button";
// import { headerLinks } from "@/data";

// const MobileMenu = () => {
// 	const pathname = usePathname();
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<div className="md:hidden">
// 			<Sheet open={isOpen} onOpenChange={setIsOpen}>
// 				<SheetTrigger asChild>
// 					<button
// 						className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// 						aria-label="Open menu"
// 					>
// 						<TextAlignEnd className="h-6 w-6 text-blue-800" />
// 					</button>
// 				</SheetTrigger>
// 				<SheetContent
// 					side="right"
// 					className="w-[70%] p-0 bg-white border-r border-gray-200"
// 					showCloseButton={false}
// 				>
// 					<div className="px-6 py-5 border-b border-gray-200 bg-sartorial-offWhite">
// 						<SheetTitle className="flex items-center justify-between">
// 							<Link
// 								href="/"
// 								onClick={() => setIsOpen(false)}
// 								className="hover:opacity-80 transition-opacity flex items-center gap-2"
// 							>
// 								<BrandLogo />
// 								<span className="text-blue-800 text-lg font-semibold tracking-tight">
// 									Aletheia
// 								</span>
// 							</Link>
// 							<button
// 								onClick={() => setIsOpen(false)}
// 								className="p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
// 								aria-label="Close menu"
// 							>
// 								<X className="h-5 w-5 text-sartorial-green" />
// 							</button>
// 						</SheetTitle>
// 					</div>

// 					<nav className="py-4 px-4">
// 						<div className="flex flex-col space-y-1">
// 							{headerLinks.map(({ href, label }) => (
// 								<Link
// 									key={href}
// 									href={href}
// 									onClick={() => setIsOpen(false)}
// 									className={cn(
// 										"group relative px-4 py-3 rounded-lg font-medium text-base",
// 										"transition-all duration-200",
// 										"hover:bg-blue-50",
// 										pathname === href
// 											? "bg-blue-50 text-blue-800"
// 											: "text-gray-700 hover:text-blue-800",
// 									)}
// 								>
// 									<span className="relative z-10">
// 										{label}
// 									</span>

// 									{pathname === href && (
// 										<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-800 rounded-r-full" />
// 									)}
// 								</Link>
// 							))}
// 						</div>
// 					</nav>

// 					<div className="px-4">
// 						<Button className="bg-blue-800 hover:bg-blue-700 text-white font-bold px-6 h-10 md:h-12 cursor-pointer shadow-md transition-all active:scale-95">
// 							Book a Demo
// 						</Button>
// 					</div>

// 					<div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-sartorial-offWhite/50">
// 						<p className="text-xs text-gray-600 text-center">
// 							© 2026 Assurify
// 						</p>
// 					</div>
// 				</SheetContent>
// 			</Sheet>
// 		</div>
// 	);
// };

// export default MobileMenu;

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
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { headerLinks } from "@/data";

const MobileMenu = () => {
	const pathname = usePathname();
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
					className="w-[75%] max-w-[320px] border-l border-white/[0.06] bg-[rgba(2,8,23,0.97)] p-0 backdrop-blur-[24px]"
					showCloseButton={false}
				>
					{/* Header */}
					<div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-5">
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

					{/* Nav links */}
					<nav className="flex flex-col gap-1 px-3 py-4">
						{headerLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								onClick={() => setIsOpen(false)}
								className={cn(
									"relative flex items-center rounded-lg px-4 py-3 text-[15px] transition-all duration-200",
									pathname === href
										? "bg-blue-600/15 text-slate-100"
										: "text-slate-400 hover:bg-white/5 hover:text-slate-100",
								)}
							>
								{/* Active indicator */}
								{pathname === href && (
									<span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-blue-400" />
								)}
								{label}
							</Link>
						))}
					</nav>

					{/* CTA */}
					<div className="px-4 pt-2">
						<Button
							asChild
							className="w-full h-10 rounded-lg bg-blue-600 text-[14px] font-medium text-white shadow-none transition-all hover:bg-blue-700"
						>
							<Link
								href="https://docs.google.com/forms/d/e/1FAIpQLSfmQ47Nuzoti7Mg1vjFIyqf5P5q1zWCpKrGjdtnYrHtdZckaQ/viewform"
								target="_blank"
								onClick={() => setIsOpen(false)}
							>
								Book a Demo
							</Link>
						</Button>
					</div>

					{/* Footer */}
					<div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] p-4">
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
