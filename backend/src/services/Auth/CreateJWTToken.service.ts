import Config from "@src/config/Config";
import * as jwt from "jsonwebtoken";

export default function CreateJWTTokenService(data: string): string {
	const config = new Config();

	const token = jwt.sign({ data }, config.env.secret, {
		expiresIn: 1200,
		algorithm: "HS256",
	});

	return token;
}
