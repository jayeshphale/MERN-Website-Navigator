const fs = require("fs");
const parseFile = require("../utils/parseFile");

const handleFileUpload = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const urls = parseFile(req.file.path);

    // cleanup uploaded file
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      success: true,
      count: urls.length,
      urls,
    });

  } catch (error) {
    console.error("Upload Error:", error);

    res.status(500).json({
      success: false,
      message: "Error processing file",
    });
  }
};

module.exports = { handleFileUpload };