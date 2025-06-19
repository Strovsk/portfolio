import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import AuthorizateService from "@src/services/Auth/Authorizate.service";
import CreateJWTTokenService from "@src/services/Auth/CreateJWTToken.service";

describe("Authorizate service", () => {
	beforeEach(() => {
		jest.resetAllMocks();

		process.env.SECRET = "secret-key";
	});

	it("should return not authorized", () => {
		const { isAuthorized, message, status } = AuthorizateService(undefined);

		expect(isAuthorized).toBe(false);
		expect(message).toBe("Authorization not supplied");
		expect(status).toBe(400);
	});

	it("should return valid token", () => {
		const expectedMessage = "In Vino Veritas";
		const token = CreateJWTTokenService(expectedMessage);

		const { isAuthorized, message, status } = AuthorizateService(token);

		expect(isAuthorized).toBe(true);
		expect(message).toBe(expectedMessage);
		expect(status).toBe(200);
	});

	it("should return unauthorized for expired token", () => {
		const token = CreateJWTTokenService("Expired Message");

		jest.useFakeTimers();
		const oneHour = 1000 * 60 * 60;
		jest.advanceTimersByTime(oneHour);

		const { isAuthorized, message, status } = AuthorizateService(token);

		expect(isAuthorized).toBe(false);
		expect(message).toBe("Token expired");
		expect(status).toBe(401);

		jest.useRealTimers();
	});

	it("should return unauthorized for invalid token", () => {
		const token = "invalid-token";

		const { isAuthorized, message, status } = AuthorizateService(token);

		expect(isAuthorized).toBe(false);
		expect(message).toBe("Invalid token");
		expect(status).toBe(401);
	});
});
