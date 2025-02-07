import type { TechSkillModel } from "@src/models";
import { z } from "zod";

const CreateTechSkillRequest: z.ZodType<Partial<TechSkillModel>> = z.object({
	name: z.string().min(1).max(255).optional(),
	link: z.string().min(1).max(255).optional(),
	primaryColor: z.string().min(1).max(255).optional(),
	secondaryColor: z.string().min(1).max(255).optional(),
	shortDescription: z.string().min(1).max(255).optional(),
	startDate: z.union([z.date(), z.string()]).optional(),
	endDate: z.union([z.date(), z.string()]).optional(),
});

export default CreateTechSkillRequest;
