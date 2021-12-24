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
  <div class="block-reveal" style="--bc: #4040bf; --d: .1s"> Congratulation the winner is:</div>
  <div class="block-reveal" style="--bc: #bf4060; --d: .5s">" {{ winner }} "</div>
</h1>
                  <!-- <h1 >
                    Congratulation the winner is:<br />" {{ winner }} "
                  </h1>-->
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
                  {{ load.message }} Dt
                </li>
              </ul>
            </div>
          </div>
          <div class="right-side">
            <div class="cover_image">
              <h2>aaaaaaaaa</h2>
              <h2>aaaaaaaaa</h2>
              <h2>aaaaaaaaa</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>hhhhhhhhhhhhhhh</h2>
              <h2>aaaaaaaaaaaaa</h2>
              <h2>aaaaaaaaaaaaa</h2>
              <!-- <img src="https://imgur.com/TTmJuFD.jpg" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
       <h1>{{welcome.title}}</h1>
    </div>
    <div>
      <h1>The Event Screen</h1>
      <h1></h1> 
      <div>
        <h1 v-if="winner">
          Congratulation the winner is:<br />" {{ winner }} "
        </h1>
        <h3 v-if="counter">Time :{{ counter }}</h3>

        <tr v-if="currentBidValue ">
          <h2>
            <td>
              Current Bid Amount <br />
              {{ currentBidValue }}
            </td>
          </h2>
        </tr>

        <input v-model="newMessage" />
        <button class="btn btn-primary" @click="sendMessage">Bid Now</button>

        <ul>
          <li v-for="load in loadList" :key="load.message">
            {{ load.message }}
          </li>
        </ul>
      </div>
    </div>  -->

    <!-- <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Chat Group</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages">
                  
              </div>
          </div>
      </div>
      <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <div class="gorm-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
      </div>
  </div> -->
  </div>
</template>

<script>
import io from "socket.io-client";
import NavbarEvent from "./Navbar-event.vue";
import axios from "axios";
import moment from "moment"
export default {
  name: "Room",
  props: ["e"],
  data() {
    return {
      loadList: [],
      newMessage: "",
      user: "Ghassen",
      winner: "",
      counter: 1,
      currentBidValue: 0,
      // user: '',
      //     message: '',
      //     messages: [],
      socket: io("localhost:5000"),
       welcome:{},
      
     
    };
  },

  methods: {
    sendMessage(e) {
      // e.preventDefault();
      // this.socket.emit("SEND_MESSAGE", {
      //   user: this.user,
      //   message: this.message,
      // });
      // this.message = "";
      e.preventDefault();
      if (
        Number(this.newMessage) > this.currentBidValue ||
        this.newMessage === "start"
      ) {
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
            this.welcome = JSON.parse(this.e) 
            this.currentBidValue=this.welcome.startPrice
            
        }

        
        
       


    // this.socket.on('MESSAGE', (data) => {
    //     this.messages = [...this.messages, data];
    //     // you can also do this.messages.push(data)
    //     console.log(this.messages);
    this.socket.on("message", (load) => {
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
        var current=moment().format()
        var id=this.welcome._id
        
         axios.put(`http://localhost:5000/closeEvent/${id}`, {date:current}).then((data) => {
        console.log('update request',data).catch(err=>console.log(err))
      });
      }
    });
  },
  components: { NavbarEvent },
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
  margin-top: 30px;
}

.heading h2 {
 color: #5469d4;
  text-decoration: unset;
  font-weight: 900;
  margin-bottom: 50px;
}
#titleoftheitem{
  margin-bottom: 30px;
}
#currentbid{
  margin-left:180px;
}
.messages{
  margin-top: 20px;
  font-size:40px
}

.social {
  display: flex;
  justify-content: center;
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
.right-side{
  outline: 1px solid red;
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

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  content: '';

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
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
  color: hsla(0, 0%, 0%, .6);
  font-size: 16px;
}
</style>
