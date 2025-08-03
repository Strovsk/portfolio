import { Box, ClickAwayListener, Fade, Typography } from "@mui/material";
import React from "react";
import { Sketch } from "@uiw/react-color";
import { keyframes } from "@emotion/react";

const bounceAnimation = keyframes`0% { transform: translateY(0) scaleY(0.9); } 100% { transform: translateY(-3px) scaleY(1); }`;

interface ColorSelectorProps {
	label: string;
	color: string;
}

export const ColorSelector = (props: ColorSelectorProps) => {
	const [openColorPicker, setOpenColorPicker] = React.useState(false);

	return (
		<ClickAwayListener onClickAway={() => setOpenColorPicker(false)}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="flex-start"
				gap="5px"
				sx={{ position: "relative" }}
			>
				<Fade in={openColorPicker} timeout={300}>
					<Box sx={{ position: "absolute", top: "100%", zIndex: 7 }}>
						<Sketch color={props.color} />
					</Box>
				</Fade>
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
						bgcolor={props.color}
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
						onClick={() => setOpenColorPicker(!openColorPicker)}
					/>
					<Typography sx={{ color: "#123123" }}>{props.color}</Typography>
				</Box>
			</Box>
		</ClickAwayListener>
	);
};
