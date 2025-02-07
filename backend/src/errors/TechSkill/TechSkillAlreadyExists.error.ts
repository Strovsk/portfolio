import { ApiError } from "../Api.error";
import httpStatus from "http-status-codes";

export default class TechSkillAlreadyExists extends ApiError {
	constructor(name: string) {
		super(
			httpStatus.CONFLICT,
			`TechSkill with name ${name} already exists`,
			"A TechSkill with the same name already exists",
		);
	}

	logError(): void {
		console.error(`TechSkillError: ${this.message}`);
	}
}
