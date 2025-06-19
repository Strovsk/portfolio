"use client";

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const LoginTextField = styled(TextField)({
	"& .MuiFormLabel-root": {
		color: "#0286ff",
	},
	"& .MuiFormLabel-root.Mui-focused": {
		color: "#0286ff",
	},
	"& .MuiInputBase-root": {
		color: "white",
		"&:before": {
			borderBottom: "1px solid #0286ffDD",
		},
		"&:hover:not(.Mui-disabled):before": {
			borderBottom: "1px solid #0286ff",
		},
		"&:after": {
			borderBottom: "2px solid #0286ff",
		},
		"&.Mui-focused": {
			color: "#0286ff",
		},
	},
});
