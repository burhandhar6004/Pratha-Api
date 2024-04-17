
const express = require("express");
const { getParathas, singParatha, deleteParatha, updateParatha, create } = require("../controlers/parathaControler");

const routes = express.Router();


routes.get("/",getParathas)
routes.get("/:id", singParatha )
routes.delete("/:id", deleteParatha )
routes.put("/:id", updateParatha )
routes.post("/", create )


module.exports = routes;