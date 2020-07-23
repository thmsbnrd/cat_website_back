const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const dotenv = require("dotenv");
const cors = require("cors");
const api = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", api);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`running on port ${port}`);
});
