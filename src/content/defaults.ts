import { FAQ_SECTIONS } from "../data/faqPage";
import { note, paragraph, paragraphs, table } from "./richText";
import type {
	AboutPage,
	FaqPage,
	HomePage,
	SiteSettings,
} from "./types";

// The site's original copy. It renders whenever a Sanity field is empty or the
// CMS is unreachable, and `scripts/seed.ts` uploads it as the starting content.

export const defaultSettings: SiteSettings = {
	tagline: ["Truth", "Strategy", "Intelligence"],
	headerLinks: [
		{ label: "About Us", href: "/about-us" },
		{ label: "Services", href: "/#services" },
		{ label: "Methodology", href: "/#methodology" },
		{ label: "Our Work", href: "/#our-work" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Contact", href: "/#contact" },
	],
	headerCta: { label: "Get Started", href: "/#contact" },
	footerBlurb:
		"Market intelligence and strategic clarity for founders who need to know the truth before they commit.",
	footerLinks: [
		{ label: "Services", href: "/#services" },
		{ label: "Methodology", href: "/#methodology" },
		{ label: "Results", href: "/#our-work" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Contact", href: "/#contact" },
	],
	footerCta: { label: "Book a discovery call", href: "/#contact" },
	footerSignature: "Aletheia — truth revealed.",
	copyrightName: "Aletheia Intelligence LLC",
	contactEmail: "hello@aletheiaintl.com",
	websiteLabel: "aletheiaintl.com",
	websiteUrl: "https://aletheiaintl.com",
	enquiryRecipient: "hello@aletheiaintl.com",
	stats: [
		{ value: "10+", label: "Years of Experience" },
		{ value: "18", label: "Industries Served" },
		{ value: "4-Phase", label: "Proven Framework" },
		{ value: "100%", label: "Go/No-Go Verdicts Delivered" },
	],
	seo: {
		title: "Aletheia Intelligence — Truth . Strategy . Intelligence",
		description:
			"Market intelligence, brand strategy, GTM, and growth marketing for founders and operators. We reveal the truth of your market before you build, launch, or commit. aletheiaintl.com",
		ogImageUrl:
			"https://res.cloudinary.com/dqf3gmp8y/image/upload/v1777043853/BrandLogo_512x512_g28tar.png",
	},
};

export const defaultHome: HomePage = {
	seo: {},
	hero: {
		headline: "Reveal the truth\nof your",
		typedWords: ["Market.", "Industry.", "Audience.", "Future.", "Competitors."],
		body: "We provide the data-driven clarity needed to outpace competitors and launch with absolute certainty.",
		primaryCta: { label: "Book a Discovery Call", href: "#contact" },
		secondaryCta: { label: "Explore All Services", href: "#services" },
	},
	services: {
		eyebrow: "Intelligence Framework",
		headline: "Five ways *truth*\nbecomes your edge.",
		intro: "Every engagement is built on rigorous methodology. No guesswork. No comfort. Only clarity backed by evidence.",
		items: [
			{
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
				icon: "FlaskConical",
				colour: "green",
			},
			{
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
				icon: "Crosshair",
				colour: "gold",
			},
			{
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
				icon: "BarChart2",
				colour: "blue",
			},
			{
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
				icon: "Rocket",
				colour: "red",
			},
			{
				title: "Brand Activation",
				subtitle:
					"Strategy brought to life across every channel that matters.",
				description:
					"Strategy without execution is just a document. We take your positioning and GTM playbook and activate it across social and digital channels with the same precision and intelligence that defines every Aletheia engagement.",
				deliverable: "Monthly Retainer · 3 Tiers",
				tags: [
					"Social Strategy",
					"Content Creation",
					"Community Management",
					"Performance Reporting",
				],
				icon: "Megaphone",
				colour: "gold",
			},
		],
		faqLink: { lead: "Have questions about how this works?", label: "See the FAQ" },
		cta: {
			eyebrow: "Ready to know the truth?",
			headline: "No pitch. Just an honest\n*conversation.*",
			body: "Every engagement begins with a discovery call. We listen first, diagnose second, and recommend only what will genuinely move the needle.",
			buttonLabel: "Book a Discovery Call",
			buttonHref: "#contact",
		},
	},
	methodology: {
		eyebrow: "Our Four-Phase Framework",
		headline: "Structured precision.\n*No guesswork.*",
		phases: [
			{
				title: "Idea Triage",
				description:
					"Filter signal from noise. We assess your idea against market conditions, competitive landscape, and timing to determine if it's worth pursuing before a single dollar is spent.",
				detail: "Market conditions · Competitive landscape · Timing analysis",
				colour: "gold",
			},
			{
				title: "Customer Discovery",
				description:
					"Interview real prospects. We conduct structured discovery interviews to uncover true pain points, buying triggers, and genuine willingness to pay — not what people say, but what they mean.",
				detail: "Structured interviews · Pain mapping · Buying triggers",
				colour: "green",
			},
			{
				title: "Smoke Test",
				description:
					"Test demand with behavioral commitment signals. We design and run demand tests — landing pages, outreach, preorders — to gather proof of intent before full investment.",
				detail: "Landing pages · Outreach · Preorder campaigns",
				colour: "blue",
			},
			{
				title: "Kill or Commit",
				description:
					"Go/No-Go decision backed by structured evidence. We deliver a clear, honest recommendation: build, pivot, or abandon — with the data to defend any path forward.",
				detail: "Evidence synthesis · Strategic recommendation · Risk assessment",
				colour: "red",
			},
		],
		quote: "“Positive feedback is not validation.\n*Commitment signals are.”*",
		quoteAttribution: "Aletheia Intelligence Philosophy",
	},
	testimonials: {
		eyebrow: "Client Results",
		headline: "Truth, confirmed\nby those who *acted on it.*",
		intro: "Not testimonials we asked for. Results we were proud enough to share.",
		items: [
			{
				quote: "Aletheia didn't tell us what we wanted to hear. They told us what we needed to hear. The validation report killed a $200k mistake before we made it.",
				author: "B2B SaaS Founder",
				role: "Founder & CEO",
				company: "Series A Startup",
				service: "PMF Validation",
				colour: "gold",
			},
			{
				quote: "Our messaging was generic and losing deals. After the brand positioning work, our conversion rate on discovery calls went from 18% to 41% in eight weeks.",
				author: "Health Tech Co-Founder",
				role: "Co-Founder",
				company: "Health Tech Startup",
				service: "Brand Strategy",
				colour: "green",
			},
			{
				quote: "The market intelligence report they delivered was the kind of work I'd expect from a Big Four firm at a fraction of the cost. It became our Series A cornerstone.",
				author: "Venture Capital MD",
				role: "Managing Director",
				company: "Early-Stage VC Firm",
				service: "Market Intelligence",
				colour: "blue",
			},
			{
				quote: "Three months of unfocused launch planning solved in two weeks. The GTM playbook gave our team a single, clear direction. We hit our 90-day revenue target in 60.",
				author: "CleanTech Head of Growth",
				role: "Head of Growth",
				company: "CleanTech Startup",
				service: "Go-To-Market Strategy",
				colour: "red",
			},
			{
				quote: "The Brand Activation retainer changed how we show up online. Our content finally feels like us — strategic, not performative. Pipeline influence is measurable now.",
				author: "B2B Consultancy CMO",
				role: "Chief Marketing Officer",
				company: "B2B Consultancy",
				service: "Brand Activation",
				colour: "gold",
			},
			{
				quote: "Aletheia's truth-first approach is rare. Most consultants validate your idea and take the money. They genuinely told us to pivot. Best advice we ever got.",
				author: "Fintech Founder",
				role: "Founder",
				company: "Fintech Startup",
				service: "PMF Validation",
				colour: "green",
			},
		],
	},
	faq: {
		eyebrow: "Common Questions",
		headline: "Questions, answered\n*without the spin.*",
		intro: "Straightforward answers, the same ones you'd get on a discovery call.",
		groups: [
			{
				title: "Getting Started",
				colour: "green",
				items: [
					{
						question: "What happens on a discovery call?",
						answer: paragraphs(
							"It's a 30 to 45 minute conversation. No pitch deck, no proposal push. We ask questions about your situation, your constraints, and what you've already tried. At the end, we'll tell you honestly whether we think we can help, and if so, what that would look like. If we're not the right fit, we'll say so.",
						),
					},
					{
						question: "How do I know which service I need?",
						answer: paragraphs(
							"Most clients come in unsure. That's exactly what the discovery call is for. If you're pre-revenue and validating an idea, you likely need PMF Validation. If you have traction but aren't converting or positioning well, Brand Strategy or GTM is the right entry point. If you're unsure, select \"Not sure — need a diagnosis\" on the contact form and we'll scope it together.",
						),
					},
					{
						question: "What does an engagement cost?",
						answer: [
							paragraph(
								"Engagements are scoped and priced specifically to each project. We don't publish fixed rates because the right scope depends entirely on your situation, your stage, and where the real uncertainty lives.",
							),
							paragraph(
								"That said, here are honest starting ranges so you can assess fit before a call:",
							),
							table(
								"columns",
								"gold",
								[
									["PMF Validation Sprint", "$3,500", "$3,500 – $8,000"],
									["Brand Strategy & Positioning", "$5,000", "$5,000 – $12,000"],
									["Market Intelligence Report", "$2,500", "$2,500 – $7,500"],
									["Go-To-Market Strategy", "$5,000", "$5,000 – $15,000"],
									["Brand Activation Retainer", "$1,200/mo", "$1,200 – $3,500/mo"],
								],
								["Service", "Starting From", "Typical Range"],
							),
							paragraph(
								"After your discovery call we'll provide a clear, itemized proposal with a fixed scope, a fixed price, and a realistic timeline. No retainer lock-ins unless you choose Brand Activation. No hidden fees. No scope creep without your explicit approval.",
							),
							note(
								"If budget is a constraint, tell us on the call. We'd rather scope something that fits than lose a client who was the right fit for the wrong budget conversation.",
							),
						],
					},
					{
						question: "Do you work with clients outside the US?",
						answer: [
							paragraph(
								"Yes. While Aletheia Intelligence is headquartered in Wyoming and our primary market is the United States, we work with founders and businesses globally. Geography has never been a barrier to an engagement.",
							),
							table(
								"columns",
								"green",
								[
									[
										"PMF Validation",
										"Global",
										"Market conditions are assessed for the specific geography you are targeting, not the US by default.",
									],
									[
										"Brand Strategy & Positioning",
										"Global",
										"Positioning work is market-specific. We adapt messaging frameworks to the cultural and competitive context of your target market.",
									],
									[
										"Market Intelligence",
										"Global",
										"We research the market you are entering, regardless of where it is. Research methodology is consistent across geographies.",
									],
									[
										"Go-To-Market Strategy",
										"Global",
										"GTM strategy is built around where your customers are, not where we are.",
									],
									[
										"Brand Activation",
										"English",
										"Currently optimized for English-language social and digital channels. Expansion to other languages available on request.",
									],
								],
								["Service", "Scope", "Notes"],
							),
							paragraph(
								"Discovery calls are conducted remotely via video. Zoom, Google Meet, or whatever works for you. Time zone differences have never prevented a good conversation. We have worked with founders across Europe, Africa, the Middle East, and Asia.",
							),
							note(
								"If you are outside the US and want to know whether your specific market is one we can research credibly, ask us on the discovery call. We will tell you honestly.",
							),
						],
					},
					{
						question:
							"Do you work with early-stage founders or more established companies?",
						answer: paragraphs(
							"Both. Our PMF Validation and Market Intelligence services are built for founders at the idea or pre-revenue stage. Brand Strategy, GTM, and Brand Activation work best for companies with some traction, typically seed-stage and beyond, who are ready to scale with a clear strategic foundation.",
						),
					},
				],
			},
			{
				title: "Engagements & Process",
				colour: "gold",
				items: [
					{
						question: "Is my business idea kept confidential?",
						answer: [
							paragraph(
								"Completely. Confidentiality is not a courtesy we extend. It is a structural commitment we make before any substantive conversation begins.",
							),
							table("labelled", "gold", [
								[
									"Before the discovery call",
									"We sign a mutual Non-Disclosure Agreement (NDA) before any detailed discussion of your business, idea, or market. You will receive our standard NDA before the call, or we will sign yours if you prefer.",
								],
								[
									"During engagements",
									"Everything shared with us, including your idea, your research, your financials, your competitive insights, and your strategic direction, is treated as strictly confidential. We do not share it with third parties under any circumstance.",
								],
								[
									"After engagements",
									"All client information is retained securely and never referenced, shared, or used in any public-facing material without your explicit written permission. This applies permanently, not just during the engagement.",
								],
								[
									"Case studies",
									"We never publish client names, company names, or identifying details without signed consent. Our published case studies are anonymised by default. That is a deliberate policy, not a convenience.",
								],
								[
									"Conflict of interest",
									"We do not work with direct competitors in the same market simultaneously. If a potential conflict exists, we will flag it on the discovery call before any engagement begins.",
								],
							]),
							note(
								"If you are sitting on an idea you have not shared with anyone yet, that is exactly the kind of conversation we are built for. The NDA is standard. The discretion is unconditional.",
							),
						],
					},
					{
						question: "Do all engagements follow the four-phase methodology?",
						answer: paragraphs(
							"Not necessarily. The four phases (Idea Triage, Customer Discovery, Smoke Test, and Kill or Commit) represent the full PMF validation arc. Most engagements run one or two phases depending on where you are and where the uncertainty lives. We scope every project specifically to your situation, not a fixed template.",
						),
					},
					{
						question: "How long does a typical engagement take?",
						answer: paragraphs(
							"It depends on the service. PMF Validation typically runs 4 to 8 weeks end-to-end. Brand Strategy and GTM projects are usually 3 to 6 weeks. Market Intelligence reports can be delivered in as little as 2 weeks. We'll give you a realistic timeline and stick to it before any engagement begins.",
						),
					},
					{
						question:
							"Will I be working directly with senior people, or handed off to a junior team?",
						answer: paragraphs(
							"You work directly with us. Aletheia is deliberately lean. We don't use your engagement to train juniors or pad hours. Every call, analysis, and deliverable comes from the people you spoke with on your discovery call.",
						),
					},
				],
			},
			{
				title: "Outcomes & Expectations",
				colour: "blue",
				items: [
					{
						question:
							"What if your validation work concludes my idea won't work?",
						answer: paragraphs(
							"That's a successful engagement. A definitive no-go in six weeks is worth more than 18 months building the wrong thing. We've helped founders save $200K+ in misdirected build costs by surfacing the hard truth early, before the money is spent. Clarity in either direction is the deliverable.",
						),
					},
					{
						question:
							"How is Aletheia different from a typical marketing or strategy agency?",
						answer: paragraphs(
							"Most agencies optimise for ongoing retainers and deliverable volume. We optimise for honest decisions. We won't recommend a service you don't need, extend an engagement beyond its useful life, or dress up inconclusive data as a confident recommendation. Our name means truth revealed. That's a standard we hold ourselves to commercially as well.",
						),
					},
					{
						question:
							"Can you guarantee results like the ones in your case studies?",
						answer: paragraphs(
							"No, and we'd be suspicious of anyone who does. What we can guarantee is rigorous methodology, direct communication, and a willingness to tell you what you need to hear rather than what you want to hear. The outcomes in our case studies reflect real engagements with founders who acted decisively on clear intelligence.",
						),
					},
				],
			},
		],
		faqLink: {
			lead: "More questions?",
			label: "See the full FAQ - aletheiaintl.com/faq",
		},
		cta: {
			eyebrow: "Still have a question?",
			headline: "Ask it on a call.\n*No pitch. No pressure.*",
			body: "Every question you have is one we'd rather answer before you commit, not after.",
			buttonLabel: "Book a Discovery Call",
			buttonHref: "#contact",
		},
	},
	contact: {
		eyebrow: "Book a Discovery Call",
		headline: "No pitch.\nJust an honest\n*conversation.*",
		body: "Every engagement begins with a discovery call. We listen first, diagnose second, and recommend only what will genuinely move the needle for your specific situation.",
		tags: ["Advisory Model", "Done-For-You Model"],
		serviceOptions: [
			"PMF Validation Sprint",
			"Brand Strategy & Positioning",
			"Market Intelligence Report",
			"Go-To-Market Strategy",
			"Brand Activation Retainer",
			"Not sure — need a diagnosis",
		],
		formNote: "No pitch. No commitment. Just clarity.",
		successTitle: "Message received.",
		successBody:
			"We'll review your message and reach out to schedule your discovery call within 24 hours.",
	},
};

export const defaultAbout: AboutPage = {
	seo: {
		title: "About Us",
		description:
			"Aletheia Intelligence is a full-spectrum strategy and market intelligence firm built on radical honesty and rigorous methodology. We exist to uncover the truth of your market before you build, launch, or commit.",
	},
	hero: {
		eyebrow: "Our Story",
		headline: "We exist to tell you\nwhat you *need to hear.*",
		body: "Aletheia was built on a simple conviction: the most expensive thing a founder can do is make a high-stakes decision based on intelligence that has been softened to protect someone's feelings. We fix that.",
	},
	ticker: [
		"Truth Revealed",
		"Market Intelligence",
		"Strategic Clarity",
		"Competitive Advantage",
		"Data-Driven Decisions",
		"Radical Honesty",
		"Full-Spectrum Strategy",
		"Validated Insights",
	],
	mission: {
		eyebrow: "Our Mission",
		headline: "Uncover the truth\n*before you commit.*",
		etymology: {
			label: "Ancient Greek · ἀλήθεια · noun",
			word: "ἀ-λή-θεια",
			meaning: "truth revealed",
			definition:
				"The state of not being hidden. The condition of full disclosure — where nothing is obscured or softened.",
		},
		intro: "We exist to uncover the truth of your market before you build, launch, or commit.",
		paragraphs: [
			"Most businesses don't fail because of bad products. They fail because they skipped validation, misread their market, or launched without a clear position. Aletheia Intelligence exists to prevent that.",
			"We are a full-spectrum strategy and intelligence firm serving both B2B and B2C clients. We combine rigorous methodology with practical execution to deliver clarity, confidence, and competitive advantage.",
		],
	},
	vision: {
		eyebrow: "Our Vision",
		keywords: ["Clarity", "Conviction", "Advantage"],
		headline: "A world where every\nmajor decision is made\nfrom a position of *clarity.*",
		paragraphs: [
			"We envision a future where founders and executives are empowered with intelligence that was once reserved for companies with enormous research budgets — delivered with the honesty and rigour that actually changes outcomes.",
			"Where market truth is accessible, actionable, and honest. Where the most consequential decisions are also the most informed. Where clarity precedes every commitment — not just the lucky ones.",
		],
	},
	story: {
		quote: "“Most consultants optimise for the retainer. We optimise for the *decision.*”",
		attribution: "— Founding principle",
		paragraphs: [
			"Aletheia started as a direct response to a pattern we kept seeing: smart founders, capable teams, and real ambition — consistently undone by research that had been filtered through optimism bias, sycophantic consultants, or simply a lack of methodological rigour.",
			"We set out to build the kind of intelligence firm we would have wanted to hire — one that treats honesty as a commercial asset, not a liability. One that measures success by the quality of decisions made, not the volume of deliverables produced.",
			"Our name means *truth revealed*. That's not a tagline — it's the standard we hold every engagement to.",
		],
	},
	values: {
		eyebrow: "How we work",
		headline: "Three principles.\n*No exceptions.*",
		items: [
			{
				title: "Truth-first",
				description:
					"We say what the data says, not what the client hopes to hear. A definitive no is as valuable as a yes — and we deliver both with equal honesty.",
				colour: "green",
			},
			{
				title: "Evidence over opinion",
				description:
					"Every recommendation is grounded in structured research, real customer interviews, and verifiable market signals. Not gut feel. Not trend chasing.",
				colour: "gold",
			},
			{
				title: "Directness without agenda",
				description:
					"We have no interest in extending engagements beyond their useful life. When the work is done, we say so — and we tell you exactly what to do next.",
				colour: "red",
			},
		],
	},
	commitments: {
		eyebrow: "Our commitments",
		headline: "Senior-only.\n*By design.*",
		intro: "Aletheia is deliberately lean. These are the three commitments every client gets — built into how we work, not stated as aspiration.",
		items: [
			{
				title: "Senior-only delivery",
				description:
					"Every call, every analysis, and every deliverable comes directly from the people who scoped your engagement. No handoffs. No juniors learning on your time.",
				colour: "green",
			},
			{
				title: "Truth over comfort",
				description:
					"We optimise for the decision, not the relationship. When the data points one way, we say so clearly — with evidence to back it, however uncomfortable.",
				colour: "gold",
			},
			{
				title: "Lean by design",
				description:
					"We don't scale headcount ahead of quality. Aletheia stays deliberately small so every engagement stays sharp, personal, and fully accountable.",
				colour: "blue",
			},
		],
	},
	expertise: {
		eyebrow: "Domain Expertise",
		headline: "Industries & Methodologies.",
		industriesTitle: "Industries We Serve",
		industries: [
			"Health Tech & Digital Health",
			"SaaS & Software Products",
			"Real Estate & Prop Tech",
			"Hardware & Equipment",
			"Women's Health & Wellness",
			"B2B Professional Services",
			"Consumer Products",
			"E-Commerce & DTC Brands",
		],
		industriesNote: "and many more.",
		methodologiesTitle: "Methodologies & Frameworks",
		methodologies: [
			"Steve Blank Customer Development",
			"Sean Ellis PMF Testing",
			"Jobs To Be Done (JTBD)",
			"Lean Startup Validation",
			"ICP / ICA Definition",
			"Conversion Psychology",
			"Brand Positioning Frameworks",
			"Competitive Intelligence",
		],
	},
	cta: {
		eyebrow: "Start a conversation",
		headline: "Every engagement starts\n*with one honest call.*",
		body: "No pitch deck. No proposal push. Just a direct conversation about your situation and whether we can genuinely help.",
		buttonLabel: "Book a Discovery Call",
		buttonHref: "/#contact",
	},
	faqLink: { lead: "Want to understand how we work?", label: "See the FAQ" },
};

export const defaultFaqPage: FaqPage = {
	seo: {
		title: "Market Validation FAQ",
		description:
			"Answers to the questions founders ask before validating their market, defining their ICP, building their GTM strategy, and activating their brand. Aletheia Intelligence.",
	},
	hero: {
		eyebrow: "Frequently Asked Questions",
		headline: "Answers before\nyou *commit.*",
		intro: "The questions founders ask before validating their market, defining their ICP, building their GTM strategy, and activating their brand.",
	},
	sections: FAQ_SECTIONS.map((section) => ({
		title: section.title,
		intro: section.intro,
		colour: section.colour,
		items: section.items.map((item) => ({
			question: item.q,
			answer: paragraphs(...item.answer),
			highlight: item.summary,
		})),
	})),
	cta: {
		eyebrow: "Still have a question?",
		headline: "Ask it on a call.\n*No pitch. No pressure.*",
		body: "Every question you have is one we'd rather answer before you commit, not after.",
		buttonLabel: "Book a Discovery Call",
		buttonHref: "/#contact",
	},
};
