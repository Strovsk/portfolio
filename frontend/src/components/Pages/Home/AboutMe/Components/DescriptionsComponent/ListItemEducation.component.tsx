import { Box, ListItem, Tooltip, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import type { LengthOfStayItem } from "../../AboutMe.consts";
import React from "react";

export interface ListItemEducationProps {
	data: LengthOfStayItem;
}

export default function ListItemEducation(props: ListItemEducationProps) {
	const statusMap = {
		unfinished: "Incompleto",
		doing: "Em andamento",
		done: "Concluído",
	};

	return (
		<ListItem sx={{ display: "flex", columnGap: 2 }}>
			<Tooltip title={statusMap[props.data.status ?? "doing"]}>
				<AccountBalanceIcon
					color={
						["done", "doing"].includes(props.data.status ?? "doing")
							? "success"
							: "warning"
					}
				/>
			</Tooltip>
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
