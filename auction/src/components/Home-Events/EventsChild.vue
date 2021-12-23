<template>
  <div>
    <NavbarEvent />
    <ul v-for="item in events" :key="item" class="card" style="width: 500px">
      <label>The Seller is :</label>
      <h2 class="card-title">{{ item.ownerid }}</h2>
      <label>The product is : </label>
      <h3 class="card-title">{{ item.title }}</h3>
      <img class="card-img-top" :src="item.img" alt="Product image" />
      <label>Descriptions :</label>
      <h4>{{ item.descriptions }}</h4>
      <label>Event start on :</label>
      <h3 class="card-text">{{ item.StartDate }}</h3>
      <label>The start price :</label>
      <h4 class="card-text">{{ item.startPrice }}DT</h4>
      <label>
        After you click we will check first your balance if you have Adequate
        balance we will send you email to join event</label
      >
      <p>hello</p>

      <!-- <button> 
        <router-link class="nav-link" to="auction">Join to This event</router-link>
        
      </button> -->
      <!-- <button v-on:click="getId(item)"> -->
        <router-link :to="{ name: 'Room', params: { e:JSON.stringify(item)} }">
          Join to event
        </router-link>
      <!-- </button> -->
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import NavbarEvent from "./Navbar-event.vue";

export default {
  name: "EventsChild",

  data() {
    return {
      e:{},
      msg: "",
      events: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/events").then(({ data }) => {
      this.events = data;
    });
  },
  methods: {
    // getId(id) {
    //   this.msg = id;
    //   console.log("hhhhhhhhh",this.msg)
    // },
    // product() {
    //   router.push({name:"Room",params:{title:"item.title"}})
    // }
    // shareData(){
    //    var params={data:this.events};
    //   this.$router.push("/auction",params)
    //   // this.$router.push({name:"/auction",params:{data:this.item}})
    // }
  },
  components: {
    NavbarEvent,
  },
};
</script>

<style></style>
