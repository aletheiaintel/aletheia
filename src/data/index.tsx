import {
	FlaskConical,
	Crosshair,
	BarChart2,
	Rocket,
	Megaphone,
} from "lucide-react";

export const headerLinks = [
	{ href: "/about-us", label: "About Us" },
	{ href: "/#services", label: "Services" },
	{ href: "/#methodology", label: "Methodology" },
	{ href: "/#testimonials", label: "Testimonials" },
	{ href: "/#contact", label: "Contact" },
];

export const SERVICES = [
	{
		index: "01",
		icon: FlaskConical,
		title: "PMF Validation",
		subtitle: "Know the truth before you build a single line of code.",
		description:
			"We apply a structured four-phase framework—Idea Triage, Customer Discovery, Smoke Testing, and Kill or Commit—to determine whether a real, scalable market exists before you invest a dollar.",
		deliverable: "Go/No-Go Validation Report",
		tags: [
			"ICP Definition",
			"Discovery Interviews",
			"Smoke Testing",
			"Signal Analysis",
		],
		accent: "#1A7A4C",
		tagBg: "#E8F5EE",
		iconBg: "#E8F5EE",
	},
	{
		index: "02",
		icon: Crosshair,
		title: "Brand Strategy & Positioning",
		subtitle:
			"Own a clear position in your market or get lost in the noise.",
		description:
			"Brand positioning is the single most leveraged strategic decision a business makes. We map your competitive landscape, define your ICP with precision, and craft the narrative that makes you the obvious choice.",
		deliverable: "Brand Positioning Document",
		tags: [
			"ICP Deep Dive",
			"Competitive Mapping",
			"Positioning Statement",
			"Brand Narrative",
		],
		accent: "#C9981A",
		tagBg: "#FFF8E6",
		iconBg: "#FFF3CC",
	},
	{
		index: "03",
		icon: BarChart2,
		title: "Market Intelligence",
		subtitle: "Decisions without intelligence are guesses.",
		description:
			"Deep market research, competitive analysis, and customer insight work that gives you an evidence-based picture of the market you're entering. Not surface-level — the intelligence that drives real strategic decisions.",
		deliverable: "Market Intelligence Report",
		tags: [
			"TAM/SAM/SOM Sizing",
			"Competitive Audit",
			"Trend Analysis",
			"Opportunity Mapping",
		],
		accent: "#0284C7",
		tagBg: "#E0F2FE",
		iconBg: "#E0F2FE",
	},
	{
		index: "04",
		icon: Rocket,
		title: "Go-To-Market Strategy",
		subtitle: "A launch plan that converts intelligence into traction.",
		description:
			"Knowing your market is half the battle. Getting to it with precision is the other. We sequence your launch correctly, target the right channels, and build momentum from day one — without wasting budget on untested assumptions.",
		deliverable: "GTM Playbook",
		tags: [
			"GTM Design",
			"Channel Selection",
			"Launch Sequencing",
			"KPI Framework",
		],
		accent: "#E5484D",
		tagBg: "#FFECEC",
		iconBg: "#FFECEC",
	},
	{
		index: "05",
		icon: Megaphone,
		title: "Brand Activation",
		subtitle: "Strategy brought to life across every channel that matters.",
		description:
			"Strategy without execution is just a document. We take your positioning and GTM playbook and activate it across social and digital channels with the same precision and intelligence that defines every Aletheia engagement.",
		deliverable: "Monthly Retainer · 3 Tiers",
		tags: [
			"Social Strategy",
			"Content Creation",
			"Community Management",
			"Performance Reporting",
		],
		accent: "#C9981A",
		tagBg: "#FFF8E6",
		iconBg: "#FFF3CC",
	},
];
