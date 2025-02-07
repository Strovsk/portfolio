export abstract class ApiError extends Error {
	public status: number;
	public details: string;

	constructor(status: number, message: string, details: string) {
		super(message);
		this.status = status;
		this.details = details;
	}

	abstract logError(): void;
}
