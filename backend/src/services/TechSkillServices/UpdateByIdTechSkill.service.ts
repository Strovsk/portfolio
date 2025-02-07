import { TechSkillDto } from "@src/dto";
import TechSkillNotExistsError from "@src/errors/TechSkill/TechSkillNotExists.error";
import type { TechSkillModel } from "@src/models";
import { prismaCursor } from "@src/utils";

export async function UpdateByIdTechSkillService(
	id: string,
	techSkill: Omit<TechSkillModel, "id">,
) {
	const techSkillDto = new TechSkillDto();

	const techSkillOnDb = await prismaCursor.techSkill.findUnique({
		where: { id },
	});

	if (!techSkillOnDb) {
		throw new TechSkillNotExistsError({ id });
	}

	const updatedTechSkill = await prismaCursor.techSkill.update({
		where: { id },
		data: {
			name: techSkill.name,
			short_description: techSkill.shortDescription,
			link: techSkill.link,
			end_date: techSkill.endDate,
			start_date: techSkill.startDate,
			primary_color: techSkill.primaryColor,
			secondary_color: techSkill.secondaryColor,
		},
	});

	return techSkillDto.toEntityModel(updatedTechSkill);
}
