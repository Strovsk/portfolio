import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

export default function ValidateMiddleware(requestModel: z.ZodType) {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = requestModel.parse(req.body ?? {});
			req.body.validated = result;
			next();
			return;
		} catch (error) {
			if (error instanceof z.ZodError) {
				res.status(400).json({ message: error.format() });
				return;
			}
		}
	};
}
