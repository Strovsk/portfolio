import { Box, ClickAwayListener, Popover, Typography } from "@mui/material";
import React from "react";
import { Sketch } from "@uiw/react-color";
import { keyframes } from "@emotion/react";
import type { FieldProps } from "formik";
import type { TechSkillCardProps } from "./TechSkillCard.consts";

const bounceAnimation = keyframes`0% { transform: translateY(0) scaleY(0.9); } 100% { transform: translateY(-3px) scaleY(1); }`;

interface ColorSelectorProps {
	label: string;
	fieldProps: FieldProps<TechSkillCardProps>;
}

export const ColorSelector = (props: ColorSelectorProps) => {
	const [openColorPicker, setOpenColorPicker] = React.useState(false);
	const ref = React.useRef<HTMLDivElement | null>(null);

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
			width={"40%"}
			gap="5px"
		>
			<Popover
				open={openColorPicker}
				anchorEl={ref.current}
				onClose={() => setOpenColorPicker(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			>
				<ClickAwayListener onClickAway={() => setOpenColorPicker(false)}>
					<Sketch
						color={props.fieldProps.field.value as unknown as string}
						onChange={(color) => {
							props.fieldProps.form.setFieldValue(
								props.fieldProps.field.name,
								color.hex,
							);
						}}
					/>
				</ClickAwayListener>
			</Popover>
			<Typography color="primary" variant="caption">
				{props.label}
			</Typography>
			<Box
				display="flex"
				flexDirection="row"
				alignItems="center"
				columnGap="10px"
			>
				<Box
					width={20}
					height={20}
					borderRadius="50%"
					bgcolor={props.fieldProps.field.value as unknown as string}
					border="1px solid #ccc"
					sx={{
						cursor: "pointer",
						animation: openColorPicker
							? `${bounceAnimation} 0.7s infinite alternate`
							: "none",
						boxShadow: openColorPicker
							? "3px 3px 5px rgba(81, 81, 81, .5)"
							: "none",
						transition: "background-color 0.3s, box-shadow 0.3s",
					}}
					ref={ref}
					onClick={() => setOpenColorPicker(!openColorPicker)}
				/>
				<Typography sx={{ color: "#123123" }}>
					{props.fieldProps.field.value as unknown as string}
				</Typography>
			</Box>
		</Box>
	);
};
