"use client";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import type React from "react";

export const ClientThemeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
