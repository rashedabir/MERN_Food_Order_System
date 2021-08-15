const Food = require("../models/foodsModel");

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
      const foods = await Food.find({ status: true });
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
