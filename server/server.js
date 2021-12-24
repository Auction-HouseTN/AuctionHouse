const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config.js");
const Db=require("./models")
const app = express();
const PORT = process.env.PORT || 5000;


// var corsOptions = {
//   origin: "http://localhost:8081"
// };


// parse requests of content-type - application/json

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// const Role = db.role;


const server= app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// {
//   user: {
//     id: '61bcf628308cae61f633805f',
//     name: 'amiramir',
//     username: 'amiramir',
//     email: 'amirlimgarbi33@gmail.com'
//   },
//   message: ''
// }

var counter = 15;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", function (data) {
    if (data.message === "start") {
      WinnerCountdown = setInterval(function () {
        io.emit("counter", counter);
        counter--;

        if (counter === 0) {
          io.emit("counter", "bid finished");
          clearInterval(WinnerCountdown);
        }
      }, 1000);
    }

    counter = 15;
    io.emit("counter", counter);
  });

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("SEND_MESSAGE", function (data) {
    io.emit("MESSAGE", data);
  });

  // var c=0

  //   var WinnerCountdown=null
  //     socket.on('message', (msg) => {
  //       if(msg){
  //         if(WinnerCountdown||c){clearInterval(WinnerCountdown)
  //           WinnerCountdown=null
  //         c=0}
  //         var counter = 20;
  //          WinnerCountdown= setInterval(function(){

  //           io.emit('counter', counter);
  //           counter--
  //           c=counter
  //           console.log(c);
  //           if (counter === 0) {
  //             io.emit('counter', "bid finished");
  //             clearInterval(WinnerCountdown);
  //             c=0
  //           }

  //         }, 1000)
  //       }

  //     })
});


// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }

db.mongoose
  .connect(dbConfig.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to auction house application." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

// set port, listen for requests
app.get("/events", (req, res) => {
  Db.event.find().then((result) => {
    res.json(result);
  });
});
app.put(`/closeEvent/:id`, (req, res) => {
  console.log(req.params);
  console.log(req.body);
  Db.event
    .findByIdAndUpdate(req.params.id, { endDate: req.body.date })
    .then((res) => {
      console.log("update done");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/balance", (req, res) => {
  Db.event.findOne().then((result) => {
    res.json(result);
  });
});
app.post("/money", (req, res) => {
  console.log("hihihihihihihihihihihi", req.body);
  Db.event.create(req.body).then((result) => {
    res.json(result);
  });
});
app.post("/create", (req, res) => {
  console.log("oooooooooooooooo", req.body);

  Db.event.create(req.body).then((result) => {
    console.log("event added");
    res.json(result);
  });
});