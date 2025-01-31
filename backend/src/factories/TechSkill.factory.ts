import type IFactory from "@src/interfaces/IFactory";
import type { TechSkillModel } from "@src/models";
import type { PrismaClient, TechSkill } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { prismaCursor } from "@src/utils";
import { TechSkillDto } from "@src/dto";

export class TechSkillFactory implements IFactory<TechSkillModel, TechSkill> {
	cursor: PrismaClient | null;
	techSkillDto: TechSkillDto;

	constructor() {
		this.techSkillDto = new TechSkillDto();

		this.cursor = null;
	}

	public async create(data: Partial<TechSkill> = {}): Promise<TechSkill> {
		if (!this.cursor) {
			this.cursor = await prismaCursor();
		}

		const techSkillPrisma = this.techSkillDto.toPrismaModel({
			...(this.make(data) as TechSkillModel),
		});

		const techSkill = await this.cursor.techSkill.create({
			data: techSkillPrisma,
		});
		return techSkill;
	}

	public make(data: Partial<TechSkillModel> = {}): TechSkillModel {
		const startDate = faker.date.recent();
		const endDate = faker.date.soon({ days: 5, refDate: startDate });

		return {
			id: faker.string.uuid(),
			startDate,
			endDate,
			link: faker.internet.url(),
			name: faker.word.verb(),
			primaryColor: faker.internet.color(),
			secondaryColor: faker.internet.color(),
			shortDescription: faker.word.words(),
			...data,
		};
	}
}
