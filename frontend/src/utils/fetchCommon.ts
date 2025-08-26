import { redirect } from "next/navigation";

export const fetchCommon = async (url: string, options: RequestInit = {}) => {
	const apiUrl = process.env.API_URL;

	if (!apiUrl) {
		throw new Error("API URL is not defined in environment variables");
	}

	const finalUrl = `${apiUrl}${url}`;
	const response = await fetch(finalUrl, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...options.headers,
		},
	});

	if ([401, 403].includes(response.status)) {
		console.error("Unauthorized access - JWT token may be invalid or expired");
		return redirect("/login");
	}

	if (!response.ok) {
		const textError = await response.text();
		console.error("Failed to fetch auth:", textError);
		throw new Error(
			`Request failed with status ${response.status} because ${textError}`,
		);
	}

	return response;
};
