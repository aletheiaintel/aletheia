"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { headerLinks } from "@/data";
import { BrandLogo } from "@/assets";
import { useActiveSection } from "@/hooks/useActiveSection";
import MobileMenu from "../shared/MobileMenu";

const Navbar = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
	const { isActive } = useActiveSection();

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const onDark = variant === "dark" && !isScrolled;

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
				isScrolled ? "bg-white/70 backdrop-blur-xl" : "bg-transparent",
			)}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
				<Link
					href="/"
					className="flex items-center gap-2.5 transition-opacity hover:opacity-80 active:scale-95"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					<BrandLogo />
					<span
						className={cn(
							"text-[18px] font-semibold tracking-tight transition-colors duration-300",
							onDark ? "text-white" : "text-[#121212]",
						)}
					>
						Aletheia
					</span>
				</Link>

				<div className="hidden md:flex items-center gap-12">
					<nav className="flex items-center gap-10">
						{headerLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={cn(
									"relative text-[14px] font-normal transition-colors duration-200",
									"after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#C9981A]",
									"after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
									"hover:after:scale-x-100",
									onDark
										? "text-white/70 hover:text-white"
										: "text-[#666] hover:text-[#C9981A]",
									isActive(href) &&
										"text-[#C9981A] font-medium after:scale-x-100",
								)}
							>
								{label}
							</Link>
						))}
					</nav>

					<Button
						asChild
						className={cn(
							"h-11 rounded-full px-6 text-[14px] font-medium shadow-lg transition-all hover:scale-[1.02]",
							onDark
								? "bg-white text-[#121212] shadow-white/10 hover:bg-white/90 hover:text-white"
								: "bg-[#121212] text-white shadow-black/10 hover:bg-[#222]",
						)}
					>
						<Link href="#contact">Book a Demo</Link>
					</Button>
				</div>
				<MobileMenu onDark={onDark} />
			</div>
		</header>
	);
};

export default Navbar;
