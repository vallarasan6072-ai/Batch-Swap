const express = require("express");
const router = express.Router();
const Swap = require("../models/temp");

// Create Request
router.post("/swap", async (req, res) => {
  const swap = new Swap(req.body);
  await swap.save();
  console.log("📥 Incoming Data:", req.body);
  res.json({ message: "Request submitted" });
});

// Get Requests
router.get("/", async (req, res) => {
  const data = await Swap.find();
  res.json(data);
});

// Approve
router.put("/approve/:id", async (req, res) => {
  await Swap.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.json({ message: "Approved" });
});

// Reject
router.put("/reject/:id", async (req, res) => {
  await Swap.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.json({ message: "Rejected" });
});
 
router.get("/status/:name", async (req, res) => {

  const data = await Swap.findOne({ student: req.params.name })
                         .sort({ _id: -1 });

  if (!data) {
    return res.send({
      status: "No Request",
      requestedClass: ""
    });
  }

  res.send({
    status: data.status,
    requestedClass: data.requestedClass
  });
});
module.exports = router;