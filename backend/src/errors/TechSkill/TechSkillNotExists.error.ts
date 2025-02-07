import type { TechSkillModel } from "@src/models";
import { ApiError } from "../Api.error";
import httpStatus from "http-status-codes";

export default class TechSkillNotExistsError extends ApiError {
	constructor(details: Partial<TechSkillModel> = {}) {
		const summary = Object.entries(details)
			.reduce((acc, [key, value]) => {
				return `${acc} ${key}: ${value},`;
			}, "")
			.slice(0, -1);
		super(
			httpStatus.NOT_FOUND,
			`TechSkill does not exist. No matches: (${summary})`,
			"The requested TechSkill does not exist",
		);
	}

	logError(): void {
		console.error("TechSkill does not exist");
	}
}
