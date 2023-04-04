import { Router } from "express";
import { leagueController } from "../controllers/League";

const router = Router();

router.get("/", leagueController.findAll);
router.get("/:id", leagueController.findById);
router.get("/:id/team", leagueController.findAllTeamsById);
router.post("/", leagueController.create);
router.put("/:id", leagueController.update);
router.delete("/:id", leagueController.delete);

export default router;
