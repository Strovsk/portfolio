"use client";

import { Typography, useMediaQuery } from "@mui/material";
import styles from "./HandBackground.module.css";
import theme from "@/providers/theme";

export default function HandBackground() {
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
		matches && (
			<object
				data={"/background.svg"}
				type="image/svg+xml"
				id="iam-thiago-svg-container"
				data-testid="svg-container-background"
				className={styles.HandBackground}
			>
				<Typography variant="h1" color="primary">
					Tech
				</Typography>
			</object>
		)
	);
}
