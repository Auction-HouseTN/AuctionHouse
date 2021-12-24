const mongoose = require("mongoose");

const participant = mongoose.model('participant',
new mongoose.Schema({
  userId: String,
  eventId: String,
  password:String
})
);

module.exports=participant;