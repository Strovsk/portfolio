import { Box } from "@mui/material";

interface WaveProps {
	valley: number;
	color: string;
	height: number;
	stroke: number;
	position: { x: number; y: number };
}

export default function Wave(props: WaveProps) {
	const square = props.height * Math.sqrt(2) - props.height;
	return (
		<Box
			display="flex"
			flexDirection="row"
			flexWrap="nowrap"
			gap={`${square}px`}
			sx={{
				position: "absolute",
				left: `${props.position.x}px`,
				top: `${props.position.y}px`,
			}}
		>
			{Array.from({ length: props.valley }, (_, index) => (
				<Box
					key={`wave-${index}-${Math.random()}`}
					sx={{
						width: `${props.height}px`,
						height: `${props.height}px`,
						border: `${props.stroke}px solid ${props.color}`,
						borderTop: "none",
						borderLeft: "none",
						margin: 0,
						transform: "rotate(45deg)",
					}}
				/>
			))}
		</Box>
	);
}
