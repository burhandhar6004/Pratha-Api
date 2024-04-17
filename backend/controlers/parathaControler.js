const { json } = require("express");
const Pratha = require("../models/parathaModels");
const asynHandler = require("express-async-handler");

// all Prathas
const getParathas = asynHandler(async (req, res) => {
  const pratha = await Pratha.find();

  if (!pratha) {
    res.json({ msg: "not found" }).status(404);
  }

  res.json(pratha).status(200);
});

// single prathas/
const singParatha = asynHandler(async (req, res) => {
  const pratha = await Pratha.findById(req.params.id);

  if (!pratha) {
    res.json({ msg: "no pratha found" }).status(404);
  }

  res.json(pratha).status(200);
});

// create
const create = asynHandler(async (req, res) => {
  const { name, price, description, qty, category, img } = req.body;

  if (!name || !price || !description || !qty || !category || !img) {
    res.json({ msg: "please fill all details" }).status(400);
  }
  const pratha = await Pratha.create({
    name,
    price,
    description,
    qty,
    category,
    img,
  });

  res.json(pratha);
});

// delete
const deleteParatha = asynHandler(async (req, res) => {
  //   res.json({ msg: "deleted" });

  const pratha = Pratha.findByIdAndDelete(req.params.id);
  json({ msg: "pratha Deleted" });
});

const updateParatha = asynHandler(async (req, res) => {
  const pratha = await Pratha.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(pratha);
});

module.exports = {
  getParathas,
  singParatha,
  deleteParatha,
  updateParatha,
  create,
};
