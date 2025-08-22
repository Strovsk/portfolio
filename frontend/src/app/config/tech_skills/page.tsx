import TechSkillCard from "@/components/Pages/TechSkillsConfig/TechSkillCard/TechSkillCard";
import { listTechSkills } from "@/services/TechSkill/TechSkill.service";
import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";

export default async function TechSkillsPage() {
	const techLists = await listTechSkills();

	console.log("Tech Skills Page - techLists:", techLists);

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

			<Box
				display={"flex"}
				flexDirection={"row"}
				gap={"16px"}
				justifyContent={"flex-end"}
				width={"100%"}
			>
				<Button variant="contained" color="primary">
					Create
				</Button>
			</Box>

			<Grid2
				display={"flex"}
				container
				flexDirection={"row"}
				gap={"16px"}
				rowGap={"30px"}
				sx={{
					overflowY: "auto",
					padding: "8px",
					paddingTop: "25px",
					height: "100%",
				}}
			>
				{techLists.map((tech) => (
					<TechSkillCard
						id={tech.id}
						key={tech.id}
						name={tech.name}
						primaryColor={tech.primaryColor}
						secondaryColor={tech.secondaryColor}
						link={tech.link}
						description={tech.shortDescription}
						startDate={tech.startDate}
						endDate={tech.endDate}
					/>
				))}
			</Grid2>
		</Box>
	);
}
