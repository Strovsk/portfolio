import type { ErrorRequestHandler } from "express";
import { ApiError } from "@src/errors/Api.error";

export const ErrorHandlerMiddleware: ErrorRequestHandler = (
	err,
	_req,
	res,
	next,
) => {
	console.error(err.stack);

	if (err instanceof ApiError) {
		err.logError();
		res.status(err.status).send({
			message: err.message,
			details: err.details,
		});
		return;
	}

	res.status(500).send("Something broke!");
	return;
};
