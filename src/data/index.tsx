import {
	FlaskConical,
	Crosshair,
	BarChart2,
	Rocket,
	Megaphone,
} from "lucide-react";

export const ACCENT = "#C9981A";
export const ACCENT_GREEN = "#1A7A4C";

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

export const TESTIMONIALS = [
	{
		quote: "Aletheia didn't tell us what we wanted to hear. They told us what we needed to hear. The validation report killed a £200k mistake before we made it.",
		author: "James Okafor",
		role: "Founder & CEO",
		company: "Helix Ventures",
		service: "PMF Validation",
		accentColor: "#C9981A",
		rotation: "-2deg",
	},
	{
		quote: "Our messaging was generic and losing deals. After the brand positioning work, our conversion rate on discovery calls went from 18% to 41% in eight weeks.",
		author: "Chioma Adeyemi",
		role: "Co-Founder",
		company: "Prism Analytics",
		service: "Brand Strategy",
		accentColor: "#1A7A4C",
		rotation: "1.5deg",
	},
	{
		quote: "The market intelligence report they delivered was the kind of work I'd expect from a Big Four firm at a fraction of the cost. It became our Series A cornerstone.",
		author: "Kwame Mensah",
		role: "Managing Director",
		company: "Nexus Capital",
		service: "Market Intelligence",
		accentColor: "#0284C7",
		rotation: "-1deg",
	},
	{
		quote: "Three months of unfocused launch planning solved in two weeks. The GTM playbook gave our team a single, clear direction. We hit our 90-day revenue target in 60.",
		author: "Adaeze Nwosu",
		role: "Head of Growth",
		company: "Sola Technologies",
		service: "Go-To-Market Strategy",
		accentColor: "#E5484D",
		rotation: "2deg",
	},
	{
		quote: "The Brand Activation retainer changed how we show up online. Our content finally feels like us — strategic, not performative. Pipeline influence is measurable now.",
		author: "Emeka Eze",
		role: "Chief Marketing Officer",
		company: "Darta Group",
		service: "Brand Activation",
		accentColor: "#C9981A",
		rotation: "-1.5deg",
	},
	{
		quote: "Aletheia's truth-first approach is rare. Most consultants validate your idea and take the money. They genuinely told us to pivot. Best advice we ever got.",
		author: "Fatima Al-Rashid",
		role: "Entrepreneur",
		company: "Meridian Studio",
		service: "PMF Validation",
		accentColor: "#1A7A4C",
		rotation: "1deg",
	},
];

export const STATS = [
	{ value: "48+", label: "Markets Researched" },
	{ value: "94%", label: "Client Satisfaction" },
	{ value: "2.8×", label: "Average ROI Lift" },
	{ value: "₦4M+", label: "Mistakes Prevented" },
];

export const SERVICES_LIST = [
	"PMF Validation",
	"Brand Strategy & Positioning",
	"Market Intelligence",
	"Go-To-Market Strategy",
	"Brand Activation",
	"Not sure yet",
];

export const PHASES = [
	{
		number: "01",
		phase: "Phase 1",
		title: "Idea Triage",
		description:
			"Filter signal from noise. We assess your idea against market conditions, competitive landscape, and timing to determine if it's worth pursuing before a single dollar is spent.",
		accent: "#C9981A",
		iconBg: "#FFF3E0",
		detail: "Market conditions · Competitive landscape · Timing analysis",
	},
	{
		number: "02",
		phase: "Phase 2",
		title: "Customer Discovery",
		description:
			"Interview real prospects. We conduct structured discovery interviews to uncover true pain points, buying triggers, and genuine willingness to pay — not what people say, but what they mean.",
		accent: "#1A7A4C",
		iconBg: "#E8F5EE",
		detail: "Structured interviews · Pain mapping · Buying triggers",
	},
	{
		number: "03",
		phase: "Phase 3",
		title: "Smoke Test",
		description:
			"Test demand with behavioral commitment signals. We design and run demand tests — landing pages, outreach, preorders — to gather proof of intent before full investment.",
		accent: "#0284C7",
		iconBg: "#E0F2FE",
		detail: "Landing pages · Outreach · Preorder campaigns",
	},
	{
		number: "04",
		phase: "Phase 4",
		title: "Kill or Commit",
		description:
			"Go/No-Go decision backed by structured evidence. We deliver a clear, honest recommendation: build, pivot, or abandon — with the data to defend any path forward.",
		accent: "#E5484D",
		iconBg: "#FFECEC",
		detail: "Evidence synthesis · Strategic recommendation · Risk assessment",
	},
];

