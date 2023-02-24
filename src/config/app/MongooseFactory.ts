import mongoose, { ConnectOptions } from "mongoose";

export class MongooseFactory {
  static async connect(
    dbUri: string,
    options: ConnectOptions = {}
  ): Promise<typeof mongoose> {
    return await mongoose.connect(dbUri, {
      ...options,
    });
  }
}
