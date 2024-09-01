import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import App from "@src/App";

describe("Test Route for health check", () => {
	it("Should return right json message", () => {
		const app = new App();
		request(app.express)
			.get("/healthcheck")
			.expect(200)
			.end((_err, res) => {
				expect(res.body).toEqual({ message: "any ok!" });
			});
	});
});
