import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import BackgroundAccent from "./BackgroundAccent.component";

export default function LoginPage() {
	return (
		<Box
			width="100vw"
			height="100vh"
			sx={{
				backgroundColor: "#091724",
				color: "#0286FF",
				display: "grid",
				placeItems: "center",
			}}
		>
			<Box
				sx={{
					backgroundImage: "url('/accent.svg')",
					backgroundSize: "90%",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					width: "500px",
					height: "500px",
					zIndex: 5,
				}}
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				rowGap="20px"
			>
				<Typography
					variant="h4"
					color="#0286ff"
					fontWeight={400}
					fontFamily="Inter"
					fontSize="27px"
				>
					Welcome
				</Typography>
				<TextField label="email" variant="standard" />
				<TextField label="password" type="password" variant="standard" />
				<Button variant="contained" color="primary">
					Login
				</Button>
			</Box>
			<BackgroundAccent />
		</Box>
	);
}
