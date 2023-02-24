import { Model, ObjectId } from "mongoose";

export interface IAbstractRepository<T> {
  create(User: T): Promise<T & { _id: ObjectId }>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T & { _id: ObjectId }>;
  update(id: string, User: T): Promise<T & { _id: ObjectId }>;
  delete(id: string): Promise<boolean>;
}

export abstract class AbstractRepository<T> implements IAbstractRepository<T> {
  protected abstract model: Model<T>;

  abstract create(data: T): Promise<T & { _id: ObjectId }>;
  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T & { _id: ObjectId }>;
  abstract update(id: string, data: T): Promise<T & { _id: ObjectId }>;
  abstract delete(id: string): Promise<boolean>;
}
