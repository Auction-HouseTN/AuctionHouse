<template>
  <div>
    <NavbarEvent />


    <div class="container">
      <div class="card">
        <div class="form">
          <div class="left-side">
            <div class="sign-up s_form">
              <div class="main active">
                <div class="heading">
                  <h2>The Event Screen</h2>
                </div>
                <h2 id="titleoftheitem">{{ welcome.title }}</h2>
                <div>
                  <h1 v-if="winner" class="block-effect" style="--td: 1.2s">
                    <div class="block-reveal" style="--bc: #4040bf; --d: 0.1s">
                      Congratulation the winner is:
                    </div>
                    <div class="block-reveal" style="--bc: #bf4060; --d: 0.5s">
                      " {{ winner }} "
                    </div>
                  </h1>
                </div>
                <div class="or">
                  <h3 v-if="counter">Time :{{ counter }}</h3>
                </div>
                <tr v-if="currentBidValue">
                  <h2 id="currentbid">
                    <td>
                      Current Bid Amount <br />
                      {{ currentBidValue }} Dt
                    </td>
                  </h2>
                </tr>

                <div class="input-text">
                  <input
                    type="text"
                    v-model="newMessage"
                    placeholder="Enter your name"
                    id="user-name"
                    require
                  />
                </div>

                <div class="buttons first">
                  <button class="sign_up_here" @click="sendMessage">
                    bid now
                  </button>
                </div>
              </div>
              <ul class="messages">
                <li v-for="load in loadList" :key="load.message">
                  {{ load.user }} bid: {{ load.message }} Dt
                </li>
              </ul>
            </div>
          </div>
          <div class="right-side">
            <div class="cover_image">
              <div class="chatgroup">
                <div class="card-body">
                  <div class="card-title">
                    <h3 id="chatgrouptitle">Chat Group</h3>
                    <hr />
                  </div>
                  <div class="card-body">
                    <div class="messages"></div>
                  </div>
                </div>
                <div>
                  <form @submit.prevent="chat">
                    <h1 v-if="load">{{ load.user }}</h1>

                    <div class="gorm-group pb-3">
                      <div v-for="(mess, i) in messages" :key="i">
                        <div class="container">
                          <div class="row">
                            <div class="col-8">
                              <div class="card card-white post">
                                <div class="post-description">
                                  <p>
                                    {{ mess.user }} said : {{ mess.message }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="text"
                        v-model="message"
                        placeholder="message"
                        class="form-control"
                      />
                    </div>
                    <button type="submit" class="sendmsg">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import NavbarEvent from "./Navbar-event.vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "Room",
  props: ["e"],

  components: { NavbarEvent },
  data() {
    return {
      loadList: [],
      newMessage: "",
      user: "",
      winner: "",
      counter: 1,
      currentBidValue: 0,

      message: "",
      messages: [],
      socket: io("localhost:5000"),

      welcome: {},
    };
  },


  methods: {
    chat(e) {
      e.preventDefault();
      var us = JSON.parse(sessionStorage.getItem("user"));
      this.user = us.username;
      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        message: this.message,
      });
      this.message = "";
    },

    sendMessage(e) {
      e.preventDefault();
      if (
        Number(this.newMessage) > this.currentBidValue ||
        this.newMessage === "start"
      ) {
        var us = JSON.parse(sessionStorage.getItem("user"));
        this.user = us.username;
        this.socket.emit("message", {
          user: this.user,
          message: this.newMessage,
        });
      }
      this.message = "";
    },
  },

  mounted() {
    if (this.e) {
      this.welcome = JSON.parse(this.e);

      this.currentBidValue = this.welcome.startPrice;
    }

    this.socket.on("MESSAGE", (data) => {
      this.messages = [...this.messages, data];
      //or this.messages.push(data)
      console.log(this.messages);
    });

    this.socket.on("message", (load) => {
      console.log("load", load);
      if (load) {
        if (Number(load.message) > this.currentBidValue) {
          this.loadList = [load, ...this.loadList];
          this.currentBidValue = Number(load.message);
        }
      }
    });
    this.socket.on("counter", (counter) => {
      this.counter = counter;
      if (counter === 1) {
        this.winner = this.loadList[this.loadList.length - 1].user;
        var current = moment().format();
        var id = this.welcome._id;

        axios
          .put(`http://localhost:5000/closeEvent/${id}`, { date: current })
          .then((data) => {
            console
              .log("update request", data)
              .catch((err) => console.log(err));
          });
      }
    });
  },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

* {
  padding: 0;
  margin: 0;
}

.container {
  margin-left: 85px;
  margin-top: 20px;
}

.container .card {
  height: 70%;
  width: 100%;
  background-color: #fff;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.container .card .form {
  width: 100%;
  height: 100%;
  display: flex;
}

.container .card .left-side {
  width: 60%;
  background-color: #fff;
  height: 100%;
}
#chatgrouptitle {
  margin-bottom: 30px;
  margin-top: 30px;
}

.main {
  display: none;
}

.main_login {
  display: none;
}

.active {
  display: block !important;
}

