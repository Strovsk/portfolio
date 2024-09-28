import { Menu, WellcomeMessage } from "@/components";
import { HandBackground } from "@/components";
import { Container } from "@mui/material";

export default function Home() {
	return (
		<main>
			<Menu />
			<Container
				maxWidth={false}
				sx={{ width: "100vw", height: "100vh" }}
				disableGutters
			>
				<WellcomeMessage />
				<HandBackground />
			</Container>
		</main>
	);
}
