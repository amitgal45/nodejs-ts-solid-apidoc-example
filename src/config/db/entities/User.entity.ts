import { Schema, model, Document } from "mongoose";
import { Entities } from "./consts";

export interface IUser extends Document {
  title: string;
  content: string;
}

const userSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export const UserModel = model<IUser>(Entities.User, userSchema);
