"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
	listTechSkills,
	updateTechSkill,
	deleteTechSkill,
	createTechSkill,
} from "./TechSkill.service";
import type { TechSkill } from "./TechSkill.schema";

export const useListTechSkills = () =>
	useQuery({
		queryKey: ["techSkills"],
		queryFn: async () => await listTechSkills(),
	});

export const useUpdateTechSkills = () =>
	useMutation({
		mutationFn: (updatedTechSkill: TechSkill) =>
			updateTechSkill(updatedTechSkill),
	});

export const useDeleteTechSkills = () =>
	useMutation({
		mutationFn: (id: string) => deleteTechSkill(id),
	});

export const useCreateTechSkills = () =>
	useMutation({
		mutationFn: (newTechSkill: Omit<TechSkill, "id">) =>
			createTechSkill(newTechSkill),
	});
