import { TechSkillDto } from "@src/dto";
import type { TechSkillModel } from "@src/models";
import { prismaCursor } from "@src/utils";

type ListTechSkillServiceOptions = {
	filters?: Partial<TechSkillModel>;
	pagination?: { itemsPerPage: number | undefined; page: number | undefined };
};

export default async function ListTechSkillService(
	options: ListTechSkillServiceOptions = {},
): Promise<TechSkillModel[]> {
	const techSkillDto = new TechSkillDto();

	const {
		filters = {},
		pagination = { itemsPerPage: undefined, page: undefined },
	} = options;

	const skip = pagination.page
		? (pagination.itemsPerPage || 1) * (pagination.page - 1)
		: 0;

	const techSkillsList = await prismaCursor.techSkill.findMany({
		where: filters,
		take: pagination.itemsPerPage,
		skip,
		orderBy: { name: "asc" },
	});

	return techSkillsList.map((techSkill) =>
		techSkillDto.toEntityModel(techSkill),
	);
}