.d-none {
  display: none;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.heading h2 {
  color: #5469d4;
  text-decoration: unset;
  font-weight: 900;
  margin-bottom: 17px;
}
#titleoftheitem {
  margin-bottom: 10px;
}
#currentbid {
  margin-left: 180px;
}
.messages {
  margin-top: 20px;
  font-size: 20px;
}

.social {
  display: flex;
  justify-content: center;
}
.form-control {
  margin-top: 250px;
}

.social span {
  height: 30px;
  width: 30px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 3px;
  cursor: pointer;
}

.social span i {
  color: #000;
  font-size: 15px;
  text-align: center;
  margin-top: 3px;
}

.or {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 30px;
}

.input-text {
  padding: 0 40px;
  margin: 20px 0;
  position: relative;
}

input[type="text"] {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 40px;
  border: none;
  outline: 0;
  border: 1px solid #c6d9df;
  background-color: #f7f8f9;
  border-radius: 5px;
}

input[type="password"] {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 40px;
  border: none;
  outline: 0;
  border: 1px solid #c6d9df;
  background-color: #f7f8f9;
  border-radius: 5px;
  padding-right: 30px;
}

select {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 40px;
  border: none;
  outline: 0;
  border: 1px solid #c6d9df;
  background-color: #f7f8f9;
  border-radius: 5px;
}

.fa-eye-slash {
  position: absolute;
  top: 13px;
  right: 50px;
  cursor: pointer;
}

.fa-eye {
  position: absolute;
  top: 13px;
  right: 50px;
  cursor: pointer;
}

.terms {
  position: relative;
  display: flex;
  padding-left: 40px;
}

.terms span {
  margin-right: 5px;
  margin-top: -2px;
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.terms span i {
  color: #fff;
}

.terms p {
  font-size: 12px;
  font-weight: 700;
}

.terms p a {
  color: red;
  text-decoration: none;
}

.buttons {
  margin-top: 30px;
  padding: 0 40px;
  display: flex;
  gap: 20px;
}

.buttons button {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: 0;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.buttons button:nth-child(1) {
  background-color: #5469d4;
  color: #fff;
}
.sendmsg {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: 0;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  background-color: #5469d4;
  color: #fff;
}

.first {
  margin-top: 70px;
}

.final-submit {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}

.final-submit p {
  font-size: 14px;
  font-weight: 800;
}

.warning {
  border: 1px solid red !important;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }

  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}


@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}

.container .card .right-side {
  width: 40%;
  background-color: #ffffff;
  height: 100%;
}
.right-side {
  border-left: 1px solid rgb(243, 224, 224);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.cover_image {
  position: relative;
}

.cover_image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

@media (max-width: 750px) {
  .container .card {
    max-width: 350px;
  }

  .container .card .right-side {
    display: none;
  }

  .container .card .left-side {
    width: 100%;
  }
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  min-height: 100vh;
  padding: 20px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* other */
.info {
  margin: 20px 0;
  text-align: center;
}

p {
  color: #2e2e2e;
  margin-bottom: 20px;
}

/* block-$ */
.block-effect {
  font-size: calc(8px + 6vw);
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: "";

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards,
    revealingOut var(--td) var(--t) forwards;
}

/* animations */
@keyframes revealBlock {
  100% {
    color: #0f0f0f;
  }
}

@keyframes revealingIn {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes revealingOut {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}

.abs-site-link {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: hsla(0, 0%, 0%, 0.6);
  font-size: 16px;
}

/*
//////////////////////*/
body {
  background-color: #f4f7f6;
  margin-top: 20px;
}
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}

.chat .chat-history {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-bottom: 2px solid #fff;
}

.chat .chat-history ul {
  padding: 0;
}

.chat .chat-history ul li {
  list-style: none;
  margin-bottom: 30px;
}

.chat .chat-history ul li:last-child {
  margin-bottom: 0px;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}

.chat .chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: #444;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}

.chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .my-message {
  background: #efefef;
}

.chat .chat-history .my-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #efefef;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .other-message {
  background: #e8f1f3;
  text-align: right;
}

.chat .chat-history .other-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
}

.chat .chat-message {
  padding: 20px;
}

.online,
.offline,
.me {
  margin-right: 2px;
  font-size: 8px;
  vertical-align: middle;
}

.online {
  color: #86c541;
}

.offline {
  color: #e47297;
}

.me {
  color: #1d8ecd;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

@media only screen and (max-width: 767px) {
  .chat-app .people-list {
    height: 465px;
    width: 100%;
    overflow-x: auto;
    background: #fff;
    left: -400px;
    display: none;
  }
  .chat-app .people-list.open {
    left: 0;
  }
  .chat-app .chat {
    margin: 0;
  }
  .chat-app .chat .chat-header {
    border-radius: 0.55rem 0.55rem 0 0;
  }
  .chat-app .chat-history {
    height: 300px;
    overflow-x: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .chat-app .chat-list {
    height: 650px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: 600px;
    overflow-x: auto;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .chat-app .chat-list {
    height: 480px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>
