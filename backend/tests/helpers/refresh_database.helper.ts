import { prismaCursor } from "@src/utils";

export default async function refreshDatabaseHelper() {
	await prismaCursor.techSkill.deleteMany();
}

refreshDatabaseHelper();
