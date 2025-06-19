"use client";

import { Box, Button, Typography } from "@mui/material";
import BackgroundAccent from "./BackgroundAccent.component";
import { LoginTextField } from "./LoginTextField.component";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";

export default function LoginPage() {
	const form = useFormik({
		initialValues: {
			user: "",
			password: "",
		},
		validate: (values) => {
			const errors: { user?: string; password?: string } = {};
			if (!values.user) {
				errors.user = "user is required";
			}
			if (!values.password) {
				errors.password = "Password is required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			const result = await signIn("credentials", {
				...values,
				callbackUrl: "/config/tech_skills",
			});
			console.log("Login result:", result);
		},
	});

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
				<LoginTextField
					label="user"
					variant="standard"
					placeholder="user"
					{...form.getFieldProps("user")}
				/>
				{form.touched.user && form.errors.user && (
					<Typography color="error" fontSize="12px">
						{form.errors.user}
					</Typography>
				)}
				<LoginTextField
					label="password"
					variant="standard"
					placeholder="password"
					{...form.getFieldProps("password")}
				/>
				{form.touched.password && form.errors.password && (
					<Typography color="error" fontSize="12px">
						{form.errors.password}
					</Typography>
				)}
				<Button
					variant="contained"
					color="primary"
					onClick={() => form.handleSubmit()}
				>
					Login
				</Button>
			</Box>
			<BackgroundAccent />
		</Box>
	);
}
