import { nationController } from "../controllers/Nation";
import { Router } from "express";

const router = Router();

router.get("/", nationController.findAll);
router.get("/:id", nationController.findById);
router.get("/:id/league", nationController.findAllLeagueById);

router.post("/", nationController.create);
router.put("/:id", nationController.update);
router.delete("/:id", nationController.delete);

export default router;
