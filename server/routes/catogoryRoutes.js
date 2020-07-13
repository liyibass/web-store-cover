const express = require("express");
const router = express.Router();
const { Catogory } = require("../models/catogoryModel");

router.get("/", async (req, res) => {
  const catogoryList = await Catogory.find();
  res.send(catogoryList);
});

router.get("/:id", async (req, res) => {
  const resultCatogory = await Catogory.find({ title: req.body.title });
  res.send(resultCatogory);
});

router.post("/", async (req, res) => {
  const newCatogory = new Catogory({
    title: req.body.title,
  });

  const addCatogory = await newCatogory.save();
  res.send(addCatogory);
});

// router.put("/", async (req, res) => {
//   const allCatogory = await Catogory.find();
//   // console.log(allCatogory[0].toObject().folder);
//   const newArray = allCatogory.map((item) => {
//     newItem = {
//       _id: item.id,
//       title: item.title,
//     };

//     if (item.toObject().folder)
//       newItem = { ...newItem, folder: item.toObject().folder };
//     return newItem;
//   });

//   const updateCatogory = await newArray.;
//   res.send(updateCatogory);
// });

router.delete("/", async (req, res) => {
  const removeCatogory = await Catogory.deleteOne({ title: req.body.title });
  res.send(removeCatogory);
});

module.exports = router;
