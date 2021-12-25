const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { response } = require("express");

exports.signup = (req, res) => {
  const user = {
    name:req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
    
  };

    
        User.create(user,err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
  
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .then(( user) => {
      


      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!user || !passwordIsValid) {
        return res.json({ message: "check again" });
      }


     
      
      

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
        
    console.log({
      id: user._id,
      username: user.username,
      email: user.email,
    
      accessToken: token
    });
      res.send({

        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    }).catch(err=>console.log(err))
};