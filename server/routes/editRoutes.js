const express = require("express");
const router = express.Router();

const { Catogory } = require("../models/catogoryModel");
const { Product } = require("../models/productModel");

router.get("/", async (req, res) => {
  const productList = await Product.find();
  res.send(productList);
});

router.get("/:catogoryId", async (req, res) => {
  try {
    const allProducts = await Product.find();

    const resultProducts = allProducts.filter((product) => {
      const matchCatogory = product.catogory.find((catogory) => {
        return catogory._id == req.params.catogoryId;
      });

      if (matchCatogory) return true;
      return false;
    });

    res.send(resultProducts);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 更新單一商品全部資料
router.put("/:productId", async (req, res) => {
  const modifiedProduct = req.body;

  console.log(modifiedProduct);
  try {
    const updateProduct = await Product.updateOne(
      { _id: modifiedProduct._id },
      modifiedProduct
    );

    res.send(updateProduct);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
