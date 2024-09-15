"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-roboto)",
	},
	palette: {
		primary: {
			main: "rgb(9, 23, 36)",
			contrastText: "rgba(255, 255, 255)",
		},
		background: {
			default: "rgb(238, 238, 238)",
		},
		text: {
			primary: "rgb(27, 27, 27)",
			secondary: "rgb(38, 38, 38)",
		},
		action: {
			active: "blue",
		},
	},
});

export default theme;
