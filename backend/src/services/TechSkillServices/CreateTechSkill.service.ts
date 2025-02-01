import { TechSkillDto } from "@src/dto";
import type { TechSkillModel } from "@src/models";
import { TechSkillColors } from "@src/policies";
import { prismaCursor } from "@src/utils";

export async function CreateTechSkillService(
	techSkill: Omit<TechSkillModel, "id">,
) {
	const techSkillDto = new TechSkillDto();

	const createdTechSkill = await prismaCursor.techSkill.create({
		data: {
			name: techSkill.name,
			short_description: techSkill.shortDescription,
			link: techSkill.link,
			end_date: techSkill.endDate,
			start_date: techSkill.startDate,
			primary_color: techSkill.primaryColor ?? TechSkillColors.Primary,
			secondary_color: techSkill.secondaryColor ?? TechSkillColors.Secondary,
		},
	});

	return techSkillDto.toEntityModel(createdTechSkill);
}
