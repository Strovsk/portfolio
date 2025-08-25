import TechSkillList from "@/components/Pages/TechSkillsConfig/TechSkillList";
import { Box, Typography } from "@mui/material";
import React from "react";

export default async function TechSkillsPage() {
	return (
		<Box
			data-name="tech-skills-container"
			sx={{
				paddingInline: "40px",
				paddingBlock: "100px",
				display: "flex",
				rowGap: "70px",
				flexFlow: "column nowrap",
			}}
		>
			<Typography variant="h2" fontWeight={300} color="#000">
				Tech Skills
			</Typography>

			<TechSkillList />
		</Box>
	);
}
