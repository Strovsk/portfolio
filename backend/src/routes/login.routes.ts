import { Router } from "express";

import { LoginController } from "@src/controllers";

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post("/", loginController.login);

export default loginRouter;
