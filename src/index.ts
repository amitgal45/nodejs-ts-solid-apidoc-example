import AppFactory from "./config/app/AppFactory";

const PORT = process.env.PORT || 3000;
const MONGO_SRV = (process.env.MONGOSRV =
  "mongodb://admin:password@localhost:27017/nest");

const app = AppFactory.create();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
