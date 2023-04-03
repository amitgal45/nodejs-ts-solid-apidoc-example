import { teamService } from "../../services/Team.service";
import { Request, Response } from "express";
import { rootService } from "../../services";

class TeamController {
  findAll(req: Request, res: Response) {
    res.status(200).json(teamService.TEAM);
  }

  findById(req: Request, res: Response) {
    try {
      const user = rootService.TeamService.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
  findAllTeamPlayers(req: Request, res: Response) {
    try {
      const user = rootService.PlayerService.findAllTeamPlayers(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
      }
    }
  }
  create(req: Request, res: Response) {
    const body = req.body;
    const newLeague = rootService.TeamService.create(body);
    res.status(200).json(newLeague);
  }
  update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const body = req.body;
      const newLeague = rootService.TeamService.update(id, body);
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
      const newLeague = rootService.TeamService.delete(id);
      res.status(200).json(newLeague);
    } catch (err) {
      if (err.message === "NOT_FOUND") {
        res.status(500).json({ message: err.message });
        return;
      }
    }
  }
}
export const teamController = new TeamController();
