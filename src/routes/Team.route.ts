import { Router } from "express";
import { teamController } from "../controllers/Team";

const router = Router();

router.get("/", teamController.findAll);
router.get("/:id", teamController.findById);
router.get("/:id/player", teamController.findAllTeamPlayers);
router.post("/", teamController.create);
router.put("/:id", teamController.update);
router.delete("/:id", teamController.delete);

export default router;
