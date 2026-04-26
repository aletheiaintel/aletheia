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

// Wrap every word in a text node with a <span> while preserving child elements
function wrapWordsInSpans(el: Element, className: string) {
	Array.from(el.childNodes).forEach((node) => {
		if (node.nodeType === 3 && node.textContent?.trim()) {
			const words = node.textContent.split(/(\s+)/);
			const frag = document.createDocumentFragment();
			words.forEach((word) => {
				if (/\S/.test(word)) {
					const span = document.createElement("span");
					span.className = className;
					span.style.opacity = "0.15";
					span.style.display = "inline";
					span.textContent = word;
					frag.appendChild(span);
				} else {
					frag.appendChild(document.createTextNode(word));
				}
			});
			node.parentNode?.replaceChild(frag, node);
		} else if (node.nodeType === 1) {
			wrapWordsInSpans(node as Element, className);
		}
	});
}

// Reusable 3-D hover tilt — returns cleanup fns for event listeners
function applyTiltHover(
	cards: NodeListOf<HTMLElement>,
	opts: { intensity?: number; scale?: number; dark?: boolean },
): Array<() => void> {
	const { intensity = 10, scale = 1.04, dark = false } = opts;
	const cleanups: Array<() => void> = [];

	cards.forEach((card) => {
		gsap.set(card, { transformPerspective: 900 });

		const onMove = (e: MouseEvent) => {
			const r = card.getBoundingClientRect();
			const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
			const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
			gsap.to(card, {
				rotateX: -dy * intensity,
				rotateY: dx * intensity,
				scale,
				z: 40,
				boxShadow: dark
					? "0 28px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,152,26,0.18)"
					: "0 24px 56px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.07)",
				duration: 0.35,
				ease: "power2.out",
				overwrite: "auto",
			});
		};

		const onLeave = () => {
			gsap.to(card, {
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				z: 0,
				boxShadow: dark
					? "0 2px 16px rgba(0,0,0,0.2)"
					: "0 2px 16px rgba(0,0,0,0.05)",
				duration: 0.9,
				ease: "elastic.out(1, 0.45)",
				overwrite: "auto",
			});
		};

		card.addEventListener("mousemove", onMove);
		card.addEventListener("mouseleave", onLeave);
		cleanups.push(() => {
			card.removeEventListener("mousemove", onMove);
			card.removeEventListener("mouseleave", onLeave);
		});
	});

	return cleanups;
}

