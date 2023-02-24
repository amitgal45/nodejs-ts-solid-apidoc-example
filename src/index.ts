import AppFactory from "./config/app/AppFactory";
import { MongooseFactory } from "./config/app/MongooseFactory";

const PORT = process.env.PORT || 3000;
const MONGO_SRV = (process.env.MONGOSRV =
  "mongodb://admin:password@localhost:27017/nest");

const app = AppFactory.create();

MongooseFactory.connect(MONGO_SRV).then(() => {
  console.log(`Mongo is connected`);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
