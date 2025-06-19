import { describe, it, expect } from "@jest/globals";
import { TechSkillDto } from "@src/dto";
import { TechSkillFactory } from "@src/factories";
import { GetByIdTechSkillService } from "@src/services/TechSkillServices/GetByIdTechSkill.service";

describe("Test Service for getByIdTechSkill", () => {
	it("Should return the TechSkill", async () => {
		const techSkillFactory = new TechSkillFactory();
		const techSkillDto = new TechSkillDto();
		const techSkill = await techSkillFactory.create();
		const techSkillModel = techSkillDto.toEntityModel(techSkill);

		const techSkillService = await GetByIdTechSkillService(techSkill.id);

		expect(techSkillService).toEqual(techSkillModel);
	});

	it("Should throw an error if TechSkill does not exist", async () => {
		const invalidId = "invalid-id";
		await expect(GetByIdTechSkillService(invalidId)).rejects.toThrow();
	});
});
