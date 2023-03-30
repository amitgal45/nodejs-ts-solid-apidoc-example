import { Router } from "express";
import { leagueController } from "../controllers/League.controller";

const router = Router();

router.get("/", leagueController.findAll);
router.get("/:id", leagueController.findById);
router.get("/:id/teams", leagueController.findAllTeamsById);

router.post("/", leagueController.create);
router.put("/:id", leagueController.update);
router.delete("/:id", leagueController.delete);

export default router;
