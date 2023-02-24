import express, { Application, Request, Response, NextFunction } from "express";
import LoggerFactory from "./LoggerFactory";
import { RoutesFactory } from "./RoutesFactory";

class AppFactory {
  public static create(): Application {
    const app: Application = express();

    // Middleware
    app.use(express.json()); // parse JSON bodies
    app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies

    // Logger
    LoggerFactory.create(app);

    // Routes
    RoutesFactory.create(app)

    // Error handling middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).send("Something went wrong!");
    });

    return app;
  }
}

export default AppFactory;
