import json from "../assets/MOCK/Players.json";
class PlayerService {
  public PLAYERS = json;

  constructor() {
    console.log(this.PLAYERS);
  }

  findAll() {
    return this.PLAYERS;
  }

  findById(id: string) {
    const index = this.PLAYERS.findIndex((league) => league.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    return this.PLAYERS[index];
  }

  findAllTeamPlayers(teamId:string) {
    const arr:any[] = [];
    this.PLAYERS.forEach((team) => {
      if (teamId === team.teamId) arr.push(team);
    });
    return arr;
  }

  create({ name, teamId, role }: any) {
    const player = { id: Date.now() + "", name: name, teamId, role };
    this.PLAYERS.push(player);
    return player;
  }

  update(id: string, body: { name: string; teamId: string; role: string }) {
    const index = this.PLAYERS.findIndex((player) => player.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.PLAYERS[index] = { ...this.PLAYERS[index], ...body };
    return this.PLAYERS[index];
  }

  delete(id: string) {
    const index = this.PLAYERS.findIndex((player) => player.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.PLAYERS = this.PLAYERS.filter(
      (player) => player.id !== this.PLAYERS[index].id
    );
    return { message: "Success" };
  }
}

export const playerService = new PlayerService();
