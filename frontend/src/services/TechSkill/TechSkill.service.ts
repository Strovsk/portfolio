"use server";

import { fetchAuth } from "@/utils/fetchAuth";
import type { TechSkill } from "./TechSkill.schema";
import { fetchCommon } from "@/utils/fetchCommon";

export const listTechSkills = async (): Promise<TechSkill[]> => {
	const response = await fetchCommon("/public/techskill");

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

export const deleteTechSkill = async (id: string): Promise<void> => {
	const response = await fetchAuth(`/techskill/${id}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		const textError = await response.text();
		throw new Error(`Failed to delete tech skill because ${textError}`);
	}
};

export const createTechSkill = async (
	newTechSkill: Omit<TechSkill, "id">,
): Promise<void> => {
	const response = await fetchAuth("/techskill", {
		method: "POST",
		body: JSON.stringify(newTechSkill),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const textError = await response.text();
		throw new Error(`Failed to create tech skill because ${textError}`);
	}
};
