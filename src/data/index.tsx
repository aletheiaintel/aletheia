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
	{ href: "/#our-work", label: "Our Work" },
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
		quote: "Aletheia didn't tell us what we wanted to hear. They told us what we needed to hear. The validation report killed a $200k mistake before we made it.",
		author: "B2B SaaS Founder",
		role: "Founder & CEO",
		company: "Series A Startup",
		service: "PMF Validation",
		accentColor: "#C9981A",
		rotation: "-2deg",
	},
	{
		quote: "Our messaging was generic and losing deals. After the brand positioning work, our conversion rate on discovery calls went from 18% to 41% in eight weeks.",
		author: "Health Tech Co-Founder",
		role: "Co-Founder",
		company: "Health Tech Startup",
		service: "Brand Strategy",
		accentColor: "#1A7A4C",
		rotation: "1.5deg",
	},
	{
		quote: "The market intelligence report they delivered was the kind of work I'd expect from a Big Four firm at a fraction of the cost. It became our Series A cornerstone.",
		author: "Venture Capital MD",
		role: "Managing Director",
		company: "Early-Stage VC Firm",
		service: "Market Intelligence",
		accentColor: "#0284C7",
		rotation: "-1deg",
	},
	{
		quote: "Three months of unfocused launch planning solved in two weeks. The GTM playbook gave our team a single, clear direction. We hit our 90-day revenue target in 60.",
		author: "CleanTech Head of Growth",
		role: "Head of Growth",
		company: "CleanTech Startup",
		service: "Go-To-Market Strategy",
		accentColor: "#E5484D",
		rotation: "2deg",
	},
	{
		quote: "The Brand Activation retainer changed how we show up online. Our content finally feels like us — strategic, not performative. Pipeline influence is measurable now.",
		author: "B2B Consultancy CMO",
		role: "Chief Marketing Officer",
		company: "B2B Consultancy",
		service: "Brand Activation",
		accentColor: "#C9981A",
		rotation: "-1.5deg",
	},
	{
		quote: "Aletheia's truth-first approach is rare. Most consultants validate your idea and take the money. They genuinely told us to pivot. Best advice we ever got.",
		author: "Fintech Founder",
		role: "Founder",
		company: "Fintech Startup",
		service: "PMF Validation",
		accentColor: "#1A7A4C",
		rotation: "1deg",
	},
];

export const STATS = [
	{ value: "10+", label: "Years of Experience" },
	{ value: "18", label: "Industries Served" },
	{ value: "4-Phase", label: "Proven Framework" },
	{ value: "100%", label: "Go/No-Go Verdicts Delivered" },
];

