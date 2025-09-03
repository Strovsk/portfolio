import theme from "@/providers/theme";
import {
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Slide,
	Typography,
} from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Descriptions } from "./Components/DescriptionsComponent/Descriptions.component";

interface AboutMeProps {
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AboutMe(props: AboutMeProps) {
	const { open: openProp = false } = props;

	return (
		<React.Fragment>
			<Dialog
				fullWidth
				open={openProp}
				onClose={() => props.setOpen?.(false)}
				maxWidth="md"
				slots={{
					transition: Transition,
				}}
				keepMounted={false}
				slotProps={{
					paper: {
						sx: {
							color: "white",
							backgroundColor: theme.palette.primary.main,
							borderRadius: 2,
							boxShadow: 24,
							position: "absolute",
							bottom: -35,
							height: "90vh",
						},
					},
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: 16,
						right: 16,
						border: ".0625rem solid white",
						borderRadius: "50%",
					}}
					data-name="close-button"
				>
					<IconButton
						onClick={() => props.setOpen?.(false)}
						sx={{ color: "white", padding: ".125rem", fontSize: ".3125rem" }}
					>
						<CloseIcon />
					</IconButton>
				</Box>

				<DialogTitle
					sx={{
						backgroundImage: "url('/accent.svg')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "40%",
						height: "40%",
						backgroundPosition: "center",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						rowGap: 1.5,
						"@media (max-width:530px)": {
							backgroundSize: "75%",
						},
					}}
					data-name="header"
				>
					<Box
						sx={{
							backgroundImage: "url('/me.png')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							width: "130px",
							height: "130px",
							borderRadius: "50%",
						}}
					/>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Typography variant="h6">Thiago Santa Clara Pereira</Typography>
						<Typography variant="caption">Desenvolvedor</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								columnGap: 1,
							}}
						>
							<Typography variant="caption">brasileiro</Typography>
							<Box
								sx={{
									backgroundImage:
										"url('https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg')",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									width: "15px",
									height: "15px",
									borderRadius: "50%",
								}}
							/>
							<Typography variant="caption">25 anos</Typography>
						</Box>
					</Box>
				</DialogTitle>

				<DialogContent
					sx={{
						display: "flex",
						justifyContent: "space-between",
						marginInline: 2,
					}}
				>
					<AboutMe.Descriptions />
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
}

AboutMe.Descriptions = Descriptions;
