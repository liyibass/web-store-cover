const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");

app.set("view engine", "ejs");
app.set("views", "./views");

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const homeRouter = require("./routes/homeRoutes");
const navigationRouter = require("./routes/navigationRoutes");
const catogoryRouter = require("./routes/catogoryRoutes");
const productRouter = require("./routes/productRoutes");

app.use("/", homeRouter);
app.use("/api/navigation", navigationRouter);
app.use("/api/catogory", catogoryRouter);
app.use("/api/product", productRouter);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => console.log("MongoDB connection success."))
  .catch((error) => console.log("MongoDB connection failed.", error));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
