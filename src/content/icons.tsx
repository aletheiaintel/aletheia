import {
	BarChart2,
	Compass,
	Crosshair,
	FlaskConical,
	Globe,
	Layers,
	Lightbulb,
	LineChart,
	Megaphone,
	Rocket,
	Search,
	ShieldCheck,
	Sparkles,
	Target,
	Users,
	type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "./theme";

const ICONS: Record<ServiceIconName, LucideIcon> = {
	BarChart2,
	Compass,
	Crosshair,
	FlaskConical,
	Globe,
	Layers,
	Lightbulb,
	LineChart,
	Megaphone,
	Rocket,
	Search,
	ShieldCheck,
	Sparkles,
	Target,
	Users,
};

export function serviceIcon(name: string | undefined | null): LucideIcon {
	return ICONS[name as ServiceIconName] ?? FlaskConical;
}
