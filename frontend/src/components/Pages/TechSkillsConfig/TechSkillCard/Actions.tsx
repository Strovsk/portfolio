import { Box } from "@mui/material";
import type React from "react";

interface ActionsProps {
	children: React.ReactNode;
	isCreating: boolean;
	isExpanded: boolean;
}

export const Actions = (props: ActionsProps) => {
	if (props.isCreating) return;

	return (
		<Box
			display={"flex"}
			data-name="tech-skill-card-actions"
			flexDirection="row"
			alignItems="center"
			justifyContent={"space-around"}
			boxShadow={"0 4px 10px rgba(27, 27, 27, 0.29)"}
			position="absolute"
			bgcolor={"#eee"}
			top={-20}
			right={10}
			borderRadius={"10px"}
			sx={{ transition: "width 0.5s ease", width: props.isExpanded ? 160 : 40 }}
		>
			{props.children}
		</Box>
	);
};
