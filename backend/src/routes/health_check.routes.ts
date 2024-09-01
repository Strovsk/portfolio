import { Router, Response, Request } from "express";

const healthCheckRouter = Router();

healthCheckRouter.get("/", (_req: Request, res: Response) => {
	res.json({ message: "any ok!" });
});

export default healthCheckRouter;
