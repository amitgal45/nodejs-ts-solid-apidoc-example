import { Router } from "express";
import { playerController } from "../controllers/Player";

const router = Router();

router.get("/", playerController.findAll);
router.get("/:id", playerController.findById);
router.post("/", playerController.create);
router.post("/:id/transfer", playerController.transferPlayer);
router.put("/:id", playerController.update);
router.delete("/:id", playerController.delete);

export default router;
