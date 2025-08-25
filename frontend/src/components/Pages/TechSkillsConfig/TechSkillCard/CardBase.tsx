import { Box } from "@mui/material";

interface CardBaseProps {
	children: React.ReactNode;
	width: number;
	isCreating: boolean;
}

export const CardBase = (props: CardBaseProps) => {
	return (
		<Box
			data-name="tech-skill-card"
			width={props.width}
			height={(props.width * 3) / 4}
			boxShadow={
				props.isCreating ? "none" : "0 4px 10px rgba(27, 27, 27, 0.29)"
			}
			borderRadius={"16px"}
			paddingBlock={"15px"}
			paddingInline={"30px"}
			display={"flex"}
			flexDirection={"column"}
			rowGap={"1rem"}
			position={"relative"}
		>
			{props.children}
		</Box>
	);
};
