import { Application } from "express";
import TeamRoutes from "../../routes/Team.route";
import LeagueRoutes from "../../routes/League.route";
import PlayerRoutes from "../../routes/Player.route";
import NationRoutes from "../../routes/Nation.route";

export class RoutesFactory {
  static create(app: Application) {
    app.use("/api/league", LeagueRoutes);
    app.use("/api/team", TeamRoutes);
    app.use("/api/nation", NationRoutes);
    app.use("/api/player", PlayerRoutes);
  }
}
