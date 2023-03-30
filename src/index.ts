import AppFactory from "./config/app/AppFactory";

const PORT = process.env.PORT || 3000;
const app = AppFactory.create();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
