import { Box } from "@mui/material";

interface CruxProps {
	size: number;
	stroke: number;
	color: string;
	position: { x: number; y: number };
}

export default function Crux(props: CruxProps) {
	return (
		<Box
			sx={{
				position: "absolute",
				display: "grid",
				placeItems: "center",
				left: `${props.position.x}px`,
				top: `${props.position.y}px`,
			}}
		>
			<Box
				sx={{
					width: props.stroke,
					height: props.size,
					backgroundColor: props.color,
					transform: "rotate(45deg)",
					position: "absolute",
				}}
			/>
			<Box
				sx={{
					width: props.stroke,
					height: props.size,
					backgroundColor: props.color,
					transform: "rotate(-45deg)",
					position: "absolute",
				}}
			/>
		</Box>
	);
}
