import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import type React from "react";

export const ClientThemeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
