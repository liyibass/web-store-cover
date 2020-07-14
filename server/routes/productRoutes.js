const express = require("express");
const router = express.Router();
const { Catogory } = require("../models/catogoryModel");
const { Product } = require("../models/productModel");

// 顯示所有商品
router.get("/", async (req, res) => {
  const productList = await Product.find();
  res.send(productList);
});

// id顯示商品
router.get("/:id", async (req, res) => {
  try {
    const findProduct = await Product.find({ _id: req.params.id });
    res.send(findProduct);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 顯示此catogory的所有商品
router.get("/catogory/:catogoryId", async (req, res) => {
  try {
    const allProducts = await Product.find();

    const resultProducts = allProducts.filter((product) => {
      matchCatogory = product.catogory.find((catogory) => {
        return catogory._id == req.params.catogoryId;
      });

      if (matchCatogory) return true;
      return false;
    });

    res.send(resultProducts);

    // const catogory = await Catogory.find({
    //   folder: Array,
    // });
    // res.send(catogory);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 尋找商品
router.get("/search/:name", async (req, res) => {
  // 轉碼（for中文用）
  const decodedUrl = decodeURIComponent(req.params.name);
  // 轉成regular expression形式，i表示可以無視大小寫
  const index = RegExp(decodedUrl, "i");

  try {
    const findProduct = await Product.find({
      name: { $regex: index },
    });
    res.send(findProduct);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  const addProduct = await newProduct.save();
  res.send(addProduct);
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
