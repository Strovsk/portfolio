import type { TechSkillModel } from "@src/models";
import { z } from "zod";

const CreateTechSkillRequest: z.ZodType = z.object({
	name: z.string().min(1).max(255),
	link: z.string().min(1).max(255),
	primaryColor: z.string().min(1).max(255),
	secondaryColor: z.string().min(1).max(255),
	shortDescription: z.string().min(1).max(255),
	startDate: z.date(),
	endDate: z.date(),
}) satisfies z.ZodType<Omit<TechSkillModel, "id">>;

export default CreateTechSkillRequest;
