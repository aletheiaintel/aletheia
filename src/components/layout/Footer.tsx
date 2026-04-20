"use client";
import Link from "next/link";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/assets";

const navLinks = [
	{ href: "#services", label: "Services" },
	{ href: "#methodology", label: "Methodology" },
	{ href: "#testimonials", label: "Results" },
	{ href: "#faq", label: "FAQ" },
	{ href: "#contact", label: "Contact" },
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
		value: "aletheiaintel@gmail.com",
		href: "mailto:aletheiaintel@gmail.com",
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
		<footer className="relative w-full overflow-hidden bg-[#020817]">
			{/* <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" /> */}

			<div className="pointer-events-none absolute bottom-0 left-1/2 h-75 w-175 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.06)_0%,transparent_70%)]" />

			<div className="relative mx-auto max-w-6xl px-6 lg:px-12">
				<div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr] lg:gap-10 lg:py-20">
					<div className="flex flex-col gap-5">
						<Link
							href="/"
							className="group inline-flex items-center gap-2.5"
						>
							<BrandLogo />
							<span className="text-[17px] font-medium tracking-[0.02em] text-white/80 transition-colors group-hover:text-white">
								Aletheia
							</span>
						</Link>

						<p className="max-w-65 text-[13px] font-light leading-[1.85] text-white/30">
							Market intelligence and strategic clarity for
							founders who need to know the truth before they
							commit.
						</p>

						<div className="flex items-center gap-3 pt-1">
							{socials.map(({ icon: Icon, label, href }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/3 text-white/30 transition-all duration-200 hover:border-blue-700/40 hover:bg-blue-950/40 hover:text-blue-400"
								>
									<Icon className="h-3.5 w-3.5" />
								</a>
							))}
						</div>
					</div>

					<div>
						<p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25">
							Navigation
						</p>
						<ul className="flex flex-col gap-3">
							{navLinks.map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className="group inline-flex items-center gap-1.5 text-[13px] font-light text-white/40 transition-colors duration-150 hover:text-white/75"
									>
										<span className="h-px w-0 bg-blue-500/60 transition-all duration-200 group-hover:w-3" />
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25">
							Services
						</p>
						<ul className="flex flex-col gap-3">
							{services.map((s) => (
								<li key={s}>
									<Link
										href="#services"
										className="group inline-flex items-center gap-1.5 text-[13px] font-light text-white/40 transition-colors duration-150 hover:text-white/75"
									>
										<span className="h-px w-0 bg-blue-500/60 transition-all duration-200 group-hover:w-3" />
										{s}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-5">
						<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25">
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
											<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/[0.07] bg-white/3 transition-colors group-hover:border-blue-700/40 group-hover:bg-blue-950/40">
												<Icon className="h-3 w-3 text-white/30 transition-colors group-hover:text-blue-400" />
											</div>
											<div>
												<p className="text-[10px] uppercase tracking-[0.08em] text-white/20">
													{label}
												</p>
												<p className="text-[12px] font-light text-white/45 transition-colors group-hover:text-white/70">
													{value}
												</p>
											</div>
										</a>
									</li>
								),
							)}
						</ul>

						<a
							href="#contact"
							className="group mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-700/30 bg-blue-950/30 px-4 py-2.5 text-[12px] font-medium text-blue-400 transition-all duration-200 hover:border-blue-600/50 hover:bg-blue-950/50 hover:text-blue-300"
						>
							Book a discovery call
							<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
					<p className="text-[12px] font-light text-white/25">
						© {year} Aletheia. All rights reserved.
					</p>

					<p className="font-serif text-[12px] italic">
						<span className="text-white/25">
							Aletheia — truth revealed.
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
