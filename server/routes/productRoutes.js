const express = require("express");
const router = express.Router();
const { Catogory } = require("../models/catogoryModel");
const { Product } = require("../models/productModel");

router.get("/", async (req, res) => {
  const productList = await Product.find();
  res.send(productList);
});

// router.get("/:id", async (req, res) => {
//   const resultProduct = await Product.find({ title: req.body.title });
//   res.send(resultProduct);
// });

// return product.catogory[i]._id == req.params.catogoryId;

// 顯示此catogory的所有商品
router.get("/:catogoryId", async (req, res) => {
  const allProducts = await Product.find();

  const resultProducts = allProducts.filter((product) => {
    matchCatogory = product.catogory.find((catogory) => {
      return catogory._id == req.params.catogoryId;
    });

    if (matchCatogory) return true;
    return false;
  });

  res.send(resultProducts);
});

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  const addProduct = await newProduct.save();
  res.send(addProduct);
});

router.put("/addProduct/:id", async (req, res) => {
  const catogoryList = await Catogory.find();
  const targetProduct = await Product.findById(req.params.id);

  targetProduct.catogory.push(catogoryList[1]);

  try {
    const result = await targetProduct.save();

    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

// 自定義：用id找到product並修改catogory
router.put("/addCatogory/:id", async (req, res) => {
  const catogoryList = await Catogory.find();
  const newCatogory = catogoryList[0].toObject().folder[4];
  try {
    const productListUpdate = await Product.updateOne(
      { _id: req.params.id },
      { catogory: [newCatogory] }
    );
    res.send(productListUpdate);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/", async (req, res) => {
  const removeProduct = await Product.deleteOne({ title: req.body.title });
  res.send(removeProduct);
});

module.exports = router;
