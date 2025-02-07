import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TechSkillDto } from "@src/dto";
import TechSkillAlreadyExists from "@src/errors/TechSkill/TechSkillAlreadyExists.error";
import type { TechSkillModel } from "@src/models";
import { TechSkillColors } from "@src/policies";
import { prismaCursor } from "@src/utils";

export async function CreateTechSkillService(
	techSkill: Omit<TechSkillModel, "id">,
) {
	const techSkillDto = new TechSkillDto();

	try {
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
	} catch (error: unknown) {
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2002"
		) {
			throw new TechSkillAlreadyExists(techSkill.name);
		}

		throw error;
	}
}
