import Config from "@src/config/Config";
import * as crypto from "node:crypto";

export default function CheckCredentialsService(
	user: string,
	password: string,
): boolean {
	const config = new Config();

	const defaultUser = config.env.user;
	const defaultPassword = config.env.password;

	try {
		const isValidUser = crypto.timingSafeEqual(
			Buffer.from(user),
			Buffer.from(defaultUser),
		);

		const isValidPassword = crypto.timingSafeEqual(
			Buffer.from(password),
			Buffer.from(defaultPassword),
		);

		const isValidCredentials = isValidUser && isValidPassword;

		return isValidCredentials;
	} catch (error) {
		return false;
	}
}
