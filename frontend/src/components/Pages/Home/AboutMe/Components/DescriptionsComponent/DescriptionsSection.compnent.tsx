import { Collapse, Typography, Zoom } from "@mui/material";
import React from "react";

export interface DescriptionSectionProps {
	title: string;
	content: React.ReactNode;
	id: string;
	isExpanded: boolean;
	onClick: (id: string) => void;
}

const DescriptionsSection = React.memo((props: DescriptionSectionProps) => {
	return (
		<>
			<Typography
				variant="h5"
				sx={{ cursor: "pointer" }}
				onClick={() => props.onClick(props.id)}
			>
				{props.title}
			</Typography>
			<Collapse in={props.isExpanded}>{props.content}</Collapse>
			<Zoom in={!props.isExpanded}>
				<Typography
					variant="h5"
					sx={{ cursor: "pointer" }}
					onClick={() => props.onClick(props.id)}
				>
					...
				</Typography>
			</Zoom>
		</>
	);
});

export default DescriptionsSection;
