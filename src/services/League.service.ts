import json from "../assets/MOCK/Leagues.json";
class LeagueService {
  public LEAGUE = json;

  constructor() {
    console.log(this.LEAGUE);
  }

  findAll() {
    return this.LEAGUE;
  }

  findAllByByNationId(nationId:string) {

    const arr:any[] = [];
    this.LEAGUE.forEach((league) => {
      if (nationId === league.nationId) arr.push(league);
    });
    return arr;
  }

  findById(id: string) {
    const index = this.LEAGUE.findIndex((league) => league.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    return this.LEAGUE[index];
  }

  create({ name,nationId }: any) {
    const league = { id: Date.now() + "", name: name,nationId };
    this.LEAGUE.push(league);
    return league;
  }

  update(id: string, body: { name: string }) {
    const index = this.LEAGUE.findIndex((league) => league.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.LEAGUE[index] = { ...this.LEAGUE[index], ...body };
    return this.LEAGUE[index];
  }

  delete(id: string) {
    const index = this.LEAGUE.findIndex((league) => league.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.LEAGUE = this.LEAGUE.filter(
      (league) => league.id !== this.LEAGUE[index].id
    );
    return { message: "Success" };
  }
}

export const leagueService = new LeagueService();
