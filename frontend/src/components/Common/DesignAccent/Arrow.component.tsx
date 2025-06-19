import { Box } from "@mui/material";

interface WaveProps {
	numberOfArrows: number;
	color: string;
	size: number;
	stroke: number;
	gap?: number;
	position: { x: number; y: number };
}

export default function Arrow(props: WaveProps) {
	const defaultGap = props.gap
		? props.gap
		: ((props.size * Math.sqrt(2)) / 2) * -1;
	const firstGap = props.size * Math.sqrt(2) - props.size;

	return (
		<Box
			display="flex"
			flexDirection="row"
			flexWrap="nowrap"
			gap={`${firstGap}px`}
			sx={{
				position: "absolute",
				left: `${props.position.x}px`,
				top: `${props.position.y}px`,
			}}
		>
			{Array.from({ length: props.numberOfArrows }, (_, index) => (
				<Box
					key={`arrow-${index}-${Math.random()}`}
					sx={{
						width: `${props.size}px`,
						height: `${props.size}px`,
						border: `${props.stroke}px solid ${props.color}`,
						borderLeft: "none",
						borderBottom: "none",
						margin: 0,
						transform: "rotate(45deg)",
						marginLeft: `${defaultGap}px`,
					}}
				/>
			))}
		</Box>
	);
}
