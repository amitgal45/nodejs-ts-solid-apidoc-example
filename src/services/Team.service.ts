import { rootService } from ".";
import json from "../assets/MOCK/Teams.json";
class TeamService {
  public TEAM = json;

  constructor() {
    console.log(this.TEAM);
  }

  findAll() {
    return this.TEAM;
  }

  findAllByLeagueId(leagueId:string) {
    return this.TEAM.filter((team)=>team.leagueId === leagueId)
  }

  findById(id: string) {
    const index = this.TEAM.findIndex((team) => team.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    return this.TEAM[index];
  }

  create({ name, leagueId,budget,place,points,losses,draws,ratios,wins,games }: any) {
    const league = { id: Date.now() + "", name: name, leagueId,budget,place,points,losses,draws,ratios,wins,games };
    this.TEAM.push(league);
    return league;
  }

  update(id: string, body: { name: string; leagueId: string;budget:number;place:string;points:string;losses:string;draws:string,ratios:string,wins:string,games:string }) {
    const index = this.TEAM.findIndex((team) => team.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.TEAM[index] = { ...this.TEAM[index], ...body };
    return this.TEAM[index];
  }

  delete(id: string) {
    const index = this.TEAM.findIndex((team) => team.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.TEAM = this.TEAM.filter((team) => team.id !== this.TEAM[index].id);
    return { message: "Success" };
  }
}

export const teamService = new TeamService();
