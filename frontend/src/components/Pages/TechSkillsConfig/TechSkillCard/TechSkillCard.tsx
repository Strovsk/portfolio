"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { ColorSelector } from "./ColorSelector";
import { convertDateToString } from "./TechSkillCard.consts";

interface TechSkillCardProps {
	name: string;
	primaryColor: string;
	secondaryColor: string;
	link: string;
	description?: string;
	startDate?: Date | string;
	endDate?: Date | string;
}

const TechSkillCard = (props: TechSkillCardProps) => {
	const width = 300;

	return (
		<Box
			data-name="tech-skill-card"
			width={width}
			height={(width * 3) / 4}
			boxShadow={"0 4px 10px rgba(27, 27, 27, 0.29)"}
			borderRadius={"16px"}
			paddingBlock={"15px"}
			paddingInline={"30px"}
			display={"flex"}
			flexDirection={"column"}
			rowGap={"1rem"}
		>
			<Box
				display={"flex"}
				alignItems={"center"}
				gap={"7px"}
				data-name="tech-skill-card-header"
			>
				<Box
					data-name="tech-skill-icon"
					width={"40px"}
					height={"40px"}
					borderRadius={"10px"}
					bgcolor={props.primaryColor}
					sx={{
						backgroundImage: `url(https://cdn.simpleicons.org/${props.name}/${props.secondaryColor})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "60%",
					}}
				/>

				<Box width={"70%"} data-name="tech-skill-text">
					<Typography>{props.name}</Typography>
					<Typography
						variant="caption"
						color="secondary"
						sx={{
							width: "100%",
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "block",
							lineClamp: 1,
						}}
						title={props.name}
					>
						{props.link}
					</Typography>
				</Box>
			</Box>

			<Box data-name="tech-skill-card-description">
				<Typography color="primary" fontSize={"15px"} fontWeight={300}>
					{props.description || "No description available."}
				</Typography>
			</Box>

			<Box data-name="tech-skill-card-date">
				<Typography variant="caption" fontWeight={300}>
					{`${convertDateToString(props.startDate)} to ${convertDateToString(props.endDate)}`}
				</Typography>
			</Box>

			<Box data-name="tech-skill-card-footer">
				<Box
					display="flex"
					flexDirection="row"
					alignItems="center"
					flexWrap="nowrap"
					justifyContent="space-between"
					width="100%"
				>
					<ColorSelector label="primary" color={props.primaryColor} />
					<ColorSelector label="secondary" color={props.secondaryColor} />
				</Box>
			</Box>
		</Box>
	);
};

export default TechSkillCard;
