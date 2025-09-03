import { Box, Typography } from "@mui/material";

export default function SimpleTextContent(props: { content: string }) {
	return (
		<Box marginInline={2}>
			<Typography variant="caption" textAlign="justify" m={2} p={2}>
				{props.content}
			</Typography>
		</Box>
	);
}
