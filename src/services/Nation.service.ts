import json from "../assets/MOCK/Nations.json";
class NationService {
  public NATIONS = json;

  constructor() {
    console.log(this.NATIONS);
  }

  findAll() {
    return this.NATIONS;
  }

  findById(id: string) {
    const index = this.NATIONS.findIndex((nation) => nation.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    return this.NATIONS[index];
  }

  create({ name,nationId }: any) {
    const nation = { id: Date.now() + "", name: name };
    this.NATIONS.push(nation);
    return nation;
  }

  update(id: string, body: { name: string }) {
    const index = this.NATIONS.findIndex((nation) => nation.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.NATIONS[index] = { ...this.NATIONS[index], ...body };
    return this.NATIONS[index];
  }

  delete(id: string) {
    const index = this.NATIONS.findIndex((nation) => nation.id === id);
    if (index === -1) {
      const error = new Error("NOT_FOUND");
      throw error;
    }
    this.NATIONS = this.NATIONS.filter(
      (nation) => nation.id !== this.NATIONS[index].id
    );
    return { message: "Success" };
  }
}

export const nationService = new NationService();
