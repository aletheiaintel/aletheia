"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/data";

export const useActiveSection = () => {
	const pathname = usePathname();
	const [activeHash, setActiveHash] = useState("");

	useEffect(() => {
		const sectionIds = headerLinks
			.map(({ href }) => href.split("#")[1])
			.filter(Boolean);

		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveHash(`#${id}`);
				},
				{ threshold: 0.4 },
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, [pathname]);

	const isActive = (href: string) => {
		if (!href.includes("#")) return pathname === href;
		const [path, hash] = href.split("#");
		if (pathname === "/" || pathname === path)
			return activeHash === `#${hash}`;
		return false;
	};

	return { isActive };
};
