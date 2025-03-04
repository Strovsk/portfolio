import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import App from "@src/App";
import httpStatus from "http-status-codes";

describe("Login routes", () => {
	it("should login", async () => {
		const app = new App();
		const currentEnv = process.env;

		const testUser = "admin";
		const testPassword = "admin";

		process.env = {
			...currentEnv,
			USER: testUser,
			PASSWORD: testPassword,
		};

		const response = await request(app.express)
			.post("/login")
			.send({ user: testUser, password: testPassword });

		expect(response.status).toBe(httpStatus.OK);
		expect(response.body).toHaveProperty("token");

		process.env = currentEnv;
	});

	it("should not login with invalid user", async () => {
		const app = new App();
		const currentEnv = process.env;

		const testUser = "admin";
		const testPassword = "admin";

		process.env = {
			...currentEnv,
			USER: testUser,
			PASSWORD: testPassword,
		};

		const response = await request(app.express)
			.post("/login")
			.send({ user: testUser, password: "invalidPassword" });

		expect(response.status).toBe(httpStatus.UNAUTHORIZED);
		expect(response.body).not.toHaveProperty("token");

		process.env = currentEnv;
	});

	it("should not login with invalid password", async () => {
		const app = new App();
		const currentEnv = process.env;

		const testUser = "admin";
		const testPassword = "admin";

		process.env = {
			...currentEnv,
			USER: testUser,
			PASSWORD: testPassword,
		};

		const response = await request(app.express)
			.post("/login")
			.send({ user: "invalidUser", password: testPassword });

		expect(response.status).toBe(httpStatus.UNAUTHORIZED);
		expect(response.body).not.toHaveProperty("token");

		process.env = currentEnv;
	});
});
