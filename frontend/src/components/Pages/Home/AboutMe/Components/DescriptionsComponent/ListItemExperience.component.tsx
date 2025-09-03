import { Box, ListItem, Typography } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import type { LengthOfStayItem } from "../../AboutMe.consts";

export interface ListItemExperienceProps {
	data: LengthOfStayItem;
}

export default function ListItemExperience(props: ListItemExperienceProps) {
	return (
		<ListItem sx={{ display: "flex", columnGap: 2, alignItems: "flex-start" }}>
			<Box>
				<Typography>{props.data.institution}</Typography>
				<Box
					sx={{
						display: "flex",
						columnGap: 2,
						alignItems: "center",
					}}
				>
					<IntegrationInstructionsIcon />
					<Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
						<Typography variant="caption" textAlign="justify">
							{props.data.startDate.getFullYear()}
						</Typography>
						<Box sx={{ height: "5px", width: "1px", bgcolor: "white" }} />
						<Typography variant="caption" textAlign="justify">
							{props.data.endDate ? props.data.endDate.getFullYear() : "Atual"}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Typography
				variant="caption"
				textAlign="justify"
				mt={0.5}
				whiteSpace={"pre-line"}
			>
				{props.data.description}
			</Typography>
		</ListItem>
	);
}
