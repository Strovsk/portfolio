"use client";

import { Box, Button, Dialog, Grid2, IconButton } from "@mui/material";
import TechSkillCard from "./TechSkillCard/TechSkillCard";
import { useListTechSkills } from "@/services/TechSkill/TechSkill.query";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export const TechSkillList = () => {
	const techLists = useListTechSkills();
	const [isCreating, setIsCreating] = React.useState(false);

	return (
		<Box>
			<Box
				display={"flex"}
				flexDirection={"row"}
				gap={"16px"}
				justifyContent={"flex-end"}
				width={"100%"}
				mb={2}
			>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						setIsCreating(true);
					}}
				>
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
					height: "60vh",
				}}
			>
				{techLists.isLoading && <div>Loading...</div>}
				{techLists.isFetched &&
					techLists.data?.map((tech) => (
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
							onDelete={(success) => {
								if (success) techLists.refetch();
							}}
						/>
					))}
			</Grid2>

			<Dialog open={isCreating}>
				<Box pb={5} px={3} pt={1}>
					<Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
						<IconButton onClick={() => setIsCreating(false)}>
							<CloseIcon />
						</IconButton>
					</Box>
					<TechSkillCard
						name={"Test Tech"}
						primaryColor={"#685ce9"}
						secondaryColor={"#000000"}
						link={"https://something.com"}
						description={"Test Description"}
						startDate={new Date()}
						endDate={new Date()}
						onCreate={(success) => {
							if (success) techLists.refetch();
							setIsCreating(false);
						}}
						mode="create"
					/>
				</Box>
			</Dialog>
		</Box>
	);
};

export default TechSkillList;
