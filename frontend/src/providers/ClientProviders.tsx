import type React from "react";
import { ReactQueryClientProvider } from "./ReactQueryClient";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ClientThemeProvider } from "./ClientThemeProvider";

export const ClientProviders = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<AppRouterCacheProvider>
			<ReactQueryClientProvider>
				<ClientThemeProvider>{children}</ClientThemeProvider>
			</ReactQueryClientProvider>
		</AppRouterCacheProvider>
	);
};