export const faqs = [
	{
		category: "Getting Started",
		accent: ACCENT_GREEN,
		items: [
			{
				q: "What happens on a discovery call?",
				a: "It's a 30–45 minute conversation — no pitch deck, no proposal push. We ask questions about your situation, your constraints, and what you've already tried. At the end, we'll tell you honestly whether we think we can help, and if so, what that would look like. If we're not the right fit, we'll say so.",
			},
			{
				q: "How do I know which service I need?",
				a: "Most clients come in unsure — that's exactly what the discovery call is for. If you're pre-revenue and validating an idea, you likely need PMF Validation. If you have traction but aren't converting or positioning well, Brand Strategy or GTM is the right entry point. If you're unsure, select \"Not sure — need a diagnosis\" on the contact form and we'll scope it together.",
			},
			{
				q: "Do you work with early-stage founders or more established companies?",
				a: "Both. Our PMF Validation and Market Intelligence services are built for founders at the idea or pre-revenue stage. Brand Strategy, GTM, and Brand Activation work best for companies with some traction — typically seed-stage and beyond — who are ready to scale with a clear strategic foundation.",
			},
		],
	},
	{
		category: "Engagements & Process",
		accent: ACCENT,
		items: [
			{
				q: "Do all engagements follow the four-phase methodology?",
				a: "Not necessarily. The four phases — Idea Triage, Customer Discovery, Smoke Test, and Kill or Commit — represent the full PMF validation arc. Most engagements run one or two phases depending on where you are and where the uncertainty lives. We scope every project specifically to your situation, not a fixed template.",
			},
			{
				q: "How long does a typical engagement take?",
				a: "It depends on the service. PMF Validation typically runs 4–8 weeks end-to-end. Brand Strategy and GTM projects are usually 3–6 weeks. Market Intelligence reports can be delivered in as little as 2 weeks. We'll give you a realistic timeline — and stick to it — before any engagement begins.",
			},
			{
				q: "Will I be working directly with senior people, or handed off to a junior team?",
				a: "You work directly with us. Aletheia is deliberately lean — we don't use your engagement to train juniors or pad hours. Every call, analysis, and deliverable comes from the people you spoke with on your discovery call.",
			},
		],
	},
	{
		category: "Outcomes & Expectations",
		accent: "#0284C7",
		items: [
			{
				q: "What if your validation work concludes my idea won't work?",
				a: "That's a successful engagement. A definitive no-go in six weeks is worth more than 18 months building the wrong thing. We've helped founders save $200K+ in misdirected build costs by surfacing the hard truth early — before the money is spent. Clarity in either direction is the deliverable.",
			},
			{
				q: "How is Aletheia different from a typical marketing or strategy agency?",
				a: "Most agencies optimise for ongoing retainers and deliverable volume. We optimise for honest decisions. We won't recommend a service you don't need, extend an engagement beyond its useful life, or dress up inconclusive data as a confident recommendation. Our name means truth revealed — that's a standard we hold ourselves to commercially as well.",
			},
			{
				q: "Can you guarantee results like the ones in your case studies?",
				a: "No — and we'd be suspicious of anyone who does. What we can guarantee is rigorous methodology, direct communication, and a willingness to tell you what you need to hear rather than what you want to hear. The outcomes in our case studies reflect real engagements with founders who acted decisively on clear intelligence.",
			},
		],
	},
];

export const TEAM = [
	{
		name: "Oluwaseun Adeyemi",
		role: "Co-Founder & Managing Partner",
		bio: "Former strategy consultant with 8 years across West African markets. Oluwaseun built Aletheia after watching too many founders commission research that validated bad ideas.",
		initials: "OA",
		accent: "#1A7A4C",
		bg: "#E8F5EE",
	},
	{
		name: "Chidinma Okafor",
		role: "Co-Founder & Head of Intelligence",
		bio: "Trained researcher with a background in behavioural economics. Chidinma leads every customer discovery engagement — she finds the signals others miss and refuses to bury them.",
		initials: "CO",
		accent: "#C9981A",
		bg: "#FFF8E6",
	},
	{
		name: "Emeka Nwosu",
		role: "Senior Research Analyst",
		bio: "Quantitative and qualitative research specialist. Emeka turns raw market data into the structured intelligence that drives every Aletheia deliverable — precise, evidence-based, and direct.",
		initials: "EN",
		accent: "#0284C7",
		bg: "#E0F2FE",
	},
];

export const VALUES = [
	{
		number: "01",
		title: "Truth-first",
		description:
			"We say what the data says, not what the client hopes to hear. A definitive no is as valuable as a yes — and we deliver both with equal honesty.",
		accent: "#1A7A4C",
		bg: "#E8F5EE",
	},
	{
		number: "02",
		title: "Evidence over opinion",
		description:
			"Every recommendation is grounded in structured research, real customer interviews, and verifiable market signals. Not gut feel. Not trend chasing.",
		accent: "#C9981A",
		bg: "#FFF8E6",
	},
	{
		number: "03",
		title: "Directness without agenda",
		description:
			"We have no interest in extending engagements beyond their useful life. When the work is done, we say so — and we tell you exactly what to do next.",
		accent: "#E5484D",
		bg: "#FFECEC",
	},
];
