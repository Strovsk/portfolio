import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import App from "@src/App";
import { TechSkillFactory } from "@src/factories";
import refreshDatabaseHelper from "@tests/helpers/refresh_database.helper";
import httpStatus from "http-status-codes";
import { TechSkillDto } from "@src/dto";
import type { TechSkillModel } from "@src/models";
import CreateJWTTokenService from "@src/services/Auth/CreateJWTToken.service";
import { beforeEach } from "node:test";

describe("TechSkill routes", () => {
	beforeEach(() => {
		process.env.USER = "admin";
		process.env.PASSWORD = "admin";
		process.env.SECRET = "secret-key";
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
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`)
			.send(techSkillWithoutId);

		expect(response.status).toBe(httpStatus.CREATED);
	});

	it("should fail invalid techskill creation", async () => {
		const app = new App();

		const response = await request(app.express).post("/techskill").send({});

		expect(response.status).toBe(400);
	});

	it("should fail when trying to create an techskill wich name already exists", async () => {
		const app = new App();
		const techSkillDto = new TechSkillDto();

		const factory = new TechSkillFactory();
		const createdTechSkill = await factory.create();
		const techSkill = techSkillDto.toEntityModel(createdTechSkill);
		const { id, ...techSkillWithoutId } = techSkill;
		techSkillWithoutId.startDate = (
			techSkillWithoutId.startDate as Date
		).toISOString();
		techSkillWithoutId.endDate = (
			techSkillWithoutId.endDate as Date
		).toISOString();

		await request(app.express)
			.post("/techskill")
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`)
			.send(techSkillWithoutId);

		const response = await request(app.express)
			.post("/techskill")
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`)
			.send(techSkillWithoutId);

		expect(response.status).toBe(httpStatus.CONFLICT);
	});

	it("should update a techskill", async () => {
		const app = new App();
		const factory = new TechSkillFactory();
		const techSkill = await factory.create();

		const updateBody: Partial<TechSkillModel> = {
			name: "Updated Name",
		};

		const response = await request(app.express)
			.put(`/techskill/${techSkill.id}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`)
			.send(updateBody);

		expect(response.status).toBe(httpStatus.OK);
	});

	it("should fail when Trying to update a techskill which name is already registered", async () => {
		const app = new App();

		const factory = new TechSkillFactory();
		const techSkillA = await factory.create({ name: "TechSkill" });
		const techSkillB = await factory.create();

		const updateBody: Partial<TechSkillModel> = {
			name: techSkillA.name,
		};

		const response = await request(app.express)
			.put(`/techskill/${techSkillB.id}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`)
			.send(updateBody);

		expect(response.status).toBe(httpStatus.CONFLICT);
	});

	it("should handle non-existent techskill update", async () => {
		const app = new App();
		const nonExistentId = "non-existent-id";
		const updateBody: Partial<TechSkillModel> = {
			name: "New Name",
		};

		const response = await request(app.express)
			.put(`/techskill/${nonExistentId}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`)
			.send(updateBody);

		expect(response.status).toBe(httpStatus.NOT_FOUND);
	});

	it("should read a techskill", async () => {
		const app = new App();
		const factory = new TechSkillFactory();
		const techSkill = await factory.create();

		const response = await request(app.express)
			.get(`/techskill/${techSkill.id}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.OK);
	});

	it("should handle non-existent techskill reading", async () => {
		const app = new App();
		const nonExistentId = "non-existent-id";

		const response = await request(app.express)
			.get(`/techskill/${nonExistentId}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.NOT_FOUND);
	});

	it("should delete a techskill", async () => {
		const app = new App();
		const factory = new TechSkillFactory();
		const techSkill = await factory.create();

		const response = await request(app.express)
			.delete(`/techskill/${techSkill.id}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.NO_CONTENT);
	});

	it("should handle non-existent techskill deletion", async () => {
		const app = new App();
		const nonExistentId = "non-existent-id";

		const response = await request(app.express)
			.delete(`/techskill/${nonExistentId}`)
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.NOT_FOUND);
	});

	it("should list all techskills", async () => {
		await refreshDatabaseHelper();
		const app = new App();

		const factory = new TechSkillFactory();

		await Promise.all(
			Array.from({ length: 5 }).map(async () => {
				await factory.create();
			}),
		);

		const response = await request(app.express)
			.get("/techskill")
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.OK);
		expect(response.body.length).toBe(5);
	});

	it("should list all techskills with filter", async () => {
		await refreshDatabaseHelper();

		const app = new App();
		const factory = new TechSkillFactory();
		await factory.create({ name: "TechSkill 1" });

		await Promise.all(
			Array.from({ length: 5 }).map(async () => {
				await factory.create();
			}),
		);

		const response = await request(app.express)
			.get("/techskill?name=TechSkill 1")
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.OK);
		expect(response.body.length).toBe(1);
		expect(response.body[0].name).toBe("TechSkill 1");
	});

	it("should paginate techskills", async () => {
		await refreshDatabaseHelper();

		const app = new App();
		const factory = new TechSkillFactory();

		await Promise.all(
			Array.from({ length: 5 }).map(async (_, index) => {
				await factory.create({ name: `TechSkill ${index}` });
			}),
		);

		const response = await request(app.express)
			.get("/techskill?page=2&itemsPerPage=2")
			.set("Authorization", `Bearer ${CreateJWTTokenService("admin")}`);

		expect(response.status).toBe(httpStatus.OK);
		expect(response.body.length).toBe(2);
		expect(response.body[0].name).toBe("TechSkill 2");
		expect(response.body[1].name).toBe("TechSkill 3");
	});
});
