import { Router } from "express";
import { TechSkillController } from "@src/controllers";
import ValidateMiddleware from "@src/middlewares/validate.middleware";
import Requests from "@src/requests";

const techSkillRouter = Router();
const techSkillController = new TechSkillController();

techSkillRouter.get("/", techSkillController.list);

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

export default techSkillRouter;
