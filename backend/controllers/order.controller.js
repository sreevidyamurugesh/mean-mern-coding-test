const Order = require('../models/order.model');
const Product = require('../models/product.model');
const User = require('../models/user.model');

// CREATE
exports.createOrder = async (req, res) => {
  try {
    if (!req.body.userId || !req.body.productIds || req.body.productIds.length === 0) {
      return res.status(400).json({ error: 'userId and productIds are required' });
    }
    const order = await Order.create(req.body);
    await order.populate('userId productIds');
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId productIds');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('userId productIds');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('userId productIds');
    if (!updated) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};