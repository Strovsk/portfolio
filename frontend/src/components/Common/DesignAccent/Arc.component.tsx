import { Box } from "@mui/material";

interface ArcProps {
	size: number;
	stroke: number;
	color: string;
	position: { x: number; y: number };
}

export default function Arc(props: ArcProps) {
	return (
		<Box
			sx={{
				position: "absolute",
				left: props.position.x,
				top: props.position.y,
				width: `${props.size}px`,
				height: `${props.size}px`,
				borderTopLeftRadius: `${props.size}px`,
				borderTopRightRadius: `${props.size}px`,
				borderBottomLeftRadius: `${props.size}px`,
				border: `${props.stroke}px solid ${props.color}`,
				borderBottom: "none",
				borderRight: "none",
			}}
		/>
	);
}
