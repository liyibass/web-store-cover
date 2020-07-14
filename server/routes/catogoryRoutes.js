const express = require("express");
const router = express.Router();
const { Catogory } = require("../models/catogoryModel");

router.get("/", async (req, res) => {
  try {
    const catogoryList = await Catogory.find();
    res.send(catogoryList);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.send(resultCatogory);
  } catch (error) {
    res.status(400).send(error.message);
  }
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
