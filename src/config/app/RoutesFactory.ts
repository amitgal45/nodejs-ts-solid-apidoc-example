import { Application } from "express";
import UserRoutes from "../../routes/User.route";
import ImageRoutes from "../../routes/Image.route";

export class RoutesFactory {
  static create(app: Application) {
    app.use("/api/user", UserRoutes);
    app.use("/api/image", ImageRoutes);
  }
}
