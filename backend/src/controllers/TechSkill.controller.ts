import type { Request, Response } from "express";
import httpStatus from "http-status-codes";

export default class TechSkillController {
	public async create(_req: Request, res: Response) {
		res.status(httpStatus.CREATED).json({ message: "create" });
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
