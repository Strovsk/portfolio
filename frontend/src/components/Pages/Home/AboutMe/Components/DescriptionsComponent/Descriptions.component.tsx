import { Box } from "@mui/material";
import React from "react";
import { aboutMeData } from "../../AboutMe.consts";
import DescriptionsSection, {} from "./DescriptionsSection.compnent";
import SimpleTextContent from "./SimpleTextContent.component";
import ListContent from "./ListContent.component";

export const Descriptions = () => {
	const [expandedId, setExpandedId] = React.useState<string | null>("about-me");

	const handleExpand = React.useCallback((id: string) => {
		setExpandedId((prev) => (prev !== id ? id : prev));
	}, []);

	return (
		<Box display={"flex"} rowGap={1} flexDirection={"column"}>
			<DescriptionsSection
				id={"about-me"}
				title={"Sobre mim"}
				content={<SimpleTextContent content={aboutMeData.description} />}
				isExpanded={expandedId === "about-me"}
				onClick={handleExpand}
			/>

			<DescriptionsSection
				id={"education"}
				title={"Formação"}
				content={<ListContent type="education" items={aboutMeData.education} />}
				isExpanded={expandedId === "education"}
				onClick={handleExpand}
			/>

			<DescriptionsSection
				id={"experience"}
				title={"Experiência"}
				content={
					<ListContent type="experience" items={aboutMeData.experience} />
				}
				isExpanded={expandedId === "experience"}
				onClick={handleExpand}
			/>
		</Box>
	);
};
