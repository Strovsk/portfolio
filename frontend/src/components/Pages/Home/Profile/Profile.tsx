import { Typography, Box, useMediaQuery } from "@mui/material";
import styles from "./Profile.module.css";
import Image from "next/image";
import theme from "@/providers/theme";
import TechSkillIcon from "../TechSkillIcon/TechSkillIcon.component";
import { useListTechSkills } from "@/services/TechSkill/TechSkill.query";

export default function Profile() {
	const containerSize = 600;
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const techSkills = useListTechSkills();

	return (
		<Box
			key="profile"
			sx={{
				position: "relative",
				width: containerSize,
				height: containerSize,
				margin: "3em",

				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				[theme.breakpoints.down("sm")]: {
					width: "100%",
					height: "100%",
					margin: 0,
					transform: "scale(.7)",
				},
			}}
		>
			{techSkills.isFetched &&
				techSkills.data?.map(
					(techSkill, index) =>
						index % 2 === 0 && (
							<TechSkillIcon
								key={techSkill.id}
								name={techSkill.name}
								primaryColor={techSkill.primaryColor}
								secondaryColor={techSkill.secondaryColor}
								layer={1}
							/>
						),
				)}
			<Box
				sx={{
					position: "absolute",
					borderRadius: "50%",
					// border: "1px solid red",
					width: 700,
					height: 700,
					background:
						"radial-gradient(circle, rgba(238, 238, 238, .5) 0%, transparent 100%)",
					zIndex: 3,
				}}
			/>
			{techSkills.isFetched &&
				techSkills.data?.map(
					(techSkill, index) =>
						index % 2 === 1 && (
							<TechSkillIcon
								key={techSkill.id}
								name={techSkill.name}
								primaryColor={techSkill.primaryColor}
								secondaryColor={techSkill.secondaryColor}
								layer={2}
							/>
						),
				)}
			<object
				data={"/tech_card_back.svg"}
				type="image/svg+xml"
				id="tech-skill-card-accent"
				data-testid="svg-container"
				className={
					matches ? styles.ProfileBackgroundSX : styles.ProfileBackground
				}
				width={containerSize}
				height={containerSize}
			>
				<Typography variant="h1" color="primary">
					Me
				</Typography>
			</object>
			<Image
				className={matches ? styles.ProfileImageSX : styles.ProfileImage}
				src={"/me.png"}
				width={containerSize / 3}
				height={containerSize / 3}
				alt="an image of me"
				style={{ zIndex: 5 }}
			/>
		</Box>
	);
}
