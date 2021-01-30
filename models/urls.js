const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  websiteName: { type: String, required: true },
  URL: { type: String, required: true },
  description: String,
  employeeName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const WebsiteInfo = mongoose.model("WebsiteInfo", websiteSchema);

module.exports = WebsiteInfo;