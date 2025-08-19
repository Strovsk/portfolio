"use client";

import {
	Box,
	Button,
	MenuItem,
	Popover,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import type { FieldProps } from "formik";
import React from "react";
import type { TechSkillCardProps } from "./TechSkillCard.consts";

interface SkillDateSelectorProps {
	title: string;
	fieldProps: FieldProps<TechSkillCardProps>;
}

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const SkillDateSelector = (props: SkillDateSelectorProps) => {
	const [openDatePicker, setOpenDatePicker] = React.useState(false);
	const [date, setDate] = React.useState<Date>(
		new Date(props.fieldProps.field.value as unknown as string) || new Date(),
	);

	const elmAnchor = React.useRef<HTMLDivElement>(null);

	const showDateMonth = (date: Date | string) => {
		const parsedDate = new Date(date);
		const formatted = parsedDate
			.toLocaleString("en-US", { month: "short", year: "numeric" })
			.toLowerCase();
		return formatted.charAt(0).toUpperCase() + formatted.slice(1);
	};

	const onMonthChange = (month: number) => {
		date.setMonth(month);
		setDate(new Date(date));
	};

	const onYearChange = (year: string) => {
		const yearNumber = Number(year);
		date.setFullYear(yearNumber);
		setDate(new Date(date));
	};

	const onConfirm = () => {
		props.fieldProps.form.setFieldValue(
			props.fieldProps.field.name,
			date.toISOString(),
		);
		setOpenDatePicker(false);
	};

	return (
		<Box
			onClick={() => setOpenDatePicker(!openDatePicker)}
			sx={{ cursor: "pointer" }}
			ref={elmAnchor}
		>
			<Typography variant="caption" fontWeight={300}>
				{showDateMonth(props.fieldProps.field.value as unknown as string)}
			</Typography>
			<Popover
				open={openDatePicker}
				anchorEl={elmAnchor.current}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<Box p={2}>
					<Typography variant="h6" fontWeight={500}>
						{props.title}
					</Typography>
					<Box
						display="flex"
						flexDirection="row"
						alignItems="center"
						gap={1}
						pt={1}
					>
						<Select
							size="small"
							label="Month"
							value={date.getMonth()}
							onChange={(e) => onMonthChange(e.target.value as number)}
							sx={{ width: "30%" }}
						>
							{MONTHS.map((month, index) => (
								<MenuItem
									key={month}
									value={index}
									selected={index === date.getMonth()}
								>
									{month}
								</MenuItem>
							))}
						</Select>
						<TextField
							size="small"
							type="number"
							value={date.getFullYear()}
							onChange={(e) => onYearChange(e.target.value)}
						/>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent={"flex-end"}
						gap={1}
					>
						<Button onClick={() => setOpenDatePicker(false)}>Cancel</Button>
						<Button onClick={onConfirm}>Ok</Button>
					</Box>
				</Box>
			</Popover>
		</Box>
	);
};
