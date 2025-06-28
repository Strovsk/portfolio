import { fetchAuth } from "@/utils/fetchAuth";
import { useQuery } from "@tanstack/react-query";
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

export const useListTechSkills = () =>
	useQuery({
		queryKey: ["techSkills"],
		queryFn: listTechSkills,
	});
