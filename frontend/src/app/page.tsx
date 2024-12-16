"use client";

import { Menu, WellcomeMessage, Profile } from "@/components";
import { HandBackground } from "@/components";
import Grid from "@mui/material/Grid2";
import theme from "@/providers/theme";
import { useMediaQuery } from "@mui/material";

export default function Home() {
	const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<main>
			<Menu />
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
		</main>
	);
}
