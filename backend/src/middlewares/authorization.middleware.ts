import AuthorizateService from "@src/services/Auth/Authorizate.service";
import type { NextFunction, Response, Request } from "express";

export default function AuthorizationMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (!req.headers) {
		res.status(400).json({ message: "Authorization not supplied" });
		return;
	}

	const { authorization: authToken = undefined } = req.headers;

	const { isAuthorized, message, status } = AuthorizateService(authToken);

	if (!isAuthorized) {
		res.status(status).json({ message });
		return;
	}

	next();
	return;
}
