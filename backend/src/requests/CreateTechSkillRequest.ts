import type { TechSkillModel } from "@src/models";
import { z } from "zod";

const CreateTechSkillRequest: z.ZodType = z.object({
	name: z.string().min(1).max(255),
	link: z.string().min(1).max(255),
	primary_color: z.string().min(1).max(255),
	secondary_color: z.string().min(1).max(255),
	short_description: z.string().min(1).max(255),
	start_date: z.date(),
	end_date: z.date(),
}) satisfies z.ZodType<Omit<TechSkillModel, "id">>;

export default CreateTechSkillRequest;
