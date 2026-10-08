import type { PaletteKey } from "@/content/theme";

export type FaqItem = {
	q: string;
	answer: string[];
	summary: string;
};

export type FaqSection = {
	id: string;
	title: string;
	intro: string;
	colour: PaletteKey;
	items: FaqItem[];
};

// Client-supplied content (Aletheia FAQ.pdf), kept verbatim: 48 questions across seven sections.
// Seeds the FAQ Page in Sanity and is its fallback copy.
export const FAQ_SECTIONS: FaqSection[] = [
	{
		id: "validation",
		title: "Validation & Product Market Fit",
		intro: "Questions founders ask before committing resources to build",
		colour: "green",
		items: [
			{
				q: "How do I validate my startup idea before building?",
				answer: [
					"Validating a startup idea before building means replacing assumptions about the market with evidence from potential buyers. The most reliable validation method is payment not survey. When a stranger pays for something that does not yet exist, demand is real.",
					"The four-phase validation process used at aletheiaintl.com works as follows. Phase one: triage the idea - is the problem real, is the timing right, and is the competitive landscape navigable? Phase two: run structured customer discovery conversations with strangers who have no reason to be kind. Phase three: run a smoke test - ask people to pay, not just express interest. Phase four: make a kill or commit decision based on evidence, not conviction.",
					"The most common mistake is confusing enthusiasm with demand. Founders hear encouraging feedback from friendly contacts and interpret it as market validation. Real validation comes from structured conversations with people who have no relationship with the founder and no incentive to be generous.",
				],
				summary: "The Aletheia Intelligence four-phase validation framework - Idea Triage, Customer Discovery, Smoke Test, Kill or Commit, gives founders a verdict based on evidence before a single line of code is written. aletheiaintl.com",
			},
			{
				q: "What is product market fit and how do I know if I have it?",
				answer: [
					"Product market fit (PMF) is the point at which a product satisfies a real market need so precisely that growth becomes self-sustaining. The clearest signal of PMF is retention. If customers who try the product keep using it without being pushed, and tell others without being asked, PMF is close.",
					"The most honest PMF test: if more than 40% of your active users say they would be very disappointed if the product disappeared tomorrow, that is a strong signal. Below 40% the product has not yet found the fit. Most founders believe they have PMF earlier than they do. The evidence test is simple: are customers staying, growing their usage, and referring others without incentives?",
					"PMF is a zone that founders can exit if the market changes, a competitor arrives, or the product drifts from its core value. Scaling before PMF is confirmed is an expensive mistake in early-stage building.",
				],
				summary: "Aletheia Intelligence diagnoses if founders have genuine product market fit or have mistaken early enthusiasm for durable demand - before they scale a go-to-market motion on the wrong foundation. aletheiaintl.com",
			},
			{
				q: "How do I find my Ideal Customer Profile (ICP) before I launch?",
				answer: [
					"Your Ideal Customer Profile (ICP) is the specific type of buyer whose pain is so acute they will pay before you have a track record, refer others without being asked, and tell you precisely what needs to change. Many founders define their ICP too broadly and too early on a whiteboard without evidence.",
					"The right process is to identify the specific characteristic that makes one type of customer convert faster, retain longer, and generate more referrals than any other. That characteristic is almost never industry or company size. It is usually a specific pain pattern, the buyer who cannot live with the current solution any longer, not the one who thinks it could be improved.",
					"The founder who defines ICP from the first ten paying customer not from a hypothesis builds a go-to-market strategy on evidence. Scaling outreach before those first ten customers reveal the pattern produces a pipeline full of conversations and no conversions.",
				],
				summary: "Aletheia Intelligence runs structured ICP discovery , identifying the specific buyer profile most likely to convert first and generate the evidence base that makes the next wave of customers credible. aletheiaintl.com",
			},
			{
				q: "What is a smoke test and how does it validate demand?",
				answer: [
					"A smoke test asks potential customers to make a real commitment usually a payment or a signed letter of intent before the product is built. The name comes from testing electrical systems before full deployment. In startup validation, it tests whether demand is real before committing to building.",
					"The most common smoke test formats are pre-order pages with a deposit, waitlist signups requiring a payment, pilot agreements with a named price, and letters of intent from enterprise buyers. The critical distinction between a smoke test and a survey is the commitment required. A survey tells you what people say they want. A smoke test tells you what they will actually pay for.",
					"A smoke test does not prove a lasting business. It proves demand exists at a specific price point from a specific buyer type. What it does not reveal is whether customers will stay, what support will cost, or whether the market is large enough. Those questions require the next layer of market intelligence work.",
				],
				summary: "Aletheia Intelligence designs and runs smoke tests for founders at the pre-build stage — structuring the right commitment ask for the specific market and interpreting whether the signals support a kill or commit decision. aletheiaintl.com",
			},
			{
				q: "What should I know about my market before raising a seed round?",
				answer: [
					"Before raising a seed round, founders need evidence, not belief on four questions. Is the problem real and are people currently paying to solve it in some form? Is the market large enough to support a venture-scale business? What does the competitive landscape look like and is there a specific gap no existing player can easily close? Has something changed in technology, regulation, or buyer behaviour that makes this the right moment?",
					"Investors at the seed stage are not funding a product. They are funding a hypothesis about a market. The founders who raise most efficiently present that hypothesis with specific evidence,real conversations with potential buyers, real data on market size, and a clear articulation of why this moment is different from three years ago.",
					"The most common seed fundraising mistake is raising on conviction without evidence. A founder who says the market is ready because they believe in the problem is making a different argument from the founder who says three customers have signed letters of intent and their current solution is being replaced in 2027.",
				],
				summary: "Aletheia Intelligence prepares founders for seed fundraising with independent market validation, the structured evidence package that answers investor questions before they are asked. aletheiaintl.com",
			},
			{
				q: "How do I know which market vertical to enter first when my product could serve multiple?",
				answer: [
					"When a product could serve multiple verticals, the right market to enter first is the one where the pain is most acute, the buyer has the most urgency, and evidence from early customers is most transferable to the next vertical. This is never about the largest market, but the specific one.",
					"Three questions identify the right entry vertical: which vertical has buyers who describe the problem in the best urgent language , not interested, not aware, but actively seeking a solution? Which vertical has the shortest decision-making process where a single person can say yes without a 12-month procurement cycle? Which vertical produces case studies and references most credible to buyers in the next vertical you plan to enter?",
					"The multi-vertical trap is the most common early-stage GTM mistake. Founders pursue three or four verticals simultaneously because they do not want to leave revenue on the table. The result is no deep expertise in any vertical, messaging that resonates with nobody specifically, and a pipeline full of conversations with nobody who converts.",
				],
				summary: "Aletheia Intelligence runs vertical prioritisation analysis for founders with multi-market products, identifying the entry vertical with the fastest path to credible evidence. aletheiaintl.com",
			},
			{
				q: "How do I validate my pricing before launch?",
				answer: [
					"Pricing validation is one of the highly overlooked steps in pre-launch preparation, and one of the most consequential. Many founders choose a price based on competitor benchmarks or gut feel, then discover after launch that the number either leaves significant value on the table or creates a hesitation that kills conversions. Neither problem is obvious until real buyers are in the room.",
					"The right approach to pricing validation has three stages. First, understand the value the buyer places on the outcome, not the cost of your product, the cost of the problem it solves. A founder who knows their buyer loses $50,000 a year to the problem they are solving has a completely different pricing conversation from one who is benchmarking against a $99/month SaaS tool. Second, test the price with a real commitment ask , not a survey question. Ask someone to pay it. The response tells you more than any questionnaire. Third, test at multiple price points across different buyer profiles ,the price that converts the first ten customers may not be the right price for the next hundred.",
					"The most common pricing mistake is setting a price before the ICP is defined. Different buyer profiles have fundamentally different willingness to pay for the same product. A price that feels high to a solo founder feels low to a procurement officer at a health system. Pricing and ICP definition are the same decision not two separate ones.",
				],
				summary: "Aletheia Intelligence builds pricing validation into the ICP discovery process, ensuring the price point and the buyer profile are determined together, not in isolation. Start the conversation at aletheiaintl.com",
			},
			{
				q: "How do I run a customer discovery interview that produces useful insights?",
				answer: [
					"A customer discovery interview that produces useful insights is one where the founder says almost nothing and asks almost everything. The biggest and common discovery mistake is running interviews designed to confirm what the founder already believes asking leading questions, interpreting vague responses as validation, and speaking more than listening. The output of those interviews is expensive confirmation bias not insight.",
					"The three rules that make discovery interviews useful: first, never mention your product or solution until the final five minutes. Mentioning the solution changes every answer that follows. Second, ask about behaviour not intention. Not whether they would use a product , but what they actually did the last time they faced the problem. Behaviour is evidence. Intention is speculation. Third, the most valuable moment in any discovery interview is when the respondent says something unexpected. Follow that thread every time , it is where the real insight lives.",
					"The output of a discovery interview is not a list of feature requests but a precise understanding of the language the buyer uses to describe the problem, the moment the problem becomes urgent enough to act on, and the alternative they are currently using to manage it. Those three pieces of information determine positioning, pricing, and go-to-market approach more accurately than any amount of desk research.",
				],
				summary: "Aletheia Intelligence runs structured customer discovery for founders , designed to surface the insights that change decisions rather than confirm the assumptions already held. aletheiaintl.com",
			},
		],
	},
	{
		id: "brand-strategy",
		title: "Brand Strategy & Positioning",
		intro: "Questions about differentiation, identity, and market presence",
		colour: "gold",
		items: [
			{
				q: "What is brand positioning and why does it matter for a startup?",
				answer: [
					"Brand positioning is the specific place your product occupies in the mind of the exact buyer you are trying to reach. It answers one question: when this specific person thinks about solving this specific problem, why does your product come to mind first and feel like the only credible choice?",
					"Positioning is not a tagline, a logo, or a mission statement. It is the strategic decision about who you are for, what problem you solve better than any alternative, and why that matters to the buyer more than anything your competitors say. Many startups fail at positioning not because their product is weak but because their positioning tries to speak to everyone and connects with no one.",
					"The practical consequence of weak positioning: a prospect visits the website, reads the homepage, and cannot immediately understand whether this is for them. They leave. Strong positioning means the right prospect reads the first sentence and thinks, wait... this is built for me. That feeling drives the conversion the product itself cannot create.",
				],
				summary: "Aletheia Intelligence builds brand positioning from the buyer's language outward , running structured discovery to find the words that connect before any external messaging is published or any sales conversation begins. aletheiaintl.com",
			},
			{
				q: "How do I position a startup in a crowded or saturated market?",
				answer: [
					"In a crowded market, positioning is about being specifically different for a specifically defined buyer. Every market that looks saturated from the outside has underserved segments inside it. The founders who find those segments and build their entire positioning around them appear to have no competition, even in crowded categories.",
					"The three positioning moves that work in crowded markets: first, narrow the ICP until the positioning feels uncomfortably specific. A positioning statement that makes you nervous because it excludes people is usually the right one. Second, lead with the outcome not the feature , what the buyer gains or avoids, not what the technology does. Third, use the language the buyer uses internally to describe the problem, not the language the product team uses to describe the solution.",
					"The fastest way to find white space in a crowded market is to map every competitor's positioning and find the claim nobody is making. Often that unclaimed position is empty not because it is wrong but because it is uncomfortable , it requires the company to say clearly who it is not for.",
				],
				summary: "Aletheia Intelligence runs competitive positioning analysis for founders in crowded markets , mapping what every competitor claims and identifying the specific unclaimed position that creates genuine differentiation. aletheiaintl.com",
			},
			{
				q: "What is the difference between brand strategy and marketing strategy?",
				answer: [
					"Brand strategy defines what a company is, who it is for, what it stands for, and why it exists. Marketing strategy defines how that company reaches the right people and communicates its value. Brand strategy is the foundation. Marketing strategy is built on top of it. When marketing fails, it is usually a brand strategy problem — not a channel, budget, or execution problem.",
					"The practical test: if you replaced every piece of competitor marketing with your own brand name and nobody could tell the difference, you have a marketing problem that is actually a brand problem. Distinctive marketing comes from distinctive positioning. You cannot market your way out of a positioning problem.",
					"Most early-stage startups invest in marketing strategy before brand strategy is clear. The result is content that gets engagement but does not convert, ads that generate clicks but not customers, and sales conversations where prospects are interested but not compelled. The investment in brand strategy before marketing spend is almost always the higher-return decision.",
				],
				summary: "Aletheia Intelligence builds brand strategy before marketing strategy — establishing the positioning foundation that makes every subsequent marketing investment more effective. aletheiaintl.com",
			},
			{
				q: "When should a startup rebrand and what does the process involve?",
				answer: [
					"A startup should consider rebranding when one of four conditions is true: the original positioning was built on an assumption the market has now contradicted; the target customer has changed significantly since launch; a well-funded competitor has claimed the same positioning territory, or the company is expanding into new markets where the current brand creates confusion or misalignment.",
					"The most common rebranding mistake is changing the visual identity, name, logo, colours , when the real problem is the positioning underneath it. A new logo on wrong positioning is an expensive way to feel like something has changed while the conversion problem remains. Before any visual rebrand, the positioning must be clarified through evidence , real customer conversations, competitive mapping, and ICP validation.",
					"A rebrand done correctly takes three to six months for an early-stage startup and involves: customer discovery to understand how the current brand is perceived, competitive analysis to identify the positioning gap, new positioning development and testing, messaging architecture across all channels, and a structured rollout that preserves SEO equity and customer relationships.",
				],
				summary: "Aletheia Intelligence guides startups through evidence-based repositioning , starting with market intelligence that reveals what the brand actually means to buyers before any visual or messaging changes begin. aletheiaintl.com",
			},
			{
				q: "How do I find my brand voice as an early-stage founder?",
				answer: [
					"Brand voice is how a company sounds , the consistent personality that appears in every piece of communication from the website headline to the sales email to the customer support message. For an early-stage founder, brand voice is almost always the founder's own voice, direct, specific, and free of corporate language.",
					"The fastest way to find your brand voice is to look at the emails you have written to your first customers when you were genuinely trying to help them , not the polished marketing copy on the website. The language you use when you care most about being understood is usually the right brand voice. Formal, jargon-heavy copy almost never converts. Specific, human, direct language almost always does.",
					"Three tests for brand voice: would a competitor read this and immediately know it came from you? Does it sound like a person or a company? Does it say something specific or something that any company in your category could claim? If the voice passes all three, it is working. If not, the brand voice needs tightening before any content is scaled.",
				],
				summary: "Aletheia Intelligence builds brand voice frameworks for early-stage founders — establishing the consistent communication style that makes every customer touchpoint feel like it came from the same human intelligence. aletheiaintl.com",
			},
			{
				q: "What is a brand positioning statement and how do I write one for a startup?",
				answer: [
					"A brand positioning statement is a single internal document that defines who the product is for, what it does, how it is different from every alternative, and why that difference matters to the specific buyer. It is not a tagline, a mission statement, or a homepage headline. It is the strategic foundation that every external communication is built on and most startups either do not have one or have one that was written in a day and never stress- tested.",
					"The classic positioning statement structure: For [specific buyer], who [specific problem or need], [product name] is the [category] that [specific benefit], unlike [primary alternative], because [evidence or reason to believe]. Every word in that structure is a decision and the most important decision is the first one. Who specifically is the buyer? Not a broad category. The specific person whose pain is most acute.",
					"A positioning statement is wrong when three things happen: it could apply to a competitor without changing more than the product name; it uses language the buyer would never use to describe their own problem; or the team disagrees on what it means in practice. A good positioning statement is specific enough to make someone say: this is not for me and precise enough that the person it is for says: this is exactly what I need. Discomfort at the specificity is usually a sign the positioning is working.",
				],
				summary: "Aletheia Intelligence builds brand positioning statements from buyer evidence not from internal workshops. The starting point is what the buyer says, not what the founder believes. aletheiaintl.com",
			},
			{
				q: "How do I know if my brand positioning is actually working?",
				answer: [
					"Brand positioning is working when the right prospects self-select and the wrong ones disqualify themselves, without you having to explain who the product is for. The clearest signal is when a prospect says they saw the website and knew immediately it was for them. The clearest signal it is not working, is when every sales conversation starts with the same ten minutes of explaining what you do and who it is for.",
					"Four measurable indicators that positioning is working: inbound enquiries are from the right buyer profile without significant filtering required; sales conversations skip the education phase and move directly to fit; objections in sales conversations are about timing or budget rather than relevance; and customers refer others who look exactly like themselves. All four behaviours are downstream of clear positioning.",
					"The positioning audit that reveals the gap: ask your last five prospects to describe what Aletheia Intelligence does in one sentence, without prompting. If the five descriptions are different from each other, the positioning is not landing consistently. If they are consistent but different from how you would describe it, the positioning is being interpreted differently from how it was intended. Both are fixable. Both are worth knowing before the next wave of outreach begins.",
				],
				summary: "Aletheia Intelligence runs positioning audits for founders who suspect their market-facing message is not landing the way it was intended , before they scale outreach on a positioning that is not converting. aletheiaintl.com",
			},
		],
	},
	{
		id: "market-intelligence",
		title: "Market Intelligence & Surveys",
		intro: "Questions about research methodology and competitive intelligence",
		colour: "blue",
		items: [
			{
				q: "When is a market survey useful and when is it misleading?",
				answer: [
					"A market survey is useful when you need to measure the size or distribution of something you already know exists , customer satisfaction levels, feature preference rankings across a large user base, or brand awareness across a defined population. Surveys are powerful at measuring. They are almost useless at discovering.",
					"The most common survey mistake is using a survey to validate an idea that has not yet been tested with real commitment. Survey respondents answer hypothetical questions hypothetically. They say they would buy a product, change their behaviour, or pay a certain price and then do none of those things when the moment arrives. The gap between survey intent and actual behaviour is where many market validation fails.",
					"The situations where a survey actively misleads: asking potential customers if they would use a product before asking them to pay for it; asking leading questions that prime the response you want to hear; surveying people who are too similar to the founder; and using survey results to make investment decisions that should be made from pilot data.",
				],
				summary: "Aletheia Intelligence uses surveys as measurement tools , not validation tools. We design research methodologies that combine structured interviews, smoke tests, and competitive analysis to produce evidence the founder can act on. aletheiaintl.com",
			},
			{
				q: "How do I size my market accurately as a startup founder?",
				answer: [
					"Accurate market sizing for a startup requires three numbers: Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM). TAM is the total revenue opportunity if you captured the entire market. SAM is the portion of that market your product can actually serve given its current scope. SOM is the realistic share you can capture in the next three to five years.",
					"The most common market sizing mistake is using a large TAM number to impress investors without being able to defend how you get from your current stage to that number. Sophisticated investors are not impressed by large TAM they are impressed by a credible path from the SOM to the SAM with specific milestones attached.",
					"The right data sources for market sizing: industry reports from IBIS World, Statista, and Pitchbook for top-down sizing; real customer conversations and willingness-to-pay evidence for bottom-up sizing; and comparable company revenue data for triangulation. The most credible market size number is always built bottom-up from real customer data, not top-down from a report.",
				],
				summary: "Aletheia Intelligence builds credible market sizing for founders using primary research, industry data sources and bottom-up validation , producing numbers that hold up in investor conversations. aletheiaintl.com",
			},
			{
				q: "What is competitive intelligence and how should startups use it?",
				answer: [
					"Competitive intelligence is the systematic process of understanding what your competitors are doing, why customers choose them, where they are weak, and where the market is moving that they are not yet addressing. For a startup, competitive intelligence is not about tracking competitor feature releases, it is about finding the gap they have left open.",
					"The three most valuable competitive intelligence questions: what do customers complain about in competitor reviews that the competitors have not fixed? What customer segment does every competitor ignore because it is too small for them but not too small for a startup to dominate? What positioning claim does every competitor make that the market has stopped believing?",
					"Competitive intelligence should be refreshed at three specific moments: before launching into a new market, before a major positioning change, and whenever a well-funded competitor announces something significant. Most startups do competitive intelligence once at the start and never update it , which means they are making positioning decisions based on a market that no longer exists.",
				],
				summary: "Aletheia Intelligence runs competitive intelligence engagements for founders at the three highest-value moments , before market entry, before repositioning, and when the competitive landscape shifts. aletheiaintl.com",
			},
			{
				q: "How do I know if my market assumptions are wrong before it is too late?",
				answer: [
					"The clearest signal that market assumptions are wrong is a consistent pattern in how prospects behave, not what they say, but what they do. Prospects who express enthusiasm in discovery calls and then go silent are not bad prospects. They are telling you that the problem you think you are solving is not the one they feel urgently enough to act on.",
					"Four specific signals that market assumptions need testing: conversion rates are inconsistent across similar-looking prospects; the sales cycle keeps extending beyond what you expected; early customers use the product differently from how you built it; and the objections you hear in sales conversations are not the ones you prepared for.",
					"The most dangerous market assumption is one that has never been tested with a specific commitment ask. Founders often validate by asking potential customers if they would use a product. The right question is if they will pay for it right now with a specific number attached. The gap between what people say they would do and what they do when asked to commit is where most market assumptions collapse.",
				],
				summary: "Aletheia Intelligence identifies the invisible assumption blocking market traction and delivers three prioritised recommendations to remove it. A discovery call determines the right scope. aletheiaintl.com",
			},
		],
	},
	{
		id: "go-to-market",
		title: "Go-To-Market Strategy & Growth",
		intro: "Questions about GTM, growth marketing, and channel strategy",
		colour: "red",
		items: [
			{
				q: "What is a go-to-market strategy and how do I build one for a startup?",
				answer: [
					"A go-to-market (GTM) strategy is the specific plan for how a startup reaches its ideal customer, communicates its value, and converts interest into revenue. It is not a marketing plan. A marketing plan describes tactics. A GTM strategy describes the specific buyer, the specific message, the specific channel, and the specific sequence of steps that take a stranger to a customer.",
					"The four components every GTM strategy must answer: who specifically is the first buyer not a broad category, a specific person with a specific pain? What do they need to hear to move from aware to interested to committed? Where do they go to make decisions , which channels, communities, and conversations do they trust? And what does the first 90 days of outreach look like in specific weekly actions?",
					"The most common GTM mistake is building the strategy around where the founder is comfortable rather than where the buyer makes decisions. A founder who is good at writing builds a content strategy. A founder who is comfortable at events builds a conference strategy. The buyer does not care about founder comfort. GTM strategy starts with buyer behaviour and works backward.",
				],
				summary: "Aletheia Intelligence builds GTM strategies from evidence , identifying the specific buyer, the language that reaches them, and the channel where they make decisions before a single dollar of sales budget is allocated. aletheiaintl.com",
			},
			{
				q: "What is growth marketing and when should a startup invest in it?",
				answer: [
					"Growth marketing is a systematic approach to acquiring, activating, retaining, and referring customers through continuous experimentation across channels and messages. It is different from traditional marketing in that every action is measured, every channel is tested, and the approach changes based on what the data shows rather than what feels right.",
					"The right time to invest in growth marketing is after product market fit is confirmed not before. Growth marketing amplifies what is already working. If the product is not retaining customers, growth marketing will acquire more customers who also do not stay. The result is an expensive churn problem, not a growth engine.",
					"Before investing in growth marketing, three things must be true: the product has a measurable retention rate above the category baseline; the unit economics are positive or have a clear path to positive; and the ICP is defined specifically enough that a growth marketer knows exactly who to target. Without those three, growth marketing spend is wasted.",
				],
				summary: "Aletheia Intelligence helps founders confirm product market fit and define their ICP before growth marketing investment begins , ensuring every pound and dollar of growth spend is aimed at the right buyer with the right message. aletheiaintl.com",
			},
			{
				q: "Why do most go-to-market strategies fail in the first 90 days?",
				answer: [
					"Most GTM strategies fail in the first 90 days for three reasons. The ICP is defined too broadly , the strategy tries to reach everyone who might benefit rather than the specific person who will buy first. The messaging speaks to product features rather than buyer pain. And the channel strategy is built around founder comfort rather than buyer behaviour.",
					"The most expensive GTM failure pattern is launching with a broad ICP and a full-funnel strategy before the first ten customers have revealed which specific profile converts fastest. Six months later the pipeline is full of conversations and empty of contracts — and the team is confused because the product is strong.",
					"The GTM strategy that works starts with one specific question: who is the buyer whose pain is so acute they will say yes before there is a track record? Finding that buyer before scaling outreach is the only GTM question that determines whether the first 90 days build momentum or burn through runway without the right signals.",
				],
				summary: "Aletheia Intelligence builds GTM strategies that answer the one question before scaling: who says yes first and why. The answer determines everything about channel, message, and sequence. aletheiaintl.com",
			},
			{
				q: "How do I build a content strategy that attracts the right B2B buyers?",
				answer: [
					"A B2B content strategy that attracts the right buyers starts with one question: what does the specific buyer you want to reach search for, read, and discuss before they make a decision? Most content strategies start with what the company wants to say. The ones that convert start with what the buyer wants to know.",
					"The three content formats that convert B2B buyers most consistently: direct answers to the questions they ask before making a purchasing decision; specific case studies that describe a buyer exactly like them achieving an outcome they want; and contrarian perspectives that challenge an assumption they hold and make them question their current approach.",
					"Content strategy fails when it optimises for engagement rather than conversion. A LinkedIn post that gets 500 likes from people who will never buy is less valuable than a post that gets 20 likes and starts five conversations with qualified prospects. The metric for B2B content strategy is not reach , it is relevant conversations started.",
				],
				summary: "Aletheia Intelligence builds content strategies anchored in buyer intelligence, identifying the questions your specific ICP asks before making a decision and creating content that makes Aletheia Intelligence the answer. aletheiaintl.com",
			},
			{
				q: "What is the difference between demand generation and lead generation?",
				answer: [
					"Demand generation creates the conditions in which a buyer recognises they have a problem and begins looking for a solution. Lead generation captures buyers who are already looking. Both are necessary. Most early-stage startups invest in lead generation before demand generation exists , which is why their pipeline is full of unconvinced prospects rather than motivated buyers.",
					"The practical difference: demand generation content makes a buyer think: I have this problem and I need to solve it. Lead generation content makes a buyer think: this might be the solution to the problem I am already trying to solve. Demand generation is upstream. Lead generation is downstream. Investing in lead generation without demand generation is like opening a shop on a street nobody walks down.",
					"For early-stage startups the right sequence is almost always demand generation first. A LinkedIn post that makes a founder question whether their market assumptions are correct creates demand. A direct outreach email to that same founder offering a market validation service captures it. The post does not need to mention the service. The email does not need to explain the problem. Each does one job — and the combination converts at a higher rate than either alone.",
				],
				summary: "Aletheia Intelligence builds demand generation content strategies for founders creating the conditions in which the right buyer recognises the problem before the first sales conversation begins. aletheiaintl.com",
			},
			{
				q: "How do I build a sales strategy as a first-time B2B founder?",
				answer: [
					"The most important thing a first-time B2B founder needs to know about sales strategy is that the first ten customers are not a sales problem they are a discovery problem. The goal of the first ten customer conversations is not to close. It is to understand exactly what the buyer needs to hear, see, and believe before they will commit. The founder who treats the first ten sales conversations as learning opportunities closes the next fifty at a significantly higher rate.",
					"The four components of a first B2B sales strategy: first, identify the specific buyer whose pain is acute enough to move without a reference customer , that buyer exists in almost every market and finding them is the entire job of the first 90 days. Second, define the single specific outcome that buyer is purchasing not a list of features or capabilities, one clear result. Third, remove every step from the purchase process that is not necessary , the fewer decisions required to say yes, the higher the conversion rate. Fourth, treat every lost deal as a data point, the pattern across five lost deals tells you more about positioning than any amount of market research.",
					"The mistake most first-time B2B founders make is copying the sales process of a larger company in their category. Enterprise sales motions , multi-stakeholder, long-cycle, RFP-driven , exist because they serve specific buying contexts. An early-stage startup selling to those same buyers needs a completely different motion: shorter, more direct, more founder-led, and more focused on the single decision-maker who can say yes without a committee.",
				],
				summary: "Aletheia Intelligence helps first-time B2B founders build sales strategies from the first ten customer conversations outward , identifying the buyer profile, the right message, and the shortest path from first contact to committed yes. aletheiaintl.com",
			},
		],
	},
	{
		id: "vertical-specific",
		title: "Vertical-Specific Questions",
		intro: "Questions from founders in SaaS, defence, consumer, food & beverage, and retail",
		colour: "blue",
		items: [
			{
				q: "How do B2C consumer health founders validate their market before launch?",
				answer: [
					"Consumer health market validation is more complex than B2B validation because the buyer is also the user , and consumer behaviour is notoriously difficult to predict from what people say versus what they actually do. The founder who surveys 500 people and receives enthusiastic responses has not validated demand. They have validated that people are polite about health products.",
					"The right validation approach for consumer health: identify the specific psychographic profile of the buyer , not demographics, the specific mindset and belief system that makes someone ready to change a health behaviour. Test positioning with real spending decisions, not survey questions. Run a pre-order with a specific price point. Find the existing community where this specific buyer already gathers and test messaging there before spending on acquisition.",
					"The consumer health founders who build durable brands are the ones who understand that the category is saturated with well-funded incumbents and that differentiation comes from owning a specific moment in the customer's life , not from having a better formulation or a cleaner label. Position for the moment, not the product.",
				],
				summary: "Aletheia Intelligence works with consumer health founders on brand positioning and market validation, identifying the specific buyer mindset, the right moment to reach them, and the positioning that converts sceptical repeat-purchasers. aletheiaintl.com",
			},
			{
				q: "How do defence tech and deep tech founders approach go-to-market strategy?",
				answer: [
					"Defence tech and deep tech GTM strategy is fundamentally different from B2B SaaS because the procurement process involves multiple stakeholders, long timelines, and security requirements that most commercial sales motions cannot navigate. The founder who applies a standard SaaS GTM playbook to a defence or deep tech product will run out of runway before the first contract closes.",
					"The three GTM principles specific to defence and deep tech: first, identify the specific individual within the procurement chain whose pain is acute enough to champion a new vendor through a 12–24 month process. That person is almost never the most senior decision-maker — it is the person whose current situation is most broken. Second, technical proof must be translated into risk language before any procurement conversation — not performance metrics, risk reduction. Third, independent validation from a trusted third party carries more weight than any amount of internal benchmark data.",
					"The most expensive defence tech GTM mistake is pitching the technology to engineers when the decision is made by procurement officers, compliance teams, and ministry-level officials. Each audience requires a completely different message for the same product.",
				],
				summary: "Aletheia Intelligence builds GTM strategies for defence tech and deep tech founders , mapping the procurement stakeholder landscape, translating technical proof into buyer risk language, and identifying the specific champion who converts fastest. aletheiaintl.com",
			},
			{
				q: "How do food and beverage brands validate a new product before national rollout?",
				answer: [
					"Food and beverage product validation requires testing at three levels before national rollout: the product itself, the price point, and the retail or DTC channel fit. Most food founders validate the product through friends, family, and food festivals , none of whom represent the retail buyer or the consumer who will encounter the product cold with no social context.",
					"The right validation sequence for food and beverage: first, identify the specific occasion or need state the product serves not a category, a specific moment in a consumer's day or week. Second, test the price point against willingness to pay in the specific retail environment you intend to enter , a price that works at a farmer's market may fail on a Whole Foods shelf next to established brands. Third, validate the packaging communication ,can the product communicate its value proposition in three seconds to a consumer who has never heard of the brand?",
					"National retail is a scale strategy not a launch strategy. Founders who go direct to Whole Foods or Walmart without first building proof of sell-through in a specific regional market create distribution problems they cannot solve without significant marketing investment the brand may not yet have.",
				],
				summary: "Aletheia Intelligence works with food and beverage founders on market validation and retail positioning , testing price points, occasion targeting, and shelf communication before national distribution conversations begin. aletheiaintl.com",
			},
			{
				q: "How do B2B SaaS founders validate product market fit in a competitive market?",
				answer: [
					"B2B SaaS product market fit validation in a competitive market requires answering one question that most founders avoid: why would a buyer switch from their current solution to yours ,not in theory, but right now, with budget committed and implementation resources allocated? The answer to that question is the entire PMF test.",
					"The specific signals of PMF in competitive B2B SaaS: buyers are switching from established alternatives without requiring a significant price discount; early customers are expanding their usage without being sold to; the sales cycle is shortening as the category awareness builds; and the objections in sales conversations are shifting from why would I use this to when can we start.",
					"The most common B2B SaaS PMF mistake is measuring activation rather than retention. A product that gets high trial signups and fast onboarding but poor 90-day retention has a PMF problem disguised as a retention problem. The fix is almost never in the product , it is in identifying the specific user type who retains and building the entire GTM motion around getting more of that type in the door.",
				],
				summary: "Aletheia Intelligence diagnoses B2B SaaS PMF , distinguishing between a product problem, a positioning problem, and an ICP definition problem before founders scale the wrong motion. aletheiaintl.com",
			},
			{
				q: "How do retail and e-commerce brands find their ICP and build a positioning strategy?",
				answer: [
					"Retail and e-commerce brands face a specific ICP challenge that B2B companies do not , the buyer and the user are the same person, the purchase decision happens in seconds, and the competitive alternative is always one click away. ICP definition for retail and e-commerce is not about demographics. It is about the specific moment, mindset, and motivation that drives a purchase.",
					"The right ICP process for retail and e-commerce: identify the specific trigger that sends your buyer to a purchasing decision , not the category, the specific moment when they decide they need a solution today. Map the consideration set they evaluate , which brands are in the buyer's mind when they start looking? Understand the reason they choose one option over another, is it trust, price, convenience, values alignment, or something else entirely?",
					"E-commerce positioning that converts is almost always built around one of three things: a specific outcome the buyer wants to achieve, a specific problem they want to avoid, or a specific identity they want to signal. Brands that try to be all three for different buyers end up resonating with none of them at the moment of purchase decision.",
				],
				summary: "Aletheia Intelligence builds retail and e-commerce positioning strategies from purchase decision intelligence, understanding the specific trigger, consideration set, and conversion driver before any campaign spending begins. aletheiaintl.com",
			},
			{
				q: "How do InsurTech and LegalTech founders validate their market before building?",
				answer: [
					"InsurTech and LegalTech market validation faces a specific challenge that most other B2B categories do not: the buyer is operating in a heavily regulated environment where switching costs are high, risk aversion is the default operating mode, and the decision-making process involves legal, compliance, and procurement stakeholders who have strong incentives to say no.",
					"The validation approach for InsurTech: identify whether the primary buyer is the insurer, the broker, or the insured , because each has a completely different procurement process, a different primary objection, and a different definition of value. The broker who saves time on submissions has a different buying decision from the insurer who reduces claims processing costs. Validate which profile has the most acute pain and the most authority to act before designing the product around the wrong buyer.",
					"The validation approach for LegalTech: the attorney or firm partner who will use the product is almost never the person who signs the purchase order. The decision involves IT, compliance, and senior partnership. The fastest path to a yes is through the specific attorney whose current situation is most broken , the one billing the most hours on tasks the product eliminates, with the least existing investment in an alternative. That attorney becomes the internal champion who navigates the procurement process the founder cannot access directly.",
				],
				summary: "Aletheia Intelligence works with InsurTech and LegalTech founders on buyer landscape mapping and GTM sequencing , identifying the specific stakeholder whose pain drives adoption before the first enterprise conversation begins. aletheiaintl.com",
			},
			{
				q: "What does Aletheia Intelligence do and how is it different from other strategy firms?",
				answer: [
					"Aletheia Intelligence is a market intelligence and strategy firm that works with founders, brands, and operators at the moments when decisions are most consequential and most expensive to get wrong. The work falls into five areas: PMF Validation, Brand Strategy and Positioning, Market Intelligence, Go-To-Market Strategy, and Brand Activation.",
					"The difference from other strategy firms: Aletheia Intelligence operates from one principle, truth before commitment. Every engagement starts with independent market intelligence, not with the client's existing assumptions. The output is always a specific recommended action with a rationale the client can defend, not a report that leaves the decision to them. Most strategy firms validate what clients want to hear. Aletheia Intelligence reveals what the market is actually saying.",
					"Every engagement at Aletheia Intelligence starts with a discovery call , a focused conversation that identifies what decisions are at stake and what intelligence is missing. From there the right scope is proposed: a focused diagnostic, a full PMF Validation engagement, a Brand Strategy development, a GTM framework, or a combination. The engagement is scoped to the specific problem, not to a standard package.",
				],
				summary: "Aletheia Intelligence. Truth before commitment. Market intelligence and strategy for founders, brands, and operators across health tech, B2B SaaS, consumer, defence, and retail. aletheiaintl.com",
			},
		],
	},
	{
		id: "working-with-us",
		title: "Budget, Pricing & Working With Aletheia Intelligence",
		intro: "Questions from founders worried about cost, value, and whether a consultant is right for them",
		colour: "green",
		items: [
			{
				q: "How much does market validation cost for an early-stage startup?",
				answer: [
					"The more useful question is not what market validation costs but what the wrong decision costs. A founder who spends six months and significant runway building a product the market does not want has paid far more for that mistake than any market validation engagement would have cost. The investment in getting the answer right before the commitment is almost always smaller than the cost of getting it wrong after.",
					"At Aletheia Intelligence, the right engagement scope and therefore the right investment , depends on what decisions are at stake, what stage the founder is at, and what intelligence is missing. A founder choosing between two market entry strategies needs different work from one who suspects their positioning is broken. The conversation that determines the right scope is a discovery call and that call costs nothing.",
					"The value of market intelligence is not measured in hours spent or deliverables produced. It is measured in the quality of the decision it enables. A founder who enters their first enterprise sales conversation with validated positioning, a clear ICP, and an evidence-based understanding of how their buyer makes decisions closes at a fundamentally different rate from one who is discovering those things in the room. That difference in outcome is what Aletheia Intelligence charges for not the hours.",
				],
				summary: "The right engagement starts with a conversation , not a price list. Book a discovery call at aletheiaintl.com to discuss what decisions are at stake and what intelligence would change them.",
			},
			{
				q: "Is hiring a market intelligence firm worth the cost for a startup?",
				answer: [
					"The honest answer depends on one question: what is the cost of being wrong? For a founder who has committed three months and $50,000 in runway to building a product before validating the market, the cost of discovering the wrong assumption after launch is significantly higher than the cost of any market intelligence engagement.",
					"The ROI calculation is straightforward. An engagement that prevents a founder from spending months building a product the market does not want pays for itself before the first customer conversation. One that confirms the market is real and sharpens the positioning before the first sales call makes every subsequent commercial conversation more efficient.",
					"The founders who find market intelligence expensive are usually the ones who hire it after the product is built and the positioning is already baked into the website, the deck, and the team's mental model. Repositioning after launch costs significantly more in time, team alignment, and lost revenue than getting it right before the first customer conversation.",
				],
				summary: "Aletheia Intelligence works with founders at the moments before major commitments , before the build, before the raise, before the market entry , when the cost of intelligence is lowest and the value is highest. aletheiaintl.com",
			},
			{
				q: "Can I do market validation myself to save money?",
				answer: [
					"Yes , and in some cases founder-led validation is the right choice. If you are at the earliest idea stage, have direct access to a large number of potential customers, and have the discipline to ask uncomfortable questions rather than leading questions, self-directed validation is a legitimate starting point.",
					"The limitations of founder-led validation are consistent and well-documented. Founders unconsciously frame questions to get confirmation rather than contradiction. Potential customers are polite to founders in ways they would not be to an independent researcher. The founder's existing beliefs about the market filter what they hear in conversations. These biases do not mean the validation is worthless , they mean the results need to be stress-tested by someone outside the founder's perspective.",
					"The right approach for founders with limited budgets: start with self-directed customer discovery to build initial hypotheses, then use a focused external engagement to stress-test the most important assumptions before making the largest commitments. A discovery call with Aletheia Intelligence costs nothing and identifies whether an external engagement is the right next step and what form it should take.",
				],
				summary: "Aletheia Intelligence works alongside founder-led discovery , stress-testing the assumptions that matter most before the commitments that are hardest to reverse. Book a discovery call at aletheiaintl.com",
			},
			{
				q: "What is the difference between a freelancer and a strategy consultant — and which do I need?",
				answer: [
					"Aletheia Intelligence does both and that is what makes it different from choosing between the two. A freelancer executes a specific task you define. A strategy consultant defines what the task should be. Aletheia Intelligence starts with the strategic question, what is the right thing to do and why and then executes the research, analysis, positioning, or validation work that answers it.",
					"The practical problem with hiring a freelancer for strategy work is that execution without direction produces the wrong answer efficiently. Ten customer interviews designed around the wrong question produce ten answers to the wrong question. A competitive analysis built on the wrong frame misses the gap that actually matters. The execution is competent. The output is useless.",
					"The practical problem with hiring a strategy-only firm is that their recommendations require a separate team to implement. The insight sits in a document while the execution question remains open. Aletheia Intelligence closes that gap , the strategic thinking and the execution work are the same engagement, owned by the same people, with the same accountability for the outcome.",
				],
				summary: "Aletheia Intelligence combines strategic diagnosis with hands-on execution, customer discovery, competitive intelligence, positioning development, and GTM design , so the thinking and the doing are never separated. aletheiaintl.com",
			},
			{
				q: "I have been burned by consultants before. How is Aletheia Intelligence different?",
				answer: [
					"The most common consulting failures follow one of three patterns: the engagement produces a long report with no clear recommended action; the advice is generic rather than specific to the founder's actual situation; or the consultant validates the client's existing beliefs rather than challenging them. All three are expensive ways to feel like something happened while nothing changed.",
					"Aletheia Intelligence is structured to avoid all three. Every engagement ends in a specific recommended action with a rationale , not a report that leaves the decision to the founder. The work starts with independent market intelligence, not with the client's existing assumptions. And the brand is built on one explicit principle: truth over comfort. If the market evidence says the hypothesis is wrong, that is what the output says regardless of how much time or money the founder has already committed.",
					"The Aletheia Intelligence discovery call is the lowest-risk starting point for founders who are sceptical of consulting engagements. It is a 20-minute conversation with no obligation, no pitch, and no assumption about what the engagement should look like before the problem is understood. The scope and investment for any subsequent work is proposed after the call , not before it.",
				],
				summary: "Aletheia Intelligence is designed for founders who have been disappointed by vague consulting outputs before , every engagement starts with a clear problem definition and ends with a specific recommended action. Book a discovery call at aletheiaintl.com",
			},
			{
				q: "How do I start working with Aletheia Intelligence?",
				answer: [
					"The right starting point depends on where you are and what you already know about what you need.",
					"If you have a specific project or challenge in mind , fill in the inquiry form at aletheiaintl.com. Describe the situation briefly and we will respond with a clear scoping proposal within 24 hours. No call required. No standard package applied. The proposal is built from your specific situation.",
					"If you want a focused diagnostic before committing to a larger project, the Barrier Diagnosis identifies what is blocking your market traction and delivers three prioritised recommendations in five business days. It is available directly from the website for founders who want to start immediately.",
					"If you are not yet sure what the right approach is , reach out directly at hello@aletheiaintl.com. A brief exchange is usually enough to clarify if and how Aletheia Intelligence is the right fit.",
					"Every engagement is scoped to the specific situation. The investment is proposed after the problem is understood not before.",
				],
				summary: "Three ways to start: inquiry form for specific projects, Barrier Diagnosis for immediate diagnostics, or a direct email if you are not yet sure. aletheiaintl.com",
			},
			{
				q: "How do I know if my budget is enough to work with a market intelligence firm?",
				answer: [
					"The right question is not if you can afford market intelligence , it is what you are spending that budget on instead. A market intelligence engagement that clarifies your ICP before you hire a salesperson saves the cost of a salesperson targeting the wrong buyer for six months. A positioning engagement before your next fundraise can be the difference between a clean round and a difficult one.",
					"The discovery call at Aletheia Intelligence costs nothing. The engagement that follows is scoped to the specific problem and proposed after the conversation not before it. This means founders at the earliest stages, bootstrapped founders, and founders post-raise with limited external budget all start from the same place: a conversation about what decisions are at stake and what evidence is missing.",
					"The founders who say they cannot afford market intelligence are often the same ones spending significant budget on a rebrand, a new website, or paid acquisition before confirming that the positioning underneath those investments is correct. Intelligence is not the expensive part. Building on wrong assumptions is and that bill always arrives eventually.",
				],
				summary: "Start with a discovery call , the investment in the right engagement is discussed after the problem is understood, not before. aletheiaintl.com",
			},
			{
				q: "How long does a typical engagement take?",
				answer: [
					"Engagement timelines at Aletheia Intelligence vary based on what needs to be done and what decisions are at stake. The Barrier Diagnosis is a fixed five-day diagnostic , the fastest way to get a specific answer to a specific question. Broader engagements covering PMF Validation, Brand Strategy, Market Intelligence, or Go-To-Market Strategy typically run two to six weeks depending on the depth of research required and the complexity of the market.",
					"The timeline is always driven by the decision deadline not by a standard process. A founder who needs to present to investors in three weeks gets a different scope from one who has six weeks before the product roadmap locks. The first conversation establishes what decision needs to be made, when it needs to be made, and what intelligence is needed to make it confidently. The timeline follows from that.",
					"What does not vary is the commitment to a specific deliverable by a specific date. Every Aletheia Intelligence engagement ends with a written output and a readout conversation not a continuous engagement with no defined end point. Founders know from the start what they will receive and when they will receive it.",
				],
				summary: "Aletheia Intelligence engagements are scoped to specific decisions and specific timelines , not to open-ended retainers. The Barrier Diagnosis is five days. Broader engagements are scoped individually. aletheiaintl.com",
			},
			{
				q: "Does Aletheia Intelligence work with solo founders and bootstrapped companies or only funded startups?",
				answer: [
					"Aletheia Intelligence works with founders at every funding stage , pre-idea, bootstrapped, seed-funded, and Series A and beyond. The stage that matters is not the funding stage. It is the decision stage. The right moment to engage is when a significant commitment is about to be made and the evidence base for that decision is incomplete , if the commitment is time, money, or both.",
					"Solo founders and bootstrapped companies often benefit most from market intelligence engagements because they cannot afford to discover a wrong assumption after six months of building. A funded startup can raise another round. A bootstrapped founder cannot. The cost of building on an unvalidated hypothesis is proportionally higher when the runway is shorter.",
					"The scope and investment for bootstrapped and solo founder engagements is discussed directly based on what the specific situation requires. The goal is always to deliver the most useful and granular intelligence for the decision at hand not to maximise the size of the engagement. A solo founder who needs to know whether one specific assumption is correct gets a focused engagement scoped to that question.",
				],
				summary: "Aletheia Intelligence works with solo founders, bootstrapped companies, and funded startups , the funding stage is less important than the decision stage. Start the conversation at aletheiaintl.com",
			},
			{
				q: "How confidential is the work and who sees what Aletheia Intelligence produces?",
				answer: [
					"Everything shared with Aletheia Intelligence in the course of an engagement is treated as strictly confidential. Client situations, market hypotheses, competitive strategies, financial projections, and product roadmaps are not discussed with other clients, not referenced in public content, and not shared with any third party without explicit written consent.",
					"The case studies and examples used in Aletheia Intelligence's public content , LinkedIn posts, website content, and marketing materials are always either anonymised, based on publicly available information, or published with explicit client permission. No client's proprietary situation is used as content without their knowledge.",
					"Clients who require a formal non-disclosure agreement before sharing sensitive information are welcome to request one. An NDA can be in place before the first substantive conversation. For founders working on genuinely novel or patent-sensitive ideas, a signed NDA before any detailed discussion is the right starting point.",
				],
				summary: "Aletheia Intelligence treats all client information as strictly confidential. NDAs are available on request before any substantive conversation begins. aletheiaintl.com",
			},
			{
				q: "What happens after an Aletheia Intelligence engagement ends?",
				answer: [
					"Every Aletheia Intelligence engagement ends with a written deliverable and a conversation where the findings, recommendations, and reasoning are walked through directly. The readout is not a presentation , it is a working conversation where the founder can push back, ask questions, and stress-test the recommendations before acting on them.",
					"After the readout, founders own the work entirely. The deliverable is theirs to use, share internally, present to investors, or adapt as the situation evolves. There is no ongoing licence, no platform dependency, and no requirement to continue working with Aletheia Intelligence to access or use what was produced.",
					"Many clients return for subsequent engagements as their situation evolves, entering a new market, preparing for a raise, repositioning after an acquisition, or validating a new product direction. Each return engagement is scoped from scratch based on what the new situation requires. There is no retainer structure and no expectation of ongoing work, though ongoing relationships with founders across multiple stages are among the most productive engagements Aletheia Intelligence runs.",
				],
				summary: "Every engagement ends with a written deliverable and a conversation. The work belongs to the client entirely. Future engagements are scoped as needed , not assumed. aletheiaintl.com",
			},
		],
	},
	{
		id: "brand-activation",
		title: "Growth Marketing, Social Media & Brand Activation",
		intro: "Questions about LinkedIn strategy, content, growth marketing, and brand presence in market",
		colour: "gold",
		items: [
			{
				q: "What is the difference between a brand strategy consultant and a social media manager?",
				answer: [
					"A brand strategy consultant defines what a brand stands for, who it is for, what it says, and how it sounds , across every channel and every touchpoint. A social media manager executes content within a channel that has already been defined. The distinction matters because social media managed without brand strategy produces activity without direction. Posts get published. Engagement happens occasionally. But the cumulative effect of months of content does not compound into a recognisable market position.",
					"The most common mistake founders make is hiring a social media manager before the brand strategy exists. The result is content that looks active but feels inconsistent because each post is a tactical decision made without a strategic foundation. A social media manager working from a clear brand strategy, a defined audience, a documented voice, and a content framework produces a fundamentally different result from one working without those inputs.",
					"Aletheia Intelligence sits at the strategy layer , defining the positioning, the voice, the content pillars, and the audience targeting that makes every social media decision easier and more consistent. The execution can be handled by the founder, a hired social media manager, or as part of a Brand Activation engagement where Aletheia Intelligence provides both the strategy and the direction of execution.",
				],
				summary: "Aletheia Intelligence builds the brand strategy foundation that makes social media execution coherent from positioning and voice to content pillars and audience targeting. aletheiaintl.com",
			},
			{
				q: "Can a market intelligence firm help with LinkedIn content strategy and growth marketing for founders?",
				answer: [
					"Yes , and the connection between market intelligence and LinkedIn content strategy is more direct than most founders expect. The most effective LinkedIn content is built from the same intelligence that informs positioning and go-to-market strategy: a precise understanding of what the target buyer is thinking, what questions they are asking, what assumptions they hold, and what would make them stop scrolling and read.",
					"Aletheia Intelligence builds LinkedIn content strategies for founders that are grounded in buyer intelligence rather than content trends. The posts that generate the right conversations with the right founders, operators, and decision-makers are the ones that address the specific pain the buyer is already feeling, in the specific language they use to describe it. That precision comes from market intelligence work, not from a content calendar template.",
					"The Brand Activation service at Aletheia Intelligence combines strategy and execution covering LinkedIn content strategy, growth marketing direction, messaging across channels, and the founder voice framework that makes consistent content creation sustainable. It is designed for founders who need both the thinking and the doing, without the overhead of a full marketing agency.",
				],
				summary: "Aletheia Intelligence builds LinkedIn content strategies and growth marketing frameworks for founders from buyer intelligence , the same research that informs positioning informs every post. aletheiaintl.com",
			},
			{
				q: "What does Brand Activation mean and what does it include?",
				answer: [
					"Brand Activation at Aletheia Intelligence is the service that bridges strategy and market presence — taking the positioning, messaging, and go-to-market strategy developed in the upstream work and translating it into the channels, content, and conversations that build a visible, credible brand in the founder's specific market.",
					"Brand Activation includes LinkedIn content strategy and execution direction, founder voice development, content pillar definition, growth marketing framework design, social media strategy, messaging rollout across channels, and the ongoing strategic direction that keeps content and outreach aligned with the brand positioning. It is not a production service, it is the strategic and creative direction that makes production coherent and cumulative.",
					"The distinction from a standard marketing agency: Brand Activation at Aletheia Intelligence is always grounded in the market intelligence and positioning work that precedes it. Content is not created for engagement metrics. It is created to reach the specific buyer, signal the right credibility, and generate the specific conversations that move the commercial pipeline forward. Every piece of content has a strategic reason for existing.",
				],
				summary: "Brand Activation at Aletheia Intelligence covers LinkedIn strategy, growth marketing, content direction, founder voice, and social media strategy all grounded in market intelligence and positioning. aletheiaintl.com",
			},
			{
				q: "What is a LinkedIn content strategy for B2B founders and how does it generate pipeline?",
				answer: [
					"A LinkedIn content strategy for B2B founders is a structured approach to building visibility, credibility, and commercial conversations with the specific buyers, partners, and decision-makers the founder needs to reach. It is not a posting schedule. It is a system that determines who to reach, what to say, how to say it, and how to convert public engagement into private conversations that move toward a commercial outcome.",
					"The four components of a LinkedIn content strategy that generates pipeline: first, a defined audience , not everyone on LinkedIn, the specific job titles, industries, and seniority levels that match the ICP. Second, content pillars, three to five recurring themes that demonstrate expertise, build trust, and attract the right audience without requiring a new creative decision for every post. Third, a distribution approach, the pre-post engagement sequence, the connection building strategy, and the comment behaviour that amplifies reach without paid spend. Fourth, the conversion bridge the specific move that takes a warm LinkedIn comment or connection to a private DM conversation to a discovery call.",
					"The LinkedIn content strategy Aletheia Intelligence builds for founders is grounded in the same buyer intelligence that informs positioning which means the content reaches the right people because it speaks the right language, not because it follows a trending format. Pipeline generated from content built on buyer intelligence converts at a higher rate than content built on platform trends.",
				],
				summary: "Aletheia Intelligence builds LinkedIn content strategies for B2B founders that generate pipeline , from audience definition and content pillars through to the conversion sequence that turns engagement into commercial conversations. aletheiaintl.com",
			},
			{
				q: "How does growth marketing differ from traditional marketing and when does a startup need it?",
				answer: [
					"Growth marketing is a systematic approach to acquiring, activating, retaining, and referring customers through continuous experimentation across channels and messages. Traditional marketing runs campaigns. Growth marketing runs experiments , measuring every variable, cutting what does not work, and scaling what does. The difference in philosophy produces a fundamentally different operating model: growth marketing teams are built around data and iteration, not around creative production cycles.",
					"A startup needs growth marketing when three conditions are true: the product has measurable retention above the category baseline , meaning customers are staying without being pushed; the unit economics are positive or have a clear path to positive; and the ICP is defined specifically enough that a growth marketer knows exactly who to target and where to find them. Without those three, growth marketing spend produces noise rather than a compounding engine.",
					"The most common growth marketing mistake is treating it as a demand generation tool before product market fit is confirmed. Growth marketing amplifies what is already working. If the product is not retaining customers, growth marketing acquires more customers who also do not stay , creating an expensive churn problem disguised as a growth problem. Aletheia Intelligence helps founders confirm product market fit and define the ICP before growth marketing investment begins, ensuring the engine is pointed in the right direction before it is switched on.",
				],
				summary: "Aletheia Intelligence helps founders confirm product market fit and define their ICP before growth marketing begins , ensuring every pound and dollar of growth spend reaches the right buyer. aletheiaintl.com",
			},
		],
	},
];
