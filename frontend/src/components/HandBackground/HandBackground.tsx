import { Typography } from "@mui/material";
import styles from "./HandBackground.module.css";

export default function HandBackground() {
	return (
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
	);
}
