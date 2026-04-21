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

		const visibleSections = new Map<string, number>();

		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						visibleSections.set(id, entry.boundingClientRect.top);
					} else {
						visibleSections.delete(id);
					}

					if (visibleSections.size > 0) {
						const topmost = [...visibleSections.entries()].sort(
							(a, b) => a[1] - b[1],
						)[0][0];
						setActiveHash(`#${topmost}`);
					}
				},
				{
					rootMargin: "-10% 0px -60% 0px",
					threshold: 0,
				},
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
