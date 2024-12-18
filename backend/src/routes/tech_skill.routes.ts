import { Router } from "express";
import { TechSkillController } from "@src/controllers";

const techSkillRouter = Router();
const techSkillController = new TechSkillController();

techSkillRouter.get("/", techSkillController.list);

export default techSkillRouter;
