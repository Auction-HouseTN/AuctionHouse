const mongoose = require("mongoose");
const event = mongoose.model(
    "event" ,
     new mongoose.Schema({
    balance:String,
    ownerid:String,
    title: String,
    img: String,
    descriptions:String,
    startPrice: String,
    StartDate:String,
    status:{ type: String, default: 'waiting' },
    winnerid:{ type: Number, default: 0 },
    endDate:String,
  
  })
  );
  module.exports= event;