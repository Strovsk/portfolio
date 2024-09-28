import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import IamThiago from "./IamThiago";

export default function WellcomeMessage() {
	return (
		<>
			<Grid container margin={10} direction={"column"}>
				<Grid>
					<Typography variant="h2" color="secondary">
						Aloha
					</Typography>
				</Grid>
				<Grid container direction={"column"}>
					<IamThiago />
				</Grid>

				<Grid container alignItems={"center"} columnGap={8}>
					<Typography variant="h5" color="primary">
						dev - fullstack
					</Typography>
					<Grid container columnGap={5}>
						<Link
							href={"https://www.github.com/strovsk"}
							target="_blank"
							data-testid="github-link"
						>
							<Image
								src={"/github.svg"}
								alt="Github logo"
								width={50}
								height={50}
								data-testid="github-logo"
							/>
						</Link>
						<Link
							href={"https://www.linkedin.com/in/thiago-santa-clara/"}
							target="_blank"
							data-testid="linkedin-link"
						>
							<Image
								src={"/linkedin.svg"}
								alt="Linkedin logo"
								width={50}
								height={50}
								data-testid="linkedin-logo"
							/>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
