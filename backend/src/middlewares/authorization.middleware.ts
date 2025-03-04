import AuthorizateService from "@src/services/Auth/Authorizate.service";
import type { NextFunction, Response, Request } from "express";

export default function AuthorizationMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { authorization: authToken } = req.cookies;

	const { isAuthorized, message, status } = AuthorizateService(authToken);

	if (!isAuthorized) {
		res.status(status).json({ message });
		return;
	}

	next();
	return;
}
