"use client";

import { Typography } from "@mui/material";
import { useEffect } from "react";
import styles from "./IamThiago.module.css";

export default function IamThiago() {
	useEffect(() => {
		const svgContainer = document.querySelector(
			"#iam-thiago-svg-container",
		) as HTMLObjectElement;
		const svg = svgContainer?.contentDocument?.querySelector("svg");
		svg?.classList.add("active");
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
