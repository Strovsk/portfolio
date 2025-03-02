import { Box, keyframes } from "@mui/material";
import { useRef } from "react";

interface TechSkillIconProps {
	id: string;
	name: string;
	link: string;
	primaryColor: string;
	secondaryColor: string;
	shortDescription: string;
	startDate: Date | string;
	endDate: Date | string;
}

export default function TechSkillIcon(props: Partial<TechSkillIconProps>) {
	const { name, primaryColor = "#eee", secondaryColor = "#1b1b1b" } = props;
	const size = 50;

	const iconRef = useRef<HTMLDivElement>(null);
	const iconOrbiterRef = useRef<HTMLDivElement>(null);

	const orbitAnimation = keyframes`
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	`;

	const counterOrbit = keyframes`
		from { transform: rotate(0deg); }
		to { transform: rotate(-360deg); }
	`;

	const randomOrbiterSize = Math.floor(Math.random() * 400) + 300;
	const animationDuration = Math.floor(Math.random() * 21) + 30;

	const handleMouseEnter = (_event: React.MouseEvent<HTMLDivElement>) => {
		if (iconRef.current && iconOrbiterRef.current) {
			iconRef.current.style.animationPlayState = "paused";
			iconOrbiterRef.current.style.animationPlayState = "paused";
		}
	};

	const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
		if (iconRef.current && iconOrbiterRef.current) {
			iconRef.current.style.animationPlayState = "running";
			iconOrbiterRef.current.style.animationPlayState = "running";
		}
	};

	return (
		<Box
			key={`tech-skill-icon-orbiter-${name}`}
			sx={{
				width: randomOrbiterSize,
				height: randomOrbiterSize,

				position: "absolute",
				border: "2px dotted red",
				borderRadius: "50%",
				zIndex: 5,
				display: "flex",
				alignItems: "center",

				animation: `${orbitAnimation} ${animationDuration}s linear infinite`,
			}}
		>
			<Box
				key={`tech-skill-icon-${name}`}
				sx={{
					backgroundColor: primaryColor,
					width: size,
					height: size,
					borderRadius: "15px",
					display: "grid",
					placeItems: "center",
					transform: "translate(-50%, -50%)",
					animation: `${counterOrbit} ${animationDuration}s linear infinite`,
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<img
					src={`https://cdn.simpleicons.org/${name}/${secondaryColor}`}
					alt={name}
					width={size / 2}
				/>
			</Box>
		</Box>
	);
}
