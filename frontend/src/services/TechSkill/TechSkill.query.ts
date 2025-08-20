"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { listTechSkills, updateTechSkill } from "./TechSkill.service";
import type { TechSkill } from "./TechSkill.schema";

export const useListTechSkills = () =>
	useQuery({
		queryKey: ["techSkills"],
		queryFn: listTechSkills,
	});

export const useUpdateTechSkills = () =>
	useMutation({
		mutationFn: (updatedTechSkill: TechSkill) =>
			updateTechSkill(updatedTechSkill),
	});
