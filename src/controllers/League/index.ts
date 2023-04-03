import { teamService } from "../../services/Team.service";
import { rootService } from "../../services";
import { Request, Response } from "express";

class LeagueController {

  findAll(req: Request, res: Response) {
    res.status(200).json(rootService.LeagueService.LEAGUE);
  }

  create(req: Request, res: Response) {
    const body = req.body;
    const newLeague = rootService.LeagueService.create(body);
    res.status(200).json(newLeague);
  }

  findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = rootService.LeagueService.findById(id);
      res.status(200).json(user);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }

  findAllTeamsById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const teams = teamService.findAllByLeagueId(id);
      res.status(200).json(teams);
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
      const newLeague = rootService.LeagueService.update(id, body);
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
      const newLeague = rootService.LeagueService.delete(id);
      res.status(200).json(newLeague);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
}
export const leagueController = new LeagueController();
