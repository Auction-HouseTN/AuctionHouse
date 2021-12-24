<template>
  <div>
    <NavbarEvent />
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div id="first">
            <div class="myform form">
              <div class="logo mb-3">
                <div class="col-md-12 text-center">
                  <h1>Create New Event</h1>
                </div>
              </div>

              <div class="form-group">
                <label>Add The title of your product</label>
                <input
                  type="text"
                  v-model="title"
                  class="form-control"
                  placeholder="Exp: House ,Car ,Watch..."
                />
              </div>
              <div class="form-group">
                <label>Descriptions</label>
                <input
                  type="text"
                  v-model="descriptions"
                  class="form-control"
                  placeholder="Describe your product"
                />
              </div>
              <div class="form-group">
                <label>Add Images of your products</label>
                <input
                  type="text"
                  v-model="img"
                  placeholder="Link the url"
                  class="form-control"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">DT</span>
                </div>
                <input
                  type="text"
                  v-model="money"
                  class="form-control"
                  placeholder="Start Price"
                />
                <div class="input-group-append">
                  <span class="input-group-text">.000</span>
                </div>
              </div>
              <div class="form-group">
                <label>Date of the Event :</label>
                <input type="datetime-local" v-model="date" ctype="date" />
              </div>
              <div class="form-group">
                <p class="text-center">
                  We will send email to confirm your Product
                </p>
              </div>
              <div class="col-md-12 text-center">
                <a
                  href="homeEvents"
                  type="submit"
                  v-on:click="send()"
                  class="btn btn-block mybtn btn-primary tx-tfm"
                  >Create your event</a
                >
              </div>
              <div class="col-md-12">
                <div class="login-or">
                  <hr class="hr-or" />
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
import axios from "axios";
import NavbarEvent from "./Navbar-event.vue";

export default {
  name: "CreateEvents",
  component: {},
  data() {
    return {
      title: "",
      descriptions: "",
      img: "",
      money: "",
      date: "",
      body: {},
    };
  },
  methods: {
    send() {
     
      var body = {
        title: this.title,
        descriptions: this.descriptions,
        img: this.img,
        startPrice: this.money,
        StartDate: this.date,
      };
      console.log(body);
      axios.post("http://localhost:5000/create", body).then((data) => {
        console.log(data);
      });
    },
  },
  components: { NavbarEvent },
};
</script>

<style></style>
