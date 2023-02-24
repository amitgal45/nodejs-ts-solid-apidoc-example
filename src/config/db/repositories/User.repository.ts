import { Model } from "mongoose";
import { IUser } from "../entities/User.entity";
import { AbstractRepository, IAbstractRepository } from "./Abstract.repository";

export interface IUserRepository extends IAbstractRepository<IUser> {}

export class UserRepository extends AbstractRepository<IUser> implements IUserRepository {
  constructor(protected readonly model: Model<IUser>) {
    super();
  }

  async create(User: IUser) {
    return this.model.create(User);
  }

  async findAll() {
    return this.model.find().exec();
  }

  async findById(id: string) {
    return await this.model.findById(id).exec();
  }

  async update(id: string, User: IUser) {
    return this.model.findByIdAndUpdate(id, User, { new: true }).exec();
  }

  async delete(id: string) {
    const result = await this.model.deleteOne({ _id: id }).exec();
    return result.deletedCount !== 0;
  }
}