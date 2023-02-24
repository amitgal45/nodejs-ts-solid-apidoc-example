import { Router } from "express";
import { userController } from "../controllers/User.controller";

const router = Router();

router.get("/", userController.findAll);

router.post("/", userController.create);

router.delete("/:id", userController.delete);

export default router;
