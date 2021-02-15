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
  Orcost: {type: Number, required: true},
  Adtraffic: {type: Number, required: true},
  Orkw: {type: Number, required: true},
  Adkw: {type: Number, required: true},
  Topurl1: {type: Number, required: true},
  Topurl2: {type: Number, required: true},
  Topurl3: {type: Number, required: true},
  Topurl4: {type: Number, required: true},
  Topurl5: {type: Number, required: true},
  Topurl6: {type: Number, required: true},
  Topurl7: {type: Number, required: true},
  Topurl8: {type: Number, required: true},
  Topurl9: {type: Number, required: true},
  Topurl10: {type: Number, required: true},
  Topkw1: {type: Number, required: true},
  Topkw2: {type: Number, required: true},
  Topkw3: {type: Number, required: true},
  Topkw4: {type: Number, required: true},
  Topkw5: {type: Number, required: true},
  Topkw6: {type: Number, required: true},
  Topkw7: {type: Number, required: true},
  Topkw8: {type: Number, required: true},
  Topkw9: {type: Number, required: true},
  Topkw10: {type: Number, required: true},
  Toptraffic1: {type: Number, required: true},
  Toptraffic2: {type: Number, required: true},
  Toptraffic3: {type: Number, required: true},
  Toptraffic4: {type: Number, required: true},
  Toptraffic5: {type: Number, required: true},
  Toptraffic6: {type: Number, required: true},
  Toptraffic7: {type: Number, required: true},
  Toptraffic8: {type: Number, required: true},
  Toptraffic9: {type: Number, required: true},
  Toptraffic10: {type: Number, required: true}

});

const WebsiteInfo = mongoose.model("WebsiteInfo", websiteSchema);

module.exports = WebsiteInfo;