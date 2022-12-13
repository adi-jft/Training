const express = require("express");
const cors = require("cors");
const cookieParser=require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models/model");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const routes = require("./routes/router");
app.use("/", routes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Successful to sync db");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on port: 3000");
  }
});
