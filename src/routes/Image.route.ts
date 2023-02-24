import { Router } from "express";
import { imageController } from "../controllers/Image.controller";

const router = Router();

router.get("/", imageController.findAll);

router.post("/", imageController.create);

router.delete("/:id", imageController.delete);

export default router;
