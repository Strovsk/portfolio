import SideBarMenu from "@/components/Common/Menu/SideBarMenu";
import { Box, Grid2 } from "@mui/material";

export default function ConfigLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Grid2 display={"flex"} flexDirection="row" gap={2} width={'100vw'} height={'100vh'}>
			<Box>
                <SideBarMenu options={[
                    { label: "Tech Skills", path: "/config/tech_skills" },
                    { label: "Projects", path: "/config/projects", disabled: true }
                ]} />
            </Box>
			<Box>{children}</Box>
		</Grid2>
	);
}
