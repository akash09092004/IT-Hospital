const Career = require("../models/Career");

const getCareerApplications = async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createCareerApplication = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;

    if (!name || !email || !phone || !jobTitle) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const application = await Career.create(req.body);
    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateCareerStatus = async (req, res) => {
  try {
    const application = await Career.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      success: true,
      message: "Application updated",
      data: application,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteCareerApplication = async (req, res) => {
  try {
    const application = await Career.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ success: true, message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getCareerApplications,
  createCareerApplication,
  updateCareerStatus,
  deleteCareerApplication,
};
