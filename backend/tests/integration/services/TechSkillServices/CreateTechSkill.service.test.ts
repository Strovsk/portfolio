import { CreateTechSkillService } from "@src/services/TechSkillServices";
import { describe, it, expect, beforeEach } from "@jest/globals";
import refreshDatabaseHelper from "@tests/helpers/refresh_database.helper";
import { TechSkillFactory } from "@src/factories";

describe("CreateTechSkillService", () => {
	beforeEach(() => {
		refreshDatabaseHelper();
	});

	it("should create tech skill when all fields are provided", async () => {
		const factory = new TechSkillFactory();
		const techSkill = factory.make();
		const { id: techSkillId, ...techSkillWithoutId } = techSkill;

		const result = await CreateTechSkillService(techSkillWithoutId);

		expect(result).toHaveProperty("id");
		const { id: resultId, ...resultWithoutId } = result;

		expect(resultWithoutId).toEqual(resultWithoutId);
	});
});
