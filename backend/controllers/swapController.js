// controllers/swapController.js

const Swap = require("../models/swap");

// CREATE REQUEST
exports.createRequest = async (req, res) => {
  try {
    const swap = new Swap(req.body);
    await swap.save();

    res.json({ message: "Request submitted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL REQUESTS
exports.getRequests = async (req, res) => {
  try {
    const data = await Swap.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// APPROVE REQUEST
exports.approveRequest = async (req, res) => {
  try {
    await Swap.findByIdAndUpdate(req.params.id, {
      status: "approved"
    });

    res.json({ message: "Approved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REJECT REQUEST
exports.rejectRequest = async (req, res) => {
  try {
    await Swap.findByIdAndUpdate(req.params.id, {
      status: "rejected"
    });

    res.json({ message: "Rejected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};