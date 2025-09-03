import { Box, List } from "@mui/material";
import type { LengthOfStayItem } from "../../AboutMe.consts";
import ListItemEducation from "./ListItemEducation.component";
import ListItemExperience from "./ListItemExperience.component";

interface ListContentProps {
	type: "education" | "experience";
	items: LengthOfStayItem[];
}

export default function ListContent(props: ListContentProps) {
	const itemsMap = {
		education: (data: LengthOfStayItem) => <ListItemEducation data={data} />,
		experience: (data: LengthOfStayItem) => <ListItemExperience data={data} />,
	};

	return (
		<Box>
			<List>{props.items.map((item) => itemsMap[props.type](item))}</List>
		</Box>
	);
}
