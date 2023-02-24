import { container } from "../config/db/container";
import { Request, Response } from "express";

class ImageController {
  async findAll(req: Request, res: Response) {
    const users = await container.imageRepository.findAll();
    res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const user = await container.imageRepository.create(req.body);
    res.status(201).json(user);
  }

  async delete(req: Request, res: Response) {
    await container.imageRepository.delete(req.params.id);
    res.status(200).json({deleted:true});
  }
}
export const imageController = new ImageController()