import Config from "@src/config/Config";
import * as jwt from "jsonwebtoken";
import httpStatus from "http-status-codes";

export default function AuthorizateService(token: string | undefined): {
	isAuthorized: boolean;
	message: string;
	status: number;
} {
	if (!token) {
		return {
			isAuthorized: false,
			message: "Authorization not supplied",
			status: httpStatus.BAD_REQUEST,
		};
	}

	const filteredToken = token.replace(/[Bb]earer\s+/, "");

	const config = new Config();

	try {
		const data = jwt.verify(filteredToken, config.env.secret) as jwt.JwtPayload;
		return { isAuthorized: true, message: data.data, status: httpStatus.OK };
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return {
				isAuthorized: false,
				message: "Token expired",
				status: httpStatus.UNAUTHORIZED,
			};
		}

		return {
			isAuthorized: false,
			message: "Invalid token",
			status: httpStatus.UNAUTHORIZED,
		};
	}
}
