"use server";

import { fetchAuth } from "@/utils/fetchAuth";
import type { TechSkill } from "./TechSkill.schema";

export const listTechSkills = async (): Promise<TechSkill[]> => {
	const response = await fetchAuth("/techskill");

	if (!response.ok) {
		const textError = await response.text();
		throw new Error(`Failed to fetch tech skills because ${textError}`);
	}

	const result = await response.json();
	return result;
};

export const updateTechSkill = async (
	updatedTechSkill: TechSkill,
): Promise<TechSkill> => {
	const response = await fetchAuth(`/techskill/${updatedTechSkill.id}`, {
		method: "PUT",
		body: JSON.stringify(updatedTechSkill),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const textError = await response.text();
		throw new Error(`Failed to update tech skill because ${textError}`);
	}

	const result = await response.json();
	return result;
};
