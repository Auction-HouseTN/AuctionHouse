<template>
  <div>
    <NavbarEvent />
    <button v-on:click="pay(1000)">Buy 1000DT</button><br>
    <button v-on:click="pay(10000)">Buy 10000DT </button><br>
    <button v-on:click="pay(100000)">Buy 100000DT</button>
  </div>
  
</template>

<script>
import NavbarEvent from "./Navbar-event.vue";

// import axios from "axios";
export default {
  name: "Buy",

  components: { NavbarEvent },
  data() {
    return {
      publicKey:
        "pk_test_51KAJlaHCkVRXX2YEoKKBzheHwz5wxxcDYyhXdmcFlGJgSQIkAn9OPSeHBQQNgUSlsU2hOG8HKRDzdy4L0lkAqBez00aqJr5abu",
    };
  },
  beforeMount() {
    if (!window.document.getElementById("stripe-script")) {
      let stripeScript = document.createElement("script");
      stripeScript.setAttribute(
        "src",
        "https://checkout.stripe.com/checkout.js"
      );
      document.head.appendChild(stripeScript);
    }
  },
  methods: {
    pay(orderPrice) {
      var handler = window.StripeCheckout.configure({
        key: this.publicKey,
        locale: "auto",
        token: function (token) {
          console.log(token);
          alert("The Operation done check your balance now!!");
        },
      });

      handler.open({
        name: "Auction House Transfert",
        description: "Welcome To Community",
        amount: orderPrice ,
      });
    },
  },
};
</script>

<style></style>
