import { CreateTechSkillService } from "@src/services/TechSkillServices";
import DeleteTechSkillService from "@src/services/TechSkillServices/DeleteTechSkill.service";
import { GetByIdTechSkillService } from "@src/services/TechSkillServices/GetByIdTechSkill.service";
import ListTechSkillService from "@src/services/TechSkillServices/ListTechSkill.service";
import { UpdateByIdTechSkillService } from "@src/services/TechSkillServices/UpdateByIdTechSkill.service";
import type { Request, Response } from "express";
import httpStatus from "http-status-codes";

export default class TechSkillController {
	public async create(req: Request, res: Response) {
		await CreateTechSkillService(req.body.validated);

		res.status(httpStatus.CREATED).send();
		return;
	}

	public async read(req: Request, res: Response) {
		const { id } = req.params;
		const teckSkill = await GetByIdTechSkillService(id);

		res.status(httpStatus.OK).json(teckSkill);
		return;
	}

	public async update(req: Request, res: Response) {
		const { id } = req.params;
		const { validated } = req.body;

		if (!validated || Object.keys(validated).length === 0) {
			res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid input" });
			return;
		}

		await UpdateByIdTechSkillService(id, validated);

		res.status(httpStatus.OK).json({ message: "updated" });
		return;
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params;

		await DeleteTechSkillService(id);

		res.status(httpStatus.NO_CONTENT).send();
		return;
	}

	public async list(req: Request, res: Response) {
		const { page = 1, itemsPerPage, ...filters } = req.query;

		const techSkills = await ListTechSkillService({
			pagination: {
				page: Number.parseInt(page as string, 10),
				itemsPerPage: itemsPerPage
					? Number.parseInt(itemsPerPage as string, 10)
					: undefined,
			},
			filters,
		});
		res.status(httpStatus.OK).json(techSkills);
		return;
	}
}
