import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				user: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, _req) {
				const apiUrl = process.env.API_URL;
				const finalUrl = `${apiUrl}/login`;
				const response = await fetch(finalUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(credentials),
				});

				if (!response.ok) {
					console.error("Failed to authenticate:", await response.text());
					return null;
				}

				const { token: jwtToken } = await response.json();

				if (!jwtToken) {
					console.error("No token received from API");
					return null;
				}

				cookies().set("jwt", jwtToken, {
					httpOnly: true,
				});

				return {
					id: credentials?.user ?? "unknown",
					name: credentials?.user ?? null,
				};
			},
		}),
	],
});

export { handler as GET, handler as POST };
