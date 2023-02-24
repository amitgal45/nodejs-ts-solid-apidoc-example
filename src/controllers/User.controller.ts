import { container } from "../config/db/container";
import { Request, Response } from "express";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await container.userRepository.findAll();
    res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const user = await container.userRepository.create(req.body);
    res.status(201).json(user);
  }

  async delete(req: Request, res: Response) {
    await container.userRepository.delete(req.params.id);
    res.status(200).json({deleted:true});
  }
}
export const userController = new UserController()