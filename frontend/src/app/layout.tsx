import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClientProviders } from "@/providers/ClientProviders";

const inter = Inter({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Thiago Santa Clara Pereira",
	description: "That's my portfolio. Thanks to see",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={inter.variable}>
			<body>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
