"use client";
import Link from "next/link";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/assets";

const GOLD = "#C9981A";
const GREEN = "#1A7A4C";

const navLinks = [
	{ href: "/#services", label: "Services" },
	{ href: "/#methodology", label: "Methodology" },
	{ href: "/#our-work", label: "Results" },
	{ href: "/#faq", label: "FAQ" },
	{ href: "/#contact", label: "Contact" },
];

const services = [
	"PMF Validation",
	"Brand Strategy & Positioning",
	"Market Intelligence",
	"Go-To-Market Strategy",
	"Brand Activation",
];

const socials = [
	{
		icon: Mail,
		label: "Email",
		value: "hello@aletheiaintl.com",
		href: "mailto:hello@aletheiaintl.com",
	},
	{
		icon: Globe,
		label: "Website",
		value: "aletheiaintl.com",
		href: "https://aletheiaintl.com",
	},
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative w-full overflow-hidden bg-[#121212]">
			{/* Subtle warm texture overlay */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			{/* Warm gold ambient glow at bottom */}
			<div
				className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-150 -translate-x-1/2 rounded-full"
				style={{
					background: `radial-gradient(ellipse, ${GOLD}0A 0%, transparent 70%)`,
				}}
			/>

			{/* Top border — gold rule matching section dividers */}
			<div
				className="absolute inset-x-0 top-0 h-px"
				style={{
					background: `linear-gradient(to right, transparent, ${GOLD}50, transparent)`,
				}}
			/>

			<div className="relative mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr] lg:gap-10 lg:py-20">
					{/* Brand column */}
					<div className="flex flex-col gap-5">
						<Link
							href="/"
							className="group inline-flex items-center gap-2.5"
						>
							<BrandLogo />
							<span className="flex flex-col leading-none gap-0.75">
								<span className="text-[18px] md:text-[22px] font-semibold tracking-tight text-white/85 transition-colors duration-200 group-hover:text-white">
									Aletheia
								</span>
								<span
									className="text-[9px] md:text-[11px] font-semibold tracking-[0.18em] uppercase"
									style={{ color: GOLD }}
								>
									Intelligence
								</span>
							</span>
						</Link>

						<p className="max-w-65 text-[13px] font-light leading-[1.85] text-white/60">
							Market intelligence and strategic clarity for
							founders who need to know the truth before they
							commit.
						</p>

						{/* Social icons */}
						<div className="flex items-center gap-3 pt-1">
							{socials.map(({ icon: Icon, label, href }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/3 text-white/55 transition-all duration-200 hover:border-[#C9981A]/40 hover:bg-[#C9981A]/10 hover:text-[#C9981A]"
								>
									<Icon className="h-3.5 w-3.5" />
								</a>
							))}
						</div>
					</div>

					{/* Navigation */}
					<div>
						<p
							className="mb-5 text-[10px] font-medium uppercase tracking-[0.14em]"
							style={{ color: `${GREEN}CC` }}
						>
							Navigation
						</p>
						<ul className="flex flex-col gap-3">
							{navLinks.map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className="group inline-flex items-center gap-2 text-[13px] font-light text-white/65 transition-colors duration-150 hover:text-white"
									>
										<span
											className="h-px w-0 transition-all duration-200 group-hover:w-3"
											style={{ background: GOLD }}
										/>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<p
							className="mb-5 text-[10px] font-medium uppercase tracking-[0.14em]"
							style={{ color: `${GREEN}CC` }}
						>
							Services
						</p>
						<ul className="flex flex-col gap-3">
							{services.map((s) => (
								<li key={s}>
									<Link
										href="#services"
										className="group inline-flex items-center gap-2 text-[13px] font-light text-white/65 transition-colors duration-150 hover:text-white"
									>
										<span
											className="h-px w-0 transition-all duration-200 group-hover:w-3"
											style={{ background: GOLD }}
										/>
										{s}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact column */}
					<div className="flex flex-col gap-5">
						<p
							className="text-[10px] font-medium uppercase tracking-[0.14em]"
							style={{ color: `${GREEN}CC` }}
						>
							Get in touch
						</p>

						<ul className="flex flex-col gap-4">
							{socials.map(
								({ icon: Icon, label, value, href }) => (
									<li key={label}>
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-start gap-3"
										>
											<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/8 bg-white/3 transition-all duration-200 group-hover:border-[#C9981A]/40 group-hover:bg-[#C9981A]/10">
												<Icon className="h-3 w-3 text-white/55 transition-colors duration-200 group-hover:text-[#C9981A]" />
											</div>
											<div>
												<p className="text-[10px] uppercase tracking-[0.08em] text-white/45">
													{label}
												</p>
												<p className="text-[12px] font-light text-white/70 transition-colors duration-200 group-hover:text-white">
													{value}
												</p>
											</div>
										</a>
									</li>
								),
							)}
						</ul>

						{/* CTA */}
						<a
							href="#contact"
							className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium tracking-[0.04em] uppercase transition-all duration-200 hover:-translate-y-px"
							style={{
								border: `1px solid ${GOLD}40`,
								background: `${GOLD}0D`,
								color: GOLD,
							}}
							onMouseEnter={(e) => {
								(
									e.currentTarget as HTMLElement
								).style.background = `${GOLD}1A`;
								(
									e.currentTarget as HTMLElement
								).style.borderColor = `${GOLD}70`;
							}}
							onMouseLeave={(e) => {
								(
									e.currentTarget as HTMLElement
								).style.background = `${GOLD}0D`;
								(
									e.currentTarget as HTMLElement
								).style.borderColor = `${GOLD}40`;
							}}
						>
							Book a discovery call
							<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					</div>
				</div>

				{/* Bottom bar */}
				<div
					className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row"
					style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
				>
					<p className="text-[12px] font-light text-white/50">
						© {year} Aletheia Intelligence LLC. All rights reserved.
					</p>

					<p
						className="font-serif text-[12px] italic"
						style={{ color: `${GOLD}CC` }}
					>
						Aletheia — truth revealed.
					</p>
				</div>
			</div>
		</footer>
	);
}
