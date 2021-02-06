const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const websiteSchema = new Schema({
  URL: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: Date, default: Date.now }, 
  pageSpeedScore: { type: String, required: true},
  domainRank: { type: Number, required: true},
  organicTraffic: {type: Number, required: true},
  firstPageKeywords: {type: Number, required: true},
  keywordsStriking: { type: Number, required: true},
  keywordPosition: {type: Number, required: true},
  vsTraffic: {type: Number, required: true},
  vsKeyword: {type: Number, required: true},
  vsCost: {type: Number, required: true}

});

const WebsiteInfo = mongoose.model("WebsiteInfo", websiteSchema);

module.exports = WebsiteInfo;