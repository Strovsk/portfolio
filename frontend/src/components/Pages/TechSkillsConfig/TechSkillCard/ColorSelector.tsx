import { Box, Typography } from "@mui/material";

interface ColorSelectorProps {
	label: string;
	color: string;
}

export const ColorSelector = (props: ColorSelectorProps) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
			gap="5px"
		>
			<Typography color="primary" variant="caption">
				{props.label}
			</Typography>
			<Box
				display="flex"
				flexDirection="row"
				alignItems="center"
				columnGap="10px"
			>
				<Box
					width={20}
					height={20}
					borderRadius="50%"
					bgcolor={props.color}
					border="1px solid #ccc"
					boxShadow={"0 0 3px rgba(0, 0, 0, .23)"}
				/>
				<Typography sx={{ color: "#123123" }}>{props.color}</Typography>
			</Box>
		</Box>
	);
};
