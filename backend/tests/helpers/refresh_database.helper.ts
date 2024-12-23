import { baseUrl } from "@src/utils";
import { Database } from "sqlite3";
import { open } from "sqlite";

export default async function refreshDatabaseHelper() {
	const db = await open({
		driver: Database,
		filename: baseUrl("../prisma/dev.db"),
	});

	const sqlQuery = "SELECT name FROM sqlite_master WHERE type='table';";

	const tables = await db.all(sqlQuery);
	const excludeTables = ["sqlite_sequence", "_prisma_migrations"];
	const tablesToDelete = tables.filter(
		(table) => !excludeTables.includes(table.name),
	);

	for (const table of tablesToDelete) {
		const sqlQueryDeleteAll = `DELETE FROM ${table.name};`;
		const sqlQueryResetAutoIncrement = `DELETE FROM sqlite_sequence WHERE name='${table.name}';`;

		await db.run(sqlQueryDeleteAll);
		await db.run(sqlQueryResetAutoIncrement);
	}
}

refreshDatabaseHelper();
