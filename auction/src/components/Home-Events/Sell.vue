<template>
  <div>
    <NavbarEvent />
    <button v-on:click="pay(1000)">Sell 1000 Coins</button><br>
    <button v-on:click="pay(10000)">Sell 10000 Coins </button><br>
    <button v-on:click="pay(100000)">Sell 100000 Coins</button>
  </div>
  
</template>

<script>
import NavbarEvent from "./Navbar-event.vue";
export default {
  name: "Sell",
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
