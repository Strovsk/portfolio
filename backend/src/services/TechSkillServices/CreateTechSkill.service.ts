import type { TechSkillModel } from "@src/models";
import { TechSkillColors } from "@src/policies";
import { prismaCursor } from "@src/utils";

export default async function CreateTechSkillService(
	techSkill: Omit<TechSkillModel, "id">,
) {
	const cursor = await prismaCursor();

	const createdTechSkill = await cursor.techSkill.create({
		data: {
			name: techSkill.name,
			short_description: techSkill.short_description,
			link: techSkill.link,
			end_date: techSkill.end_date,
			start_date: techSkill.start_date,
			primary_color: techSkill.primary_color ?? TechSkillColors.Primary,
			secondary_color: techSkill.secondary_color ?? TechSkillColors.Secondary,
		},
	});

	return createdTechSkill;
}
