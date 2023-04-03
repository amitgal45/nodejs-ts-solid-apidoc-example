import AppFactory from "./config/app/AppFactory";
import path from "path";
import express from "express";
import { createDoc } from "apidoc";
// import env from ''
const PORT = process.env.PORT || 3000;
const app = AppFactory.create();

const doc = createDoc({
  src: path.resolve(path.join(__dirname, '/')),
  dest: path.resolve(path.join(__dirname, 'public')), // can be omitted if dryRun is true
  // if you don't want to generate the output files:
  dryRun: false,
  // if you don't want to see any log output:
  silent: true,
});

if (typeof doc !== "boolean") {
  // Documentation was generated!
  console.log(doc.data); // the parsed api documentation object
  console.log(doc.project); // the project information
}
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
