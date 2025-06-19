import path from "node:path";

export default function baseUrl(filePath: string): string {
	const currentPath = __dirname;
	const pathToRoot = currentPath.split("src")[0];
	const fullPath = path.join(pathToRoot, "src", filePath);
	return fullPath;
}
