import { Router } from "express";
import { TechSkillController } from "@src/controllers";
import ValidateMiddleware from "@src/middlewares/validate.middleware";
import AuthorizationMiddleware from "@src/middlewares/authorization.middleware";
import Requests from "@src/requests";

const techSkillRouter = Router();
const publicTechSkillRouter = Router();
const techSkillController = new TechSkillController();

techSkillRouter.use(AuthorizationMiddleware);

publicTechSkillRouter.get("/", techSkillController.list);

techSkillRouter.post(
	"/",
	ValidateMiddleware(Requests.CreateTechSkillRequest),
	techSkillController.create,
);

techSkillRouter.put(
	"/:id",
	ValidateMiddleware(Requests.UpdateTechSkillRequest),
	techSkillController.update,
);

techSkillRouter.get("/:id", techSkillController.read);

techSkillRouter.delete("/:id", techSkillController.delete);

techSkillRouter.get("/list", techSkillController.list);

export { publicTechSkillRouter };
export default techSkillRouter;
