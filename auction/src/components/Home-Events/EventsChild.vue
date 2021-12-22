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
        balance we will send you email to join event</label>
        <button  ><router-link class="nav-link " to='/auction'>Join to This event</router-link></button>
         
      
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import NavbarEvent from "./Navbar-event.vue";

export default {
    name: "EventsChild",
    component: {},
    
    
    data() {
        return {
            array: ["hello", "hii", "back"],
            events: [],
        };
    },
    mounted() {
        axios.get("http://localhost:5000/events").then(({ data }) => {
            this.events = data;
            console.log("pppppppp", this.events);
        });
    },
    methods: {},
    components: { NavbarEvent }
};
</script>

<style></style>
