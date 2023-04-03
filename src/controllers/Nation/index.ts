import { Request, Response } from "express";
import { rootService } from "../../services";

class NationController {
  findAll(req: Request, res: Response) {
    res.status(200).json(rootService.NationService.NATIONS);
  }
  create(req: Request, res: Response) {
    const body = req.body;
    const newLeague = rootService.NationService.create(body);
    res.status(200).json(newLeague);
  }
  findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = rootService.NationService.findById(id);
      res.status(200).json(user);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
  findAllLeagueById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const leagues = rootService.LeagueService.findAllByByNationId(id);
      res.status(200).json(leagues);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
  update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const body = req.body;
      const newLeague = rootService.NationService.update(id, body);
      res.status(200).json(newLeague);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
  delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const newLeague = rootService.NationService.delete(id);
      res.status(200).json(newLeague);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
}
export const nationController = new NationController();
