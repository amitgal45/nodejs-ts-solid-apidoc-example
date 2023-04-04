import { Application } from "express";
import morgan from "morgan";
import winston from "winston";

class LoggerFactory {
  public static create(app: Application) {
    // Logger
    const logger = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      defaultMeta: { service: "shay-test" },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });

    // Morgan logging middleware
    const morganFormat =
      ":method :url :status :res[content-length] - :response-time ms";
    app.use(
      morgan(morganFormat, {
        stream: {
          write: (message) => logger.info(message.trim()),
        },
      })
    );
  }
}

export default LoggerFactory;
