import { TechSkillDto } from "@src/dto";
import { TechSkillNotExistsError } from "@src/errors/TechSkill";
import type { TechSkillModel } from "@src/models";
import { prismaCursor } from "@src/utils";

export async function GetByIdTechSkillService(
	id: string,
): Promise<TechSkillModel> {
	const teckSkillDto = new TechSkillDto();
	const techSkill = await prismaCursor.techSkill.findUnique({
		where: {
			id,
		},
	});

	if (!techSkill) {
		throw new TechSkillNotExistsError({ id });
	}

	const techSkillModel = teckSkillDto.toEntityModel(techSkill);

	return techSkillModel;
}
