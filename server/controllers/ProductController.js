const AppError = require("../utils/appError");
const asyncCatcher = require("../utils/asyncCatcher");
const Product = require("../models/productModule");

exports.createProduct = asyncCatcher(async (req, res, next) => {
  console.log(req.body == {});
  try {
    const { name, price, availability, description, category, photoUrl } =
      req.body;
    const items = {
      name,
      price,
      availability,
      description,
      category,
      photoUrl,
    };
    console.log(items);
    const product = await Product.create(items);

    res.status(201).json(product);
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
});
exports.getAllProducts = asyncCatcher(async (req, res, next) => {
  console.log(req.query, "this is query");
  const { category } = req.query;
  console.log(category);

  try {
    let products;
    if (category && category != "all") {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});
