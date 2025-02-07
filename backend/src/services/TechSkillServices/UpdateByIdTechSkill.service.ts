import { TechSkillDto } from "@src/dto";
import TechSkillAlreadyExists from "@src/errors/TechSkill/TechSkillAlreadyExists.error";
import TechSkillNotExistsError from "@src/errors/TechSkill/TechSkillNotExists.error";
import type { TechSkillModel } from "@src/models";
import { prismaCursor } from "@src/utils";

export async function UpdateByIdTechSkillService(
	id: string,
	techSkill: Partial<Omit<TechSkillModel, "id">>,
) {
	const techSkillDto = new TechSkillDto();

	if (techSkill?.name) {
		const nameExists = await prismaCursor.techSkill.findFirst({
			where: { name: techSkill.name, NOT: { id } },
		});

		if (nameExists) {
			throw new TechSkillAlreadyExists(techSkill.name);
		}
	}

	const techSkillOnDb = await prismaCursor.techSkill.findUnique({
		where: { id },
	});

	if (!techSkillOnDb) {
		throw new TechSkillNotExistsError({ id });
	}

	const updatedTechSkill = await prismaCursor.techSkill.update({
		where: { id },
		data: {
			...techSkillOnDb,
			...(techSkill.name && { name: techSkill.name }),
			...(techSkill.shortDescription && {
				short_description: techSkill.shortDescription,
			}),
			...(techSkill.link && { link: techSkill.link }),
			...(techSkill.endDate && { end_date: techSkill.endDate }),
			...(techSkill.startDate && { start_date: techSkill.startDate }),
			...(techSkill.primaryColor && { primary_color: techSkill.primaryColor }),
			...(techSkill.secondaryColor && {
				secondary_color: techSkill.secondaryColor,
			}),
		},
	});

	return techSkillDto.toEntityModel(updatedTechSkill);
}
