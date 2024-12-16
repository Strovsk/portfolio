"use client";

import { Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import styles from "./IamThiago.module.css";
import theme from "@/providers/theme";

export default function IamThiago() {
	const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

	useEffect(() => {
		const svgContainer = document.querySelector(
			"#iam-thiago-svg-container",
		) as HTMLObjectElement;
		const svg = svgContainer?.contentDocument?.querySelector("svg");
		svg?.classList.add("active");

		if (isDownSm) {
			svg?.setAttribute("width", "250");
		}
	});

	return (
		<object
			data={"/iamthiago.svg"}
			type="image/svg+xml"
			id="iam-thiago-svg-container"
			className={styles.iamThiagoSection}
			data-testid="svg-container"
		>
			<Typography variant="h1" color="primary">
				Sou o Thiago
			</Typography>
		</object>
	);
}
