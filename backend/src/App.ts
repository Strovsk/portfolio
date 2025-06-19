import express, { type Express } from "express";
import * as routers from "./routes";
import { ErrorHandlerMiddleware } from "./middlewares/apiError.middleware";

export default class App {
	public express: Express;

	constructor() {
		this.express = express();

		this.express.use(express.json());
		this.express.use(ErrorHandlerMiddleware);
		this.express.use("/healthcheck", routers.healthCheckRouter);
		this.express.use("/techskill", routers.techSkillRouter);
		this.express.use("/login", routers.loginRouter);
	}
	public start(port = 3000) {
		this.express.listen(port, () => {
			console.log(`App listening on port ${port}`);
		});
	}
}
