const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const websiteSchema = new Schema({
  URL: { type: String, required: true },
  date: { type: Date, default: Date.now }, 
  pageSpeedScore: { type: String, required: true},
  domainRank: { type: Number, required: true},
  organicTraffic: {type: Number, required: true},
  totalOrganicKW: {type: Number, required: true},
  Top3: {type: Number, required: true},
  Top10: { type: Number, required: true},
  Top20: { type: Number, required: true},
  Top30: { type: Number, required: true},
  Top40: { type: Number, required: true},
  Ortraffic: {type: Number, required: true},
  Adtraffic: {type: Number, required: true},
  Orkw: {type: Number, required: true},
  Adkw: {type: Number, required: true}

});

const WebsiteInfo = mongoose.model("WebsiteInfo", websiteSchema);

module.exports = WebsiteInfo;