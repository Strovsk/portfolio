import express, { type Express } from "express";
import { healthCheckRouter } from "./routes";

export default class App {
	public express: Express;

	constructor() {
		this.express = express();

		this.express.use("/healthcheck", healthCheckRouter);
	}
	public start(port = 3000) {
		this.express.listen(port, () => {
			console.log(`App listening on port ${port}`);
		});
	}
}
