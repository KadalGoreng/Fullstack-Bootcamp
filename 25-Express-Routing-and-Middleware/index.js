const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());

const routes = require("./routes");

app.use(routes);

// middleware
const logger = (req, res, next) => {
  console.log("this is logger");
  next();
};

app.use(logger);

app.listen("3001", () => {
  console.log(`server listening on port ${port}`);
});
