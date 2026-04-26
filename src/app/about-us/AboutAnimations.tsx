"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function parseStat(value: string) {
	const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
	if (!m) return { prefix: "", num: 0, suffix: value, decimals: 0 };
	const raw = m[2];
	return {
		prefix: m[1],
		num: parseFloat(raw),
		suffix: m[3],
		decimals: raw.includes(".") ? raw.split(".")[1].length : 0,
	};
}

export default function AboutAnimations() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// ── Hero ──
			gsap.fromTo(".about-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 });
			gsap.fromTo(".about-hero-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "expo.inOut", delay: 0.5 });
			gsap.fromTo(".about-hero-sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.9 });
			gsap.fromTo(".about-hero-rule", { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1.2, ease: "expo.inOut", delay: 0.7 });

			// ── Marquee ──
			gsap.to(".about-marquee-track", { xPercent: -50, duration: 28, ease: "none", repeat: -1 });

			// ── Mission section ──
			gsap.fromTo(".about-mission-eyebrow", { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-mission-new", start: "top 82%" } });
			gsap.fromTo(".about-mission-new-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: ".about-mission-new", start: "top 78%" } });
			gsap.fromTo(".about-etymology-card", { opacity: 0, y: 36, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-mission-new", start: "top 72%" } });
			gsap.fromTo(".about-mission-new-para", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.18, scrollTrigger: { trigger: ".about-mission-new", start: "top 68%" } });
			gsap.fromTo(".about-mission-watermark", { opacity: 0 }, { opacity: 1, duration: 3, ease: "power1.out", scrollTrigger: { trigger: ".about-mission-new", start: "top 85%" } });

			// ── Vision section ──
			gsap.fromTo(".about-vision-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-vision", start: "top 82%" } });
			gsap.fromTo(".about-vision-rule", { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-vision", start: "top 80%" } });
			gsap.fromTo(".about-vision-headline", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".about-vision", start: "top 76%" } });
			gsap.fromTo(".about-vision-para", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.18, scrollTrigger: { trigger: ".about-vision", start: "top 70%" } });
			gsap.fromTo(".about-vision-pill", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)", stagger: 0.1, scrollTrigger: { trigger: ".about-vision", start: "top 68%" } });

			// ── Founding quote ──
			gsap.fromTo(".about-mission-quote", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-mission", start: "top 75%" } });
			gsap.fromTo(".about-mission-text", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".about-mission", start: "top 75%" } });

			// ── Values ──
			gsap.fromTo(".about-values-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-values", start: "top 80%" } });
			gsap.fromTo(".about-values-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-values", start: "top 78%" } });
			gsap.fromTo(".about-value-card", { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.14, scrollTrigger: { trigger: ".about-values", start: "top 72%" } });

			// ── Team / Commitments ──
			gsap.fromTo(".about-team-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-team", start: "top 80%" } });
			gsap.fromTo(".about-team-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-team", start: "top 78%" } });
			gsap.fromTo(".about-team-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".about-team", start: "top 72%" } });

			// ── Domain Expertise ──
			gsap.fromTo(".about-domain-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-domain", start: "top 82%" } });
			gsap.fromTo(".about-domain-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-domain", start: "top 78%" } });
			gsap.fromTo(".about-domain-card", { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".about-domain", start: "top 74%" } });
			gsap.fromTo(".about-domain-item", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.06, scrollTrigger: { trigger: ".about-domain", start: "top 68%" } });

			// ── Stats ──
			document.querySelectorAll<HTMLElement>(".about-stat-value").forEach((el) => {
				const raw = el.dataset.value ?? "0";
				const { prefix, num, suffix, decimals } = parseStat(raw);
				const obj = { val: 0 };
				gsap.to(obj, {
					val: num,
					duration: 1.8,
					ease: "power2.out",
					onUpdate() { el.textContent = prefix + obj.val.toFixed(decimals) + suffix; },
					onComplete() { el.textContent = raw; },
					scrollTrigger: { trigger: ".about-stats", start: "top 80%", once: true },
				});
			});
			gsap.fromTo(".about-stat-item", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".about-stats", start: "top 80%" } });

			// ── CTA ──
			gsap.fromTo(".about-cta-inner", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-cta", start: "top 80%" } });
		});

		ScrollTrigger.refresh();

		return () => ctx.revert();
	}, []);

	return null;
}
