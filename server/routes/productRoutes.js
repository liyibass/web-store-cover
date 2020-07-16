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
      const matchCatogory = product.catogories.find((catogory) => {
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

// 自定義：field改名
router.put("/renameField", async (req, res) => {
  try {
    const renameAllProduct = await Product.updateMany(
      {},
      { $rename: { catogory: "catogories" } },
      { multi: true }
    );
    res.send(renameAllProduct);
  } catch (error) {
    console.log(error.message);
  }
});

// 自定義：刪除field
router.put("/deleteField/:fieldName", async (req, res) => {
  try {
    const fieldName = req.params.fieldName;
    console.log(fieldName);
    const deleteFieldForAllProduct = await Product.updateMany(
      {},
      { $unset: { [fieldName]: 1 } },
      { multi: true }
    );
    res.send(deleteFieldForAllProduct);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/", async (req, res) => {
  const removeProduct = await Product.deleteOne({ title: req.body.title });
  res.send(removeProduct);
});

// 自定義：用id找到product並修改catogory
router.put("/addCatogory/:id", async (req, res) => {
  const catogoryList = await Catogory.find();
  const newCatogory = [catogoryList[0], catogoryList[1]];
  console.log(newCatogory);
  try {
    const productListUpdate = await Product.updateOne(
      { _id: req.params.id },
      { catogory: [...newCatogory] }
    );
    res.send(productListUpdate);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
