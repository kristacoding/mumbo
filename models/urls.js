const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  URL: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: Date, default: Date.now }, 
  pageSpeedScore: { type: Integer, required: true},
  domainRank: { type: Integer, required: true},
  organicTraffic: {type: Integer, required: true},
  firstPageKeywords: {type: Integer, required: true},
  keywordsStriking: { type: Integer, required: true},
  keywordPosition: {type: Integer, required: true},
  vsTraffic: {type: Integer, required: true},
  vsKeyword: {type: Integer, required: true},
  vsCost: {type: Integer, required: true}

});

const WebsiteInfo = mongoose.model("WebsiteInfo", websiteSchema);

module.exports = WebsiteInfo;