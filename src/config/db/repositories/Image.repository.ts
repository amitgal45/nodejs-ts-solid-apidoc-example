import { Model } from "mongoose";
import { IImage } from "../entities/Image.entity";
import { AbstractRepository, IAbstractRepository } from "./Abstract.repository";

export interface IImageRepository extends IAbstractRepository<IImage> {}

export class ImageRepository extends AbstractRepository<IImage> {
  constructor(protected readonly model: Model<IImage>) {
    super();
  }

  async create(User: IImage) {
    return this.model.create(User);
  }

  async findAll() {
    return this.model.find().exec();
  }

  async findById(id: string) {
    return this.model.findById(id).exec();
  }

  async update(id: string, image: IImage) {
    return this.model.findByIdAndUpdate(id, image, { new: true }).exec();
  }

  async delete(id: string) {
    const result = await this.model.deleteOne({ _id: id }).exec();
    return result.deletedCount !== 0;
  }
}