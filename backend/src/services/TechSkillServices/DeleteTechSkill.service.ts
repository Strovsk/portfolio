import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TechSkillNotExistsError } from "@src/errors/TechSkill";
import { prismaCursor } from "@src/utils";

export default async function DeleteTechSkillService(
	id: string,
): Promise<void> {
	try {
		await prismaCursor.techSkill.delete({
			where: {
				id,
			},
		});
	} catch (error) {
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			throw new TechSkillNotExistsError({ id });
		}

		throw error;
	}
}
