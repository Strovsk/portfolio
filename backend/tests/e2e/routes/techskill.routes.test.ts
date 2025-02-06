import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import App from "@src/App";
import { TechSkillFactory } from "@src/factories";
import { beforeEach } from "node:test";
import refreshDatabaseHelper from "@tests/helpers/refresh_database.helper";
import httpStatus from "http-status-codes";

describe("TechSkill routes", () => {
	beforeEach(() => {
		refreshDatabaseHelper();
	});

	it("should create a new techskill", async () => {
		const app = new App();

		const factory = new TechSkillFactory();
		const techSkill = factory.make();
		const { id, ...techSkillWithoutId } = techSkill;
		techSkillWithoutId.startDate = (
			techSkillWithoutId.startDate as Date
		).toISOString();
		techSkillWithoutId.endDate = (
			techSkillWithoutId.endDate as Date
		).toISOString();

		const response = await request(app.express)
			.post("/techskill")
			.send(techSkillWithoutId);

		expect(response.status).toBe(httpStatus.CREATED);
	});

	it("should fail invalid techskill creation", async () => {
		const app = new App();

		const response = await request(app.express).post("/techskill").send({});

		expect(response.status).toBe(400);
	});

	it("should fail when trying to create an techskill with the same name", async () => {
		const app = new App();

		const factory = new TechSkillFactory();
		const techskill = await factory.create();
		const { id, ...techSkillWithoutId } = techskill;

		request(app.express)
			.post("/techskill")
			.send(techSkillWithoutId)
			.end((_err, res) => {
				expect(res.status).toBe(400);
				expect(res.body.message).toBe("TechSkill already exists");
			});
	});
});
