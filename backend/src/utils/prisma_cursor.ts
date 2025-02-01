import { PrismaClient } from "@prisma/client";

// This is a recommended approach provided by official Prisma documentation
// https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#long-running-processes

const globalForPrisma = globalThis as unknown as {
	prismaCursor?: PrismaClient;
};

const prismaCursor = globalForPrisma.prismaCursor || new PrismaClient();

if (process.env.NODE_ENV !== "production")
	globalForPrisma.prismaCursor = prismaCursor;

export default prismaCursor;
