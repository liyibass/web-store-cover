const express = require("express");
const router = express.Router();
const { Navigation } = require("../models/navigationModel");

// 索取全部navigation列表
router.get("/", async (req, res) => {
  try {
    const navigationList = await Navigation.find();
    res.send(navigationList);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// id索取navigation
router.get("/:id", async (req, res) => {
  try {
    const getNavigation = await Navigation.find({ _id: req.params.id });

    res.send(getNavigation);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 新增新項目至navigation列表
router.post("/", async (req, res) => {
  try {
    const newNavigation = new Navigation({
      title: req.body.title,
      catogories: req.body.catogories,
    });

    const addNavigation = await newNavigation.save();
    res.send(addNavigation);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// 更新單一navigation全部資料
router.put("/:navigationId", async (req, res) => {
  const modifiedNavigation = req.body;

  try {
    const updateNavigation = await Navigation.updateOne(
      { _id: modifiedNavigation._id },
      modifiedNavigation
    );

    res.send(updateNavigation);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 項目從navigation列表中刪除
router.delete("/", async (req, res) => {
  try {
    const removeNavigation = await Navigation.deleteOne({
      title: req.body.title,
    });
    res.send(removeNavigation);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
