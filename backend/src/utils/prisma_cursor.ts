import { PrismaClient } from "@prisma/client";

export default async function prismaCursor(): Promise<PrismaClient> {
	const cursor = new PrismaClient();
	return cursor;
}
