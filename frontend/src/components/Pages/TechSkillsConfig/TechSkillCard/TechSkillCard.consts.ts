export const convertDateToString = (
	date: Date | string | undefined,
): string => {
	if (!date) return "N/A";
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	let parsedDate: Date;
	if (typeof date === "string") {
		parsedDate = new Date(date);
	} else if (date instanceof Date) {
		parsedDate = date;
	} else {
		return "Invalid date";
	}
	if (!Number.isNaN(parsedDate.getTime())) {
		const month = months[parsedDate.getMonth()];
		const year = parsedDate.getFullYear();
		return `${month} ${year}`;
	}
	return "Invalid date";
};
