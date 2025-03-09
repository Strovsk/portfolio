import { Box } from "@mui/material";

interface BallsProps {
	numberOfLines: number;
	numberOfColumns: number;
	color: string;
	size: number;
	gap: number;
	position: { x: number; y: number };
}

export default function Balls(props: BallsProps) {
	return (
		<Box
			sx={{
				position: "absolute",
				left: props.position.x,
				top: props.position.y,
			}}
			display="flex"
			flexDirection="column"
			alignItems="center"
			gap={`${props.gap}px`}
		>
			{Array.from({ length: props.numberOfLines }, (_, lineIndex) => (
				<Box
					key={`line-${lineIndex}-${Math.random()}`}
					display="flex"
					gap={`${props.gap}px`}
				>
					{Array.from({ length: props.numberOfColumns }, (_, columnIndex) => (
						<Box
							key={`ball-${lineIndex}-${columnIndex}-${Math.random()}`}
							sx={{
								width: props.size,
								height: props.size,
								borderRadius: "50%",
								backgroundColor: props.color,
								margin: 0,
							}}
						/>
					))}
				</Box>
			))}
		</Box>
	);
}
