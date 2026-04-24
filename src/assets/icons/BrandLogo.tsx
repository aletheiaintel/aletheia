const BrandLogo = () => {
	return (
		<svg
			width="34"
			height="34"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="16" cy="16" r="14" stroke="#1B6CA8" strokeWidth="1" />
			<circle cx="16" cy="16" r="8" stroke="#1B6CA8" strokeWidth="0.75" />
			<polygon points="16,9 19,16 16,23 13,16" fill="#C9981A" />
			<line
				x1="2"
				y1="16"
				x2="8"
				y2="16"
				stroke="#C9981A"
				strokeWidth="1"
			/>
			<line
				x1="24"
				y1="16"
				x2="30"
				y2="16"
				stroke="#1B6CA8"
				strokeWidth="0.75"
				opacity="0.6"
			/>
			<line
				x1="16"
				y1="2"
				x2="16"
				y2="8"
				stroke="#C9981A"
				strokeWidth="1"
			/>
			<line
				x1="16"
				y1="24"
				x2="16"
				y2="30"
				stroke="#1B6CA8"
				strokeWidth="0.75"
				opacity="0.6"
			/>
		</svg>
	);
};

export default BrandLogo;
