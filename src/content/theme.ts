// Brand colours the client can pick in the Studio. Each key maps to the accent
// plus the soft tints the existing cards and tags already use.
export const PALETTE = {
	gold: { title: "Gold", accent: "#C9981A", soft: "#FFF8E6", icon: "#FFF3CC" },
	green: { title: "Green", accent: "#1A7A4C", soft: "#E8F5EE", icon: "#E8F5EE" },
	blue: { title: "Blue", accent: "#0284C7", soft: "#E0F2FE", icon: "#E0F2FE" },
	red: { title: "Red", accent: "#E5484D", soft: "#FFECEC", icon: "#FFECEC" },
} as const;

export type PaletteKey = keyof typeof PALETTE;

export const PALETTE_OPTIONS = Object.entries(PALETTE).map(([value, c]) => ({
	title: c.title,
	value,
}));

export function colour(key: string | undefined | null) {
	return PALETTE[(key as PaletteKey) ?? "gold"] ?? PALETTE.gold;
}

// Icons offered for service cards (lucide-react names).
export const SERVICE_ICONS = [
	"FlaskConical",
	"Crosshair",
	"BarChart2",
	"Rocket",
	"Megaphone",
	"Target",
	"Compass",
	"Lightbulb",
	"LineChart",
	"Users",
	"Search",
	"Sparkles",
	"Layers",
	"Globe",
	"ShieldCheck",
] as const;

export type ServiceIconName = (typeof SERVICE_ICONS)[number];
