import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import Methodology from "@/components/sections/Methodology";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
	return (
		<main className="h-auto w-full flex flex-col">
			<Navbar />
			<Hero />
			<Services />
			<Methodology />
			<Testimonials />
			<FAQ />
			<Contact />
			<Footer />
		</main>
	);
}
