const express = require("express");
const connectDB = require("./config/db_config");

const app = express();

require("dotenv").config();

PORT = process.env.PORT || 6000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.json({ msg: "welcome to paratha api" });
});

app.use("/api/paratha", require("./router/parathaRouter"));

app.listen(PORT, () => {
  console.log(`server running on ${PORT}  `);
});
