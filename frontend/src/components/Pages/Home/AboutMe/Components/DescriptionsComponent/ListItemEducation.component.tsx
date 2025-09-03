import { Box, ListItem, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
	getStatusOfLengthOfStay,
	type LengthOfStayItem,
} from "../../AboutMe.consts";
import React from "react";

export interface ListItemEducationProps {
	data: LengthOfStayItem;
}

export default function ListItemEducation(props: ListItemEducationProps) {
	const status = getStatusOfLengthOfStay(
		props.data.startDate,
		props.data.endDate,
	);

	return (
		<ListItem sx={{ display: "flex", columnGap: 2 }}>
			<AccountBalanceIcon color={status === "done" ? "success" : "warning"} />
			<Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
				<Typography variant="caption" textAlign="justify">
					{props.data.startDate.getFullYear()}
				</Typography>
				<Box sx={{ height: "5px", width: "1px", bgcolor: "white" }} />
				<Typography variant="caption" textAlign="justify">
					{props.data.endDate ? props.data.endDate.getFullYear() : "Atual"}
				</Typography>
			</Box>
			<Box>
				<Typography variant="caption" textAlign="justify" fontWeight="bold">
					{props.data.position} ({props.data.institution})
				</Typography>
				<Typography
					variant="caption"
					textAlign="justify"
					whiteSpace={"pre-line"}
					ml={1}
				>
					{props.data.description}
				</Typography>
			</Box>
		</ListItem>
	);
}
