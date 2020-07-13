const express = require("express");
const router = express.Router();
const { Catogory } = require("../models/catogoryModel");
const { Product } = require("../models/productModel");

router.get("/", async (req, res) => {
  const productList = await Product.find();
  res.send(productList);
});

router.get("/:id", async (req, res) => {
  const resultProduct = await Product.find({ title: req.body.title });
  res.send(resultProduct);
});

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  const addProduct = await newProduct.save();
  res.send(addProduct);
});

router.put("/:id", async (req, res) => {
  const catogoryList = await Catogory.find();
  const targetProduct = await Product.findById(req.params.id);

  targetProduct.catogory.push(catogoryList[2]);

  console.log(targetProduct);

  try {
    const result = await targetProduct.save();

    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/", async (req, res) => {
  const removeProduct = await Product.deleteOne({ title: req.body.title });
  res.send(removeProduct);
});

module.exports = router;
