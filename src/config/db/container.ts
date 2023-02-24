import { ImageModel,UserModel } from "./entities";
import { IImageRepository, ImageRepository } from "./repositories/Image.repository";
import {
  IUserRepository,
 UserRepository,
} from "./repositories/User.repository";

export interface IContainer {
  userRepository: IUserRepository;
  imageRepository: IImageRepository
}

export class Container implements IContainer {
  readonly userRepository: IUserRepository;
  readonly imageRepository: IImageRepository;

  constructor() {
    this.userRepository = new UserRepository(UserModel);
    this.imageRepository = new ImageRepository(ImageModel)
  }
}

export const container = new Container();
