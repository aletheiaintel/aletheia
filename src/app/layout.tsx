import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Aletheia Intelligence",
	description: "Truth. Strategy. Intelligence.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={cn("h-full antialiased", poppins.variable)}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
