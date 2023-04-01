const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("app running at http://localhost:3000/");
});

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

exports.module = app;