export const SERVICES_LIST = [
	"PMF Validation Sprint",
	"Brand Strategy & Positioning",
	"Market Intelligence Report",
	"Go-To-Market Strategy",
	"Brand Activation Retainer",
	"Not sure — need a diagnosis",
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
				a: "It's a 30 to 45 minute conversation. No pitch deck, no proposal push. We ask questions about your situation, your constraints, and what you've already tried. At the end, we'll tell you honestly whether we think we can help, and if so, what that would look like. If we're not the right fit, we'll say so.",
			},
			{
				q: "How do I know which service I need?",
				a: "Most clients come in unsure. That's exactly what the discovery call is for. If you're pre-revenue and validating an idea, you likely need PMF Validation. If you have traction but aren't converting or positioning well, Brand Strategy or GTM is the right entry point. If you're unsure, select \"Not sure — need a diagnosis\" on the contact form and we'll scope it together.",
			},
			{
				q: "What does an engagement cost?",
				a: (
					<div className="space-y-4">
						<p>Engagements are scoped and priced specifically to each project. We don't publish fixed rates because the right scope depends entirely on your situation, your stage, and where the real uncertainty lives.</p>
						<p>That said, here are honest starting ranges so you can assess fit before a call:</p>
						<div className="rounded-xl border border-black/[0.07] overflow-hidden text-[13px]">
							<div className="grid grid-cols-3 bg-[#121212] text-white px-4 py-2.5 font-medium text-[12px]">
								<span>Service</span>
								<span>Starting From</span>
								<span>Typical Range</span>
							</div>
							{[
								["PMF Validation Sprint", "$3,500", "$3,500 – $8,000"],
								["Brand Strategy & Positioning", "$5,000", "$5,000 – $12,000"],
								["Market Intelligence Report", "$2,500", "$2,500 – $7,500"],
								["Go-To-Market Strategy", "$5,000", "$5,000 – $15,000"],
								["Brand Activation Retainer", "$1,200/mo", "$1,200 – $3,500/mo"],
							].map(([service, from, range], i) => (
								<div key={service} className={`grid grid-cols-3 px-4 py-2.5 border-t border-black/5 ${i % 2 !== 0 ? "bg-black/2" : ""}`}>
									<span className="font-medium text-[#222]">{service}</span>
									<span className="font-medium" style={{ color: "#C9981A" }}>{from}</span>
									<span className="text-[#666]">{range}</span>
								</div>
							))}
						</div>
						<p>After your discovery call we'll provide a clear, itemized proposal with a fixed scope, a fixed price, and a realistic timeline. No retainer lock-ins unless you choose Brand Activation. No hidden fees. No scope creep without your explicit approval.</p>
						<p className="italic text-[#777]">If budget is a constraint, tell us on the call. We'd rather scope something that fits than lose a client who was the right fit for the wrong budget conversation.</p>
					</div>
				),
			},
			{
				q: "Do you work with clients outside the US?",
				a: (
					<div className="space-y-4">
						<p>Yes. While Aletheia Intelligence is headquartered in Wyoming and our primary market is the United States, we work with founders and businesses globally. Geography has never been a barrier to an engagement.</p>
						<div className="rounded-xl border border-black/[0.07] overflow-hidden text-[13px]">
							<div className="grid grid-cols-3 bg-[#121212] text-white px-4 py-2.5 font-medium text-[12px]">
								<span>Service</span>
								<span>Scope</span>
								<span>Notes</span>
							</div>
							{[
								["PMF Validation", "Global", "Market conditions are assessed for the specific geography you are targeting, not the US by default."],
								["Brand Strategy & Positioning", "Global", "Positioning work is market-specific. We adapt messaging frameworks to the cultural and competitive context of your target market."],
								["Market Intelligence", "Global", "We research the market you are entering, regardless of where it is. Research methodology is consistent across geographies."],
								["Go-To-Market Strategy", "Global", "GTM strategy is built around where your customers are, not where we are."],
								["Brand Activation", "English", "Currently optimized for English-language social and digital channels. Expansion to other languages available on request."],
							].map(([service, scope, note], i) => (
								<div key={service} className={`grid grid-cols-3 px-4 py-2.5 border-t border-black/5 ${i % 2 !== 0 ? "bg-black/2" : ""}`}>
									<span className="font-medium text-[#222]">{service}</span>
									<span className="font-medium" style={{ color: scope === "English" ? "#C9981A" : "#1A7A4C" }}>{scope}</span>
									<span className="text-[#666]">{note}</span>
								</div>
							))}
						</div>
						<p>Discovery calls are conducted remotely via video. Zoom, Google Meet, or whatever works for you. Time zone differences have never prevented a good conversation. We have worked with founders across Europe, Africa, the Middle East, and Asia.</p>
						<p className="italic text-[#777]">If you are outside the US and want to know whether your specific market is one we can research credibly, ask us on the discovery call. We will tell you honestly.</p>
					</div>
				),
			},
			{
				q: "Do you work with early-stage founders or more established companies?",
				a: "Both. Our PMF Validation and Market Intelligence services are built for founders at the idea or pre-revenue stage. Brand Strategy, GTM, and Brand Activation work best for companies with some traction, typically seed-stage and beyond, who are ready to scale with a clear strategic foundation.",
			},
		],
	},
	{
		category: "Engagements & Process",
		accent: ACCENT,
		items: [
			{
				q: "Is my business idea kept confidential?",
				a: (
					<div className="space-y-4">
						<p>Completely. Confidentiality is not a courtesy we extend. It is a structural commitment we make before any substantive conversation begins.</p>
						<div className="rounded-xl border border-black/[0.07] overflow-hidden text-[13px]">
							{[
								["Before the discovery call", "We sign a mutual Non-Disclosure Agreement (NDA) before any detailed discussion of your business, idea, or market. You will receive our standard NDA before the call, or we will sign yours if you prefer."],
								["During engagements", "Everything shared with us, including your idea, your research, your financials, your competitive insights, and your strategic direction, is treated as strictly confidential. We do not share it with third parties under any circumstance."],
								["After engagements", "All client information is retained securely and never referenced, shared, or used in any public-facing material without your explicit written permission. This applies permanently, not just during the engagement."],
								["Case studies", "We never publish client names, company names, or identifying details without signed consent. Our published case studies are anonymised by default. That is a deliberate policy, not a convenience."],
								["Conflict of interest", "We do not work with direct competitors in the same market simultaneously. If a potential conflict exists, we will flag it on the discovery call before any engagement begins."],
							].map(([stage, detail], i) => (
								<div key={stage} className={`grid grid-cols-[150px_1fr] border-t border-black/5 first:border-t-0 ${i % 2 !== 0 ? "bg-black/2" : ""}`}>
									<div className="px-4 py-3 bg-[#121212] text-[#C9981A] font-medium text-[12px] leading-snug">{stage}</div>
									<div className="px-4 py-3 text-[#555]">{detail}</div>
								</div>
							))}
						</div>
						<p className="italic text-[#777]">If you are sitting on an idea you have not shared with anyone yet, that is exactly the kind of conversation we are built for. The NDA is standard. The discretion is unconditional.</p>
					</div>
				),
			},
			{
				q: "Do all engagements follow the four-phase methodology?",
				a: "Not necessarily. The four phases (Idea Triage, Customer Discovery, Smoke Test, and Kill or Commit) represent the full PMF validation arc. Most engagements run one or two phases depending on where you are and where the uncertainty lives. We scope every project specifically to your situation, not a fixed template.",
			},
			{
				q: "How long does a typical engagement take?",
				a: "It depends on the service. PMF Validation typically runs 4 to 8 weeks end-to-end. Brand Strategy and GTM projects are usually 3 to 6 weeks. Market Intelligence reports can be delivered in as little as 2 weeks. We'll give you a realistic timeline and stick to it before any engagement begins.",
			},
			{
				q: "Will I be working directly with senior people, or handed off to a junior team?",
				a: "You work directly with us. Aletheia is deliberately lean. We don't use your engagement to train juniors or pad hours. Every call, analysis, and deliverable comes from the people you spoke with on your discovery call.",
			},
		],
	},
	{
		category: "Outcomes & Expectations",
		accent: "#0284C7",
		items: [
			{
				q: "What if your validation work concludes my idea won't work?",
				a: "That's a successful engagement. A definitive no-go in six weeks is worth more than 18 months building the wrong thing. We've helped founders save $200K+ in misdirected build costs by surfacing the hard truth early, before the money is spent. Clarity in either direction is the deliverable.",
			},
			{
				q: "How is Aletheia different from a typical marketing or strategy agency?",
				a: "Most agencies optimise for ongoing retainers and deliverable volume. We optimise for honest decisions. We won't recommend a service you don't need, extend an engagement beyond its useful life, or dress up inconclusive data as a confident recommendation. Our name means truth revealed. That's a standard we hold ourselves to commercially as well.",
			},
			{
				q: "Can you guarantee results like the ones in your case studies?",
				a: "No, and we'd be suspicious of anyone who does. What we can guarantee is rigorous methodology, direct communication, and a willingness to tell you what you need to hear rather than what you want to hear. The outcomes in our case studies reflect real engagements with founders who acted decisively on clear intelligence.",
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
