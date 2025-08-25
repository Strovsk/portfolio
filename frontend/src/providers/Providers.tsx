import type React from "react";
import { ReactQueryClientProvider } from "./ReactQueryClient";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
};
