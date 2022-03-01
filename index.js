const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./queries");
const port = process.env.PORT || 80;
const bodyParser = require("body-parser");
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => res.json("hello"));

app.get("/crimes_by_wards", db.getCrimesByWards);
app.get("/:x", db.getRandom);
app.post("/random", db.getRandomQuery);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
