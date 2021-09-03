const Order = require("../models/orderModel");

const orderCtrl = {
  addOrder: async (req, res) => {
    try {
      const { name, cart, phone, address, quantity, price } = req.body;
      if (!name || !phone || !address || !quantity || !price) {
        return res.status(500).json({ msg: "Invalid Credentials" });
      }
      const newOrder = new Order({
        name,
        cart,
        phone,
        address,
        quantity,
        price,
      });
      await newOrder.save();
      res.json({ msg: "Order Succes!" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateOrder: async (req, res) => {
    try {
      const { name, phone, address, status } = req.body;
      if (!name || !phone || !address || !status) {
        return res.status(500).json({ msg: "Invalid Credentials" });
      }
      await Order.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
          phone,
          address,
          status,
        }
      );
      res.json({ msg: "Order Details Updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  orderList: async (req, res) => {
    try {
      const orderList = await Order.find();
      res.json({ orderList });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = orderCtrl;
