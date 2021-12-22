<template>
<div>
  <NavbarEvent/>
<div>
    <h1>The Event Screen</h1>

    <div>
      <h1 v-if="winner">Congratulation the winner is:<br />" {{ winner }} "</h1>
      <h3 v-if="counter">Time :{{ counter }}</h3>

      <tr v-if="loadList[0]">
        <h2>
          <td>
            The Greatest Bid <br />
            {{ loadList[0].message }}
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
  </div>
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
export default {
    name: "Room",
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
            if (Number(this.newMessage) > this.currentBidValue ||
                this.newMessage === "start") {
                this.socket.emit("message", {
                    user: this.user,
                    message: this.newMessage,
                });
            }
            this.message = "";
        },
    },
    mounted() {
        // this.socket.on('MESSAGE', (data) => {
        //     this.messages = [...this.messages, data];
        //     // you can also do this.messages.push(data)
        //     console.log(this.messages);
        this.socket.on("message", (load) => {
            if (load) {
                if (Number(load.message) > this.currentBidValue) {
                    this.loadList = [load,...this.loadList];
                    this.currentBidValue = Number(load.message);
                    console.log(this.loadList);
                }
            }
        });
        this.socket.on("counter", (counter) => {
            this.counter = counter;
            if (counter === 1) {
                this.winner = this.loadList[this.loadList.length - 1].user;
            }
        });
    },
    components: { NavbarEvent }
};
</script>

<style></style>
