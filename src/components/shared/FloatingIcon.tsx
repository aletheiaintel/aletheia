import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingIconProps = {
	icon: ReactNode;
	label: string;
	value: string;
	className?: string;
	delay?: number;
	iconBg?: string;
	valueColor?: string;
};

const FloatingIcon = ({
	icon,
	label,
	value,
	className,
	delay = 0,
	iconBg = "#F5F5F5",
	valueColor = "#121212",
}: FloatingIconProps) => (
	<motion.div
		initial={{ y: 0 }}
		animate={{ y: [-15, 15, -15] }}
		transition={{ duration: 6, repeat: Infinity, ease: "linear", delay }}
		className={cn(
			"absolute hidden lg:flex items-center gap-3 rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5",
			className,
		)}
	>
		<div
			className="flex h-8 w-8 items-center justify-center rounded-lg"
			style={{ background: iconBg }}
		>
			{icon}
		</div>

		<div className="leading-tight">
			<div className="text-[11px] text-[#8B7355] font-normal">
				{label}
			</div>
			<div
				className="text-[13px] font-semibold"
				style={{ color: valueColor }}
			>
				{value}
			</div>
		</div>
	</motion.div>
);

export default FloatingIcon;
