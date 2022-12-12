require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static("../client/dist"));

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
