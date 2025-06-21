"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-inter)",
	},
	palette: {
		primary: {
			main: "rgb(9, 23, 36)",
			contrastText: "rgb(255, 255, 255)",
		},
		secondary: {
			main: "rgb(94, 94, 94)",
			contrastText: "rgb(94, 94, 94)",
		},
		background: {
			default: "rgb(238, 238, 238)",
		},
		text: {
			primary: "rgb(27, 27, 27)",
			secondary: "rgb(94, 94, 94)",
		},
		action: {
			active: "rgb(9, 23, 36)",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1392,
			xl: 1920,
		},
	},
});

export default theme;
