"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { headerLinks } from "@/data";
import { BrandLogo } from "@/assets";
import MobileMenu from "../shared/MobileMenu";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/6 bg-[rgba(2,8,23,0.75)] backdrop-blur-lg">
			<div className="mx-auto flex max-w-325 items-center justify-between px-6 py-5 md:px-12">
				<Link
					href="/"
					className="flex items-center gap-2.5 transition-opacity hover:opacity-80 active:scale-95"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<BrandLogo />
					<span className="text-[17px] font-medium tracking-[0.02em] text-slate-100">
						Aletheia
					</span>
				</Link>

				<div className="hidden md:flex items-center gap-20">
					<nav className="flex items-center gap-8">
						{headerLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={cn(
									"relative text-[14px] font-normal text-slate-400 transition-colors duration-200",
									"after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-blue-400",
									"after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
									"hover:text-slate-100 hover:after:scale-x-100",
									pathname === href &&
										"text-slate-100 after:scale-x-100",
								)}
							>
								{label}
							</Link>
						))}
					</nav>

					<Button
						asChild
						className="h-10 rounded-[10px] bg-blue-600 px-6 text-[15px] font-medium shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_8px_24px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.6),0_12px_32px_rgba(37,99,235,0.35)]"
					>
						<Link href="#contact">Book a Demo</Link>
					</Button>
				</div>

				<MobileMenu />
			</div>
		</header>
	);
};

export default Navbar;
