import { Schema, model, Document } from "mongoose";
import { Entities } from "./consts";

export interface IImage extends Document {
  title: string;
  content: string;
  img_url: string;
}

const imageSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  img_url: { type: String, required: true },
});

export const ImageModel = model<IImage>(Entities.Image, imageSchema);
