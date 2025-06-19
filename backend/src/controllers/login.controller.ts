import CheckCredentialsService from "@src/services/Auth/CheckCredentials.service";
import CreateJWTTokenService from "@src/services/Auth/CreateJWTToken.service";
import type { Request, Response } from "express";
import httpStatus from "http-status-codes";

export default class LoginController {
	public async login(req: Request, res: Response) {
		const { user, password } = req.body;

		if (!user || !password) {
			res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid input" });
			return;
		}

		const isValidCredentials = CheckCredentialsService(user, password);

		if (!isValidCredentials) {
			res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid password" });
			return;
		}

		const token = CreateJWTTokenService(user);

		res.status(httpStatus.OK).json({ token });
		return;
	}
}
