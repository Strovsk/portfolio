import { Box, Fade, keyframes } from "@mui/material";
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
	layer?: number;
}

export default function TechSkillIcon(props: Partial<TechSkillIconProps>) {
	const { name, primaryColor = "#eee", secondaryColor = "#1b1b1b" } = props;

	const iconSize = 50;
	const maxOrbiterSize = 800;
	const minOrbiterSize = 400;

	const firstOrbiterSizeMultipleIndex = Math.round(minOrbiterSize / iconSize);
	const lastOrbiterSizeMultipleIndex = Math.floor(maxOrbiterSize / iconSize);
	const orbiterIndexDiff =
		lastOrbiterSizeMultipleIndex - firstOrbiterSizeMultipleIndex;

	let randomOrbiterIndex = Math.random();
	randomOrbiterIndex *= orbiterIndexDiff;
	randomOrbiterIndex = Math.round(randomOrbiterIndex);
	randomOrbiterIndex += firstOrbiterSizeMultipleIndex;

	const randomOrbiterSize = randomOrbiterIndex * iconSize;

	const initialRotation = Math.floor(Math.random() * 360);

	const iconRef = useRef<HTMLDivElement>(null);
	const iconOrbiterRef = useRef<HTMLDivElement>(null);

	const orbitAnimation = keyframes`
		from { transform: rotate(${initialRotation}deg); }
		to { transform: rotate(${initialRotation + 360}deg); }
		`;

	const counterOrbit = keyframes`
		from { transform: rotate(${-initialRotation}deg); }
		to { transform: rotate(-${initialRotation + 360}deg); }
		`;

	// const animationDuration = Math.floor(Math.random() * 5) + 10;
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
		<Fade in={true} timeout={500}>
			<Box
				sx={{
					position: "absolute",
					width: randomOrbiterSize,
					height: randomOrbiterSize,
					borderRadius: "50%",
					zIndex: props.layer === 2 && Math.random() > 0.5 ? 5 : 3,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					transform: `scale(${props.layer === 2 ? 1 : 0.8})`,
				}}
			>
				<Box
					key={`tech-skill-icon-orbiter-${name}`}
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						animation: `${orbitAnimation} ${animationDuration}s ease-in-out infinite`,
						transform: `rotate(${initialRotation}deg)`,
					}}
				>
					<Box sx={{ transform: "translate(-50%, -50%)", cursor: "pointer" }}>
						<Box
							key={`tech-skill-icon-${name}`}
							sx={{
								backgroundColor: primaryColor,
								width: iconSize,
								height: iconSize,
								borderRadius: "15px",
								display: "grid",
								placeItems: "center",
								transform: `rotate(${-initialRotation}deg)`,
								animation: `${counterOrbit} ${animationDuration}s ease-in-out infinite`,
							}}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<img
								src={`https://cdn.simpleicons.org/${name}/${secondaryColor.replace("#", "")}`}
								alt={name}
								width={iconSize / 2}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Fade>
	);
}
