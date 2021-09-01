const Food = require("../models/foodsModel");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const foodCtrl = {
  addFood: async (req, res) => {
    try {
      const { name, category, images, price, description, status, featured } =
        req.body;
      if (!name || !category || !price || !description) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      if (!images) {
        return res.status(400).json({ msg: "No Image is Selected" });
      }
      const newFood = new Food({
        name,
        category,
        images,
        price,
        description,
        status,
        featured,
      });
      await newFood.save();
      res.json({ msg: "Food Added" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getFood: async (req, res) => {
    try {
      const features = new APIfeatures(Food.find({ status: true }), req.query)
        .filtering()
        .paginating();

      const foods = await features.query;

      res.json({
        status: "success",
        result: foods.length,
        foods: foods,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getAllFood: async (req, res) => {
    try {
      const foods = await Food.find();
      res.json({ foods });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getFeaturedFood: async (req, res) => {
    try {
      const featuredFoods = await Food.find({ featured: true });
      res.json({ featuredFoods });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateFood: async (req, res) => {
    try {
      const { name, category, images, price, description, status, featured } =
        req.body;
      if (!name || !category || !price || !description) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      if (!images) {
        return res.status(400).json({ msg: "No Image is Selected" });
      }
      await Food.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
          category,
          images,
          price,
          description,
          status,
          featured,
        }
      );
      res.json({ msg: "Food Details Updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteFood: async (req, res) => {
    try {
      await Food.findByIdAndDelete(req.params.id);
      res.json({ msg: "Food Item Deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = foodCtrl;
