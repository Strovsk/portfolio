"use client";

import { Menu, WellcomeMessage, Profile } from "@/components";
import { HandBackground } from "@/components";
import Grid from "@mui/material/Grid2";
import theme from "@/providers/theme";
import { useMediaQuery } from "@mui/material";
import React from "react";
import AboutMe from "@/components/Pages/Home/AboutMe/AboutMe.component";

export default function Home() {
	const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));

	const [openAboutMe, setOpenAboutMe] = React.useState(false);

	return (
		<main>
			<Menu openAboutMe={openAboutMe} setOpenAboutMe={setOpenAboutMe} />
			<Grid
				sx={{ width: "100vw", height: "100vh" }}
				container
				alignItems={"flex-start"}
				justifyContent={isDownLg ? "center" : "space-between"}
			>
				<WellcomeMessage />
				<Profile />
				<HandBackground />
			</Grid>
			<AboutMe open={openAboutMe} setOpen={setOpenAboutMe} />
		</main>
	);
}
