"use client";

import { Box, Fade, IconButton } from "@mui/material";
import type React from "react";
import { ColorSelector } from "./ColorSelector";
import type { TechSkillCardProps } from "./TechSkillCard.consts";
import { Field, type FieldProps, Formik, type FormikProps } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import ReplayIcon from "@mui/icons-material/Replay";
import { SkillDateSelector } from "./SkillDateSelector";

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
			onSubmit={(values) => {
				console.log("Form submitted with values:", values);
			}}
		>
			{(form: FormikProps<TechSkillCardProps>) => (
				<Box
					data-name="tech-skill-card"
					width={width}
					height={(width * 3) / 4}
					boxShadow={"0 4px 10px rgba(27, 27, 27, 0.29)"}
					borderRadius={"16px"}
					paddingBlock={"15px"}
					paddingInline={"30px"}
					display={"flex"}
					flexDirection={"column"}
					rowGap={"1rem"}
					position={"relative"}
				>
					<Fade in={form.dirty}>
						<Box
							display={"flex"}
							data-name="tech-skill-card-actions"
							flexDirection="row"
							boxShadow={"0 4px 10px rgba(27, 27, 27, 0.29)"}
							position="absolute"
							bgcolor={"#eee"}
							top={-20}
							right={10}
							borderRadius={"10px"}
						>
							<IconButton onClick={() => form.submitForm()}>
								<CheckIcon color="primary" fontSize="small" />
							</IconButton>
							<IconButton onClick={() => form.resetForm()}>
								<ReplayIcon color="primary" fontSize="small" />
							</IconButton>
						</Box>
					</Fade>
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
								backgroundImage: `url(https://cdn.simpleicons.org/${props.name}/${form.values.secondaryColor})`,
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
					</Box>
				</Box>
			)}
		</Formik>
	);
};

export default TechSkillCard;
