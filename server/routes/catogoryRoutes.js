const express = require("express");
const router = express.Router();
const { Catogory } = require("../models/catogoryModel");

// 索取全部catogory列表
router.get("/", async (req, res) => {
  try {
    const getCatogory = await Catogory.find();

    res.send(getCatogory);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// id索取catogory
router.get("/:id", async (req, res) => {
  try {
    const getCatogory = await Catogory.find({ _id: req.params.id });

    res.send(getCatogory);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 新增新項目至catogory列表
router.post("/", async (req, res) => {
  try {
    const newCatogory = new Catogory({
      title: req.body.title,
    });

    const addCatogory = await newCatogory.save();
    res.send(addCatogory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// 項目從catogory列表中刪除
router.delete("/", async (req, res) => {
  try {
    const removeCatogory = await Catogory.deleteOne({
      title: req.body.title,
    });
    res.send(removeCatogory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
