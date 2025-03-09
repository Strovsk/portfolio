import Arc from "@/components/Common/DesignAccent/Arc.component";
import Arrow from "@/components/Common/DesignAccent/Arrow.component";
import Balls from "@/components/Common/DesignAccent/Balls.component";
import Crux from "@/components/Common/DesignAccent/Crux.component";
import Wave from "@/components/Common/DesignAccent/Wave.component";
import { Box } from "@mui/material";

export default function BackgroundAccent() {
	const designAccentColor = "rgba(0, 132, 255, 0.45)";

	return (
		<Box sx={{ position: "absolute", width: "100vw", height: "100vh" }}>
			<Balls
				color={designAccentColor}
				gap={15}
				numberOfColumns={12}
				numberOfLines={4}
				position={{ x: 165, y: 130 }}
				size={10}
			/>

			<Balls
				color={designAccentColor}
				gap={15}
				numberOfColumns={6}
				numberOfLines={6}
				position={{ x: 1500, y: 700 }}
				size={10}
			/>

			<Crux
				color={designAccentColor}
				size={50}
				stroke={2}
				position={{ x: 668, y: 60 }}
			/>

			<Crux
				color={designAccentColor}
				size={30}
				stroke={2}
				position={{ x: 1480, y: 300 }}
			/>

			<Wave
				valley={3}
				color={designAccentColor}
				height={40}
				stroke={3}
				position={{ x: 1093, y: 106 }}
			/>

			<Arrow
				numberOfArrows={4}
				color={designAccentColor}
				size={60}
				stroke={2}
				position={{ x: 160, y: 535 }}
			/>

			<Arc
				size={60}
				stroke={3}
				color={designAccentColor}
				position={{ x: 1565, y: 500 }}
			/>

			<Arc
				size={70}
				stroke={3}
				color={designAccentColor}
				position={{ x: 80, y: 750 }}
			/>

			<Arc
				size={75}
				stroke={3}
				color={designAccentColor}
				position={{ x: 1230, y: 670 }}
			/>
		</Box>
	);
}
