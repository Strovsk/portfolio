import { CreateTechSkillService } from "@src/services/TechSkillServices";
import { describe, it, expect, beforeEach } from "@jest/globals";
import type { TechSkillModel } from "@src/models";
import refreshDatabaseHelper from "@tests/helpers/refresh_database.helper";

describe("CreateTechSkillService", () => {
	beforeEach(() => {
		refreshDatabaseHelper();
	});

	it("should create tech skill when all fields are provided", async () => {
		const techSkill: Omit<TechSkillModel, "id"> = {
			name: "Test Tech Skill",
			short_description: "Test Tech Skill Short Description",
			link: "https://test.tech.skill",
			end_date: new Date(),
			start_date: new Date(),
			primary_color: "#000000",
			secondary_color: "#FFFFFF",
		};

		const result = await CreateTechSkillService(techSkill);

		expect(result).toHaveProperty("id");
		const { id, ...resultWithoutId } = result;

		expect(resultWithoutId).toEqual(techSkill);
	});
});
