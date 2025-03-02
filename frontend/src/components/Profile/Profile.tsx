import { Typography, Box, useMediaQuery } from "@mui/material";
import styles from "./Profile.module.css";
import Image from "next/image";
import theme from "@/providers/theme";
import TechSkillIcon from "../TechSkillIcon/TechSkillIcon.component";

export default function Profile() {
	const containerSize = 600;
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box
			key="profile"
			sx={{
				position: "relative",
				width: containerSize,
				height: containerSize,
				margin: "3em",
				[theme.breakpoints.down("sm")]: {
					width: "100%",
					height: "100%",
					margin: 0,
					transform: "scale(.7)",
				},
			}}
		>
			<TechSkillIcon name="PHP" primaryColor="#777BB4" secondaryColor="white" />
			<TechSkillIcon
				name="Node.js"
				primaryColor="#68A063"
				secondaryColor="white"
			/>
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
			/>
		</Box>
	);
}
