import type { TechSkill } from "@prisma/client";
import type { TechSkillModel } from "@src/models";

export class TechSkillDto {
	public toPrismaModel(model: TechSkillModel): TechSkill {
		const prismaModel: TechSkill = {
			id: model.id,
			start_date: model.startDate as Date,
			end_date: model.endDate as Date,
			link: model.link,
			name: model.name,
			primary_color: model.primaryColor,
			secondary_color: model.secondaryColor,
			short_description: model.shortDescription,
		};

		return prismaModel;
	}

	public toEntityModel(prismaModel: TechSkill): TechSkillModel {
		const model: TechSkillModel = {
			id: prismaModel.id,
			startDate: prismaModel.start_date,
			endDate: prismaModel.end_date,
			link: prismaModel.link,
			name: prismaModel.name,
			primaryColor: prismaModel.primary_color,
			secondaryColor: prismaModel.secondary_color,
			shortDescription: prismaModel.short_description,
		};

		return model;
	}

	public toManyEntityModel(prismaModels: TechSkill[]): TechSkillModel[] {
		const models: TechSkillModel[] = prismaModels.map((prismaModel) => ({
			id: prismaModel.id,
			startDate: prismaModel.start_date,
			endDate: prismaModel.end_date,
			link: prismaModel.link,
			name: prismaModel.name,
			primaryColor: prismaModel.primary_color,
			secondaryColor: prismaModel.secondary_color,
			shortDescription: prismaModel.short_description,
		}));

		return models;
	}

	public toManyPrismaModel(models: TechSkillModel[]): TechSkill[] {
		const prismaModels: TechSkill[] = models.map((model) => ({
			id: model.id,
			start_date: model.startDate as Date,
			end_date: model.endDate as Date,
			link: model.link,
			name: model.name,
			primary_color: model.primaryColor,
			secondary_color: model.secondaryColor,
			short_description: model.shortDescription,
		}));

		return prismaModels;
	}
}
