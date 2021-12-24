const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name : {
        type: String,
    },
    email : {
        type: String,
        required: true,
    },
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    balance :{
      type:Number,
      default:0
    }
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ]
  })
);




module.exports = User;