export default function AboutAnimations() {
	useEffect(() => {
		const listeners: Array<() => void> = [];

		const ctx = gsap.context(() => {
			// ── Hero ────────────────────────────────────────────────────────────
			gsap.fromTo(".about-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 });
			gsap.fromTo(".about-hero-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "expo.inOut", delay: 0.5 });
			gsap.fromTo(".about-hero-sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.9 });
			gsap.fromTo(".about-hero-rule", { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1.2, ease: "expo.inOut", delay: 0.7 });

			// ── Hero orb parallax (NEW) — orbs drift at different rates ─────────
			gsap.to(".about-orb-1", {
				y: -110,
				ease: "none",
				scrollTrigger: { trigger: ".about-hero-headline", start: "top top", end: "+=700", scrub: 2 },
			});
			gsap.to(".about-orb-2", {
				y: 80,
				ease: "none",
				scrollTrigger: { trigger: ".about-hero-headline", start: "top top", end: "+=700", scrub: 3.5 },
			});

			// ── Marquee ─────────────────────────────────────────────────────────
			gsap.to(".about-marquee-track", { xPercent: -50, duration: 28, ease: "none", repeat: -1 });

			// ── Mission section ──────────────────────────────────────────────────
			gsap.fromTo(".about-mission-eyebrow", { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-mission-new", start: "top 82%" } });
			gsap.fromTo(".about-mission-new-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: ".about-mission-new", start: "top 78%" } });
			gsap.fromTo(".about-etymology-card", { opacity: 0, y: 36, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-mission-new", start: "top 72%" } });
			gsap.fromTo(".about-mission-new-para", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.18, scrollTrigger: { trigger: ".about-mission-new", start: "top 68%" } });
			gsap.fromTo(".about-mission-watermark", { opacity: 0 }, { opacity: 1, duration: 3, ease: "power1.out", scrollTrigger: { trigger: ".about-mission-new", start: "top 85%" } });

			// ── Mission watermark horizontal scrub (NEW) ─────────────────────────
			// ALETHEIA text slowly drifts across the section as you scroll through it
			gsap.fromTo(
				".about-mission-watermark span",
				{ x: "-7%" },
				{
					x: "7%",
					ease: "none",
					scrollTrigger: {
						trigger: ".about-mission-new",
						start: "top bottom",
						end: "bottom top",
						scrub: 2,
					},
				},
			);

			// ── Vision section ───────────────────────────────────────────────────
			gsap.fromTo(".about-vision-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-vision", start: "top 82%" } });
			gsap.fromTo(".about-vision-rule", { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-vision", start: "top 80%" } });
			gsap.fromTo(".about-vision-headline", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".about-vision", start: "top 76%" } });
			gsap.fromTo(".about-vision-para", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.18, scrollTrigger: { trigger: ".about-vision", start: "top 70%" } });
			gsap.fromTo(".about-vision-pill", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)", stagger: 0.1, scrollTrigger: { trigger: ".about-vision", start: "top 68%" } });

			// ── Founding quote ───────────────────────────────────────────────────
			gsap.fromTo(".about-mission-quote", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-mission", start: "top 75%" } });
			gsap.fromTo(".about-mission-text", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".about-mission", start: "top 75%" } });

			// ── Founding quote word-by-word scrub (NEW) ──────────────────────────
			// Each word in the blockquote lights up as you scroll through the quote section
			const blockquote = document.querySelector<HTMLElement>(".about-mission-quote blockquote");
			if (blockquote) {
				wrapWordsInSpans(blockquote, "about-q-word");
				gsap.to(".about-q-word", {
					opacity: 1,
					ease: "none",
					stagger: 0.04,
					scrollTrigger: {
						trigger: ".about-mission-quote",
						start: "top 62%",
						end: "bottom 28%",
						scrub: 1,
					},
				});
			}

			// ── Values ──────────────────────────────────────────────────────────
			gsap.fromTo(".about-values-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-values", start: "top 80%" } });
			gsap.fromTo(".about-values-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-values", start: "top 78%" } });
			gsap.fromTo(".about-value-card", { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.14, scrollTrigger: { trigger: ".about-values", start: "top 72%" } });

			// ── Values cards 3D hover tilt (NEW) ────────────────────────────────
			listeners.push(...applyTiltHover(
				document.querySelectorAll<HTMLElement>(".about-value-card"),
				{ intensity: 10, scale: 1.04, dark: true },
			));

			// ── Team / Commitments ───────────────────────────────────────────────
			gsap.fromTo(".about-team-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-team", start: "top 80%" } });
			gsap.fromTo(".about-team-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-team", start: "top 78%" } });
			gsap.fromTo(".about-team-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".about-team", start: "top 72%" } });

			// ── Commitments cards 3D hover tilt (NEW) ───────────────────────────
			listeners.push(...applyTiltHover(
				document.querySelectorAll<HTMLElement>(".about-team-card"),
				{ intensity: 8, scale: 1.03, dark: false },
			));

			// ── Domain Expertise ─────────────────────────────────────────────────
			gsap.fromTo(".about-domain-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".about-domain", start: "top 82%" } });
			gsap.fromTo(".about-domain-headline", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: ".about-domain", start: "top 78%" } });
			gsap.fromTo(".about-domain-card", { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".about-domain", start: "top 74%" } });
			gsap.fromTo(".about-domain-item", { opacity: 0, x: -28 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.055, scrollTrigger: { trigger: ".about-domain", start: "top 68%" } });

			// ── Domain cards 3D hover tilt (NEW) ────────────────────────────────
			listeners.push(...applyTiltHover(
				document.querySelectorAll<HTMLElement>(".about-domain-card"),
				{ intensity: 6, scale: 1.02, dark: false },
			));

			// ── Stats ────────────────────────────────────────────────────────────
			document.querySelectorAll<HTMLElement>(".about-stat-value").forEach((el) => {
				const raw = el.dataset.value ?? "0";
				const { prefix, num, suffix, decimals } = parseStat(raw);
				const obj = { val: 0 };
				gsap.to(obj, {
					val: num,
					duration: 1.8,
					ease: "power2.out",
					onUpdate() { el.textContent = prefix + obj.val.toFixed(decimals) + suffix; },
					onComplete() {
						el.textContent = raw;
						// Golden glow pulse (NEW) — fires the moment the number lands
						gsap.timeline()
							.to(el, { textShadow: "0 0 32px rgba(201,152,26,0.95)", duration: 0.35, ease: "power2.out" })
							.to(el, { textShadow: "0 0 0px rgba(201,152,26,0)", duration: 0.55, ease: "power2.in" });
					},
					scrollTrigger: { trigger: ".about-stats", start: "top 80%", once: true },
				});
			});
			// Enhanced stat item entrance (NEW) — scale + bounce
			gsap.fromTo(
				".about-stat-item",
				{ opacity: 0, y: 36, scale: 0.85 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.6)", stagger: 0.12, scrollTrigger: { trigger: ".about-stats", start: "top 80%" } },
			);

			// ── CTA ─────────────────────────────────────────────────────────────
			// Enhanced: scale from 0.94 with a satisfying pop
			gsap.fromTo(
				".about-cta-inner",
				{ opacity: 0, y: 40, scale: 0.94 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "back.out(1.3)", scrollTrigger: { trigger: ".about-cta", start: "top 80%" } },
			);

			// ── CTA magnetic hover (NEW) — card gently follows cursor ────────────
			const ctaCard = document.querySelector<HTMLElement>(".about-cta-inner");
			if (ctaCard) {
				const onCtaMove = (e: MouseEvent) => {
					const r = ctaCard.getBoundingClientRect();
					const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
					const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
					gsap.to(ctaCard, { x: dx * 16, y: dy * 9, duration: 0.5, ease: "power2.out" });
				};
				const onCtaLeave = () => {
					gsap.to(ctaCard, { x: 0, y: 0, duration: 1.1, ease: "elastic.out(1, 0.4)" });
				};
				ctaCard.addEventListener("mousemove", onCtaMove);
				ctaCard.addEventListener("mouseleave", onCtaLeave);
				listeners.push(() => {
					ctaCard.removeEventListener("mousemove", onCtaMove);
					ctaCard.removeEventListener("mouseleave", onCtaLeave);
				});
			}
		});

		ScrollTrigger.refresh();

		return () => {
			ctx.revert();
			listeners.forEach((fn) => fn());
		};
	}, []);

	return null;
}
