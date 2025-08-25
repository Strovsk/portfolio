"use client";

import { Box, Button, CircularProgress, Fade, IconButton } from "@mui/material";
import type React from "react";
import { ColorSelector } from "./ColorSelector";
import type { TechSkillCardProps } from "./TechSkillCard.consts";
import {
	Field,
	type FieldProps,
	Formik,
	type FormikHelpers,
	type FormikProps,
} from "formik";
import CheckIcon from "@mui/icons-material/Check";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteIcon from "@mui/icons-material/Delete";
import { SkillDateSelector } from "./SkillDateSelector";
import {
	useCreateTechSkills,
	useDeleteTechSkills,
	useUpdateTechSkills,
} from "@/services/TechSkill/TechSkill.query";
import Swal from "sweetalert2";
import { Actions } from "./Actions";
import { CardBase } from "./CardBase";
const TechSkillCard = (props: TechSkillCardProps) => {
	const width = 300;

	const fieldTextStyles: React.CSSProperties = {
		outline: "none",
		background: "transparent",
		color: "black",
		border: "none",
		fontSize: "16px",
		marginLeft: "1px",
		fontFamily: "inter",
	};

	const createTechSkill = useCreateTechSkills();
	const updateTechSkill = useUpdateTechSkills();
	const deleteTechSkill = useDeleteTechSkills();

	const handleDelete = () => {
		Swal.fire({
			icon: "warning",
			title: "Are you sure?",
			text: "This action cannot be undone.",
			showCancelButton: true,
			confirmButtonText: "Delete",
			cancelButtonText: "Cancel",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteTechSkill
					.mutateAsync(props.id as string)
					.then(() => {
						Swal.fire({
							icon: "success",
							title: "Deleted!",
							text: "Your tech skill has been deleted.",
						});
						if (props.onDelete) props.onDelete(true);
					})
					.catch((error) => {
						console.error("There's something strange here bud:", error);
						Swal.fire({
							icon: "error",
							title: "Delete Failed",
							text: "There's something strange here bud",
						});
						if (props.onDelete) props.onDelete(false);
					});
			}
		});
	};

	const handleUpdate = async (
		values: TechSkillCardProps,
		helpers: FormikHelpers<TechSkillCardProps>,
	) => {
		const isValid = await helpers.validateForm();

		if (isValid) {
			updateTechSkill
				.mutateAsync({
					id: props.id as string,
					name: values.name,
					shortDescription: values.description || "",
					link: values.link,
					startDate: new Date().toISOString(),
					endDate: new Date().toISOString(),
					primaryColor: values.primaryColor,
					secondaryColor: values.secondaryColor,
				})
				.then(() => {
					helpers.resetForm({ values });
				})
				.catch((error) => {
					console.error("There's something strange here bud:", error);
					Swal.fire({
						icon: "error",
						title: "Update Failed",
						text: "There's something strange here bud",
					});
				});
		}
	};

	const handleCreate = async (
		values: TechSkillCardProps,
		helpers: FormikHelpers<TechSkillCardProps>,
	) => {
		const isValid = await helpers.validateForm();

		if (isValid) {
			createTechSkill
				.mutateAsync({
					name: values.name,
					shortDescription: values.description || "",
					link: values.link,
					startDate: new Date().toISOString(),
					endDate: new Date().toISOString(),
					primaryColor: values.primaryColor,
					secondaryColor: values.secondaryColor,
				})
				.then(() => {
					helpers.resetForm({ values });
					if (props.onCreate) props.onCreate(true);
					Swal.fire({
						icon: "success",
						title: "Created!",
						text: "Your tech skill has been created.",
					});
				})
				.catch((error) => {
					console.error("There's something strange here bud:", error);
					Swal.fire({
						icon: "error",
						title: "Create Failed",
						text: "There's something strange here bud",
					});
					if (props.onCreate) props.onCreate(false);
				});
		}
	};

	return (
		<Formik<TechSkillCardProps>
			initialValues={{
				id: props.id,
				primaryColor: props.primaryColor,
				secondaryColor: props.secondaryColor,
				name: props.name,
				link: props.link,
				description: props.description || "No description available.",
				startDate: props.startDate || "",
				endDate: props.endDate || "",
			}}
			onSubmit={(
				values: TechSkillCardProps,
				helpers: FormikHelpers<TechSkillCardProps>,
			) => {
				switch (props.mode) {
					case "create":
						handleCreate(values, helpers);
						break;
					case "edit":
						handleUpdate(values, helpers);
						break;
					default:
						break;
				}
			}}
		>
			{(form: FormikProps<TechSkillCardProps>) => (
				<TechSkillCard.CardBase
					width={width}
					isCreating={props.mode === "create"}
				>
					<TechSkillCard.Actions
						isExpanded={form.dirty}
						isCreating={props.mode === "create"}
					>
						{form.dirty && (
							<Fade in={form.dirty} timeout={500}>
								<IconButton
									onClick={() => form.submitForm()}
									disabled={updateTechSkill.isPending}
								>
									<CheckIcon color="primary" fontSize="small" />
								</IconButton>
							</Fade>
						)}
						{form.dirty && (
							<Fade in={form.dirty} timeout={500}>
								<IconButton
									onClick={() => form.resetForm()}
									disabled={updateTechSkill.isPending}
								>
									<ReplayIcon color="primary" fontSize="small" />
								</IconButton>
							</Fade>
						)}
						<IconButton>
							<DeleteIcon
								color="primary"
								fontSize="small"
								onClick={handleDelete}
							/>
						</IconButton>
						{updateTechSkill.isPending && <CircularProgress size={24} />}
					</TechSkillCard.Actions>

					<Box
						display={"flex"}
						alignItems={"center"}
						gap={"7px"}
						data-name="tech-skill-card-header"
					>
						<Box
							data-name="tech-skill-icon"
							width={"40px"}
							height={"40px"}
							borderRadius={"10px"}
							bgcolor={form.values.primaryColor}
							sx={{
								backgroundImage: `url(https://cdn.simpleicons.org/${form.values.name}/${form.values.secondaryColor.replace("#", "")})`,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "60%",
							}}
						/>

						<Box width={"70%"} data-name="tech-skill-text">
							<Field type="text" name="name" style={{ ...fieldTextStyles }} />
							<Field
								type="text"
								name="link"
								style={{
									...fieldTextStyles,
									fontSize: "12px",
									color: "rgb(94, 94, 94)",
								}}
							/>
						</Box>
					</Box>

					<Box data-name="tech-skill-card-description">
						<Field
							type="text"
							name="description"
							style={{
								...fieldTextStyles,
								fontSize: "15px",
							}}
						/>
					</Box>

					<Box data-name="tech-skill-card-date">
						<Box display={"flex"} flexDirection={"row"}>
							<Field name="startDate">
								{(field: FieldProps<TechSkillCardProps>) => (
									<SkillDateSelector title="Start Date" fieldProps={field} />
								)}
							</Field>
							<Box mx={1}>to</Box>
							<Field name="endDate">
								{(field: FieldProps<TechSkillCardProps>) => (
									<SkillDateSelector title="End Date" fieldProps={field} />
								)}
							</Field>
						</Box>
					</Box>

					<Box data-name="tech-skill-card-footer">
						<Box
							display="flex"
							flexDirection="row"
							alignItems="center"
							flexWrap="nowrap"
							justifyContent="space-between"
							width="100%"
						>
							<Field name="primaryColor">
								{(field: FieldProps<TechSkillCardProps>) => (
									<ColorSelector label="primary" fieldProps={field} />
								)}
							</Field>
							<Field name="secondaryColor">
								{(field: FieldProps<TechSkillCardProps>) => (
									<ColorSelector label="secondary" fieldProps={field} />
								)}
							</Field>
						</Box>
						{props.mode === "create" && (
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									width: "100%",
									marginTop: 2,
									columnGap: 1,
								}}
							>
								<Button
									variant="contained"
									color="primary"
									loading={createTechSkill.isPending}
									onClick={() => {
										form.submitForm();
									}}
									size="small"
									disabled={createTechSkill.isPending}
								>
									Create
								</Button>
							</Box>
						)}
					</Box>
				</TechSkillCard.CardBase>
			)}
		</Formik>
	);
};

TechSkillCard.CardBase = CardBase;
TechSkillCard.Actions = Actions;

export default TechSkillCard;
