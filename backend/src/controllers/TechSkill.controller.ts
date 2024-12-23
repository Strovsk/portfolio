import { CreateTechSkillService } from "@src/services/TechSkillServices";
import type { Request, Response } from "express";
import httpStatus from "http-status-codes";

export default class TechSkillController {
	public async create(req: Request, res: Response) {
		const data = CreateTechSkillService(req.body.validated);

		res.status(httpStatus.CREATED).json({ message: "created", data });
		return;
	}

	public async read(_req: Request, res: Response) {
		res.status(httpStatus.OK).json({ message: "read" });
		return;
	}

	public async update(_req: Request, res: Response) {
		res.status(httpStatus.OK).json({ message: "update" });
		return;
	}

	public async delete(_req: Request, res: Response) {
		res.status(httpStatus.OK).json({ message: "delete" });
		return;
	}

	public async list(_req: Request, res: Response) {
		res.status(httpStatus.OK).json({ message: "list" });
		return;
	}
}
