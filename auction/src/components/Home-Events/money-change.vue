<template>
<div>
<NavbarEvent />
<h1 >Welcome In our Auction House</h1>
<div class="navbar navbar-expand-sm bg-dark navbar-dark">
  
  
  <h3 style="color:white">
    What Is an Auction House?<br>
    An auction house is a company that facilitates the buying and selling of
    assets, such as works of art and collectibles. An auction house may
    sometimes refer to the facility that an auction is taking place in, most
    commonly refers to the company running the auction....
  </h3>
</div>
<div class="container">
  <h2 class="mt-5 mb-4">By coints to enjoy in the events</h2>
 
  <div class="container mt-5">
    <h2>Stripe Checkout</h2>
    <div class="row mt-5">
      <div class="col-md-4">
        <button @click="handlertwo(1000,1000)"  class="btn btn-primary btn-block">Pay 1000DT</button>
      </div>
      <div class="col-md-4">
        <button @click="handlertwo(10000,10000)"   class="btn btn-success btn-block">Pay 10000DT</button>
      </div>
      <div class="col-md-4">
        <button @click="handlertwo(100000,100000)"   class="btn btn-info btn-block">Pay 100000DT</button>
      </div>    
    </div>
    
  </div>
  <div class="card" style="width: 500px">
   
    <h4 class="card-title">Ghaoui Bechir</h4>
    <p class="card-text">My Balance is : 0DT</p>
    <a href="homeEvents" class="btn btn-primary">Let Join to Events</a>
  </div>
</div>

</div>
</template>

<script>
import axios from "axios";
import NavbarEvent from "./Navbar-event.vue";
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  name: 'moneyChange',
  data(){
    return {
      amount :1,
    //  handler:1,
      StripeCheckout,
    }
  },
  rules: {
  "vue/no-unused-components": "off"
},

  props: {
    
  },
  components:{
   
    NavbarEvent,
    
  },
  methods:{
    fetchData(){
      this.loadStripe();
    },
    loadStripe() {
      
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
},
money:function(e){
  var money={balance:e}
  console.log("money",money)
  axios.post('http://localhost:5000/money',money)
  .then((myBalance)=>{
    console.log("balance",myBalance.data);})

 },
 pay:function(amount) {  
   console.log("==>",amount) 
  //  console.log("==>handler",handler) 
  //  var handler = (window).StripeCheckout.configure({
  //     key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
  //     locale: 'auto',
  //     token: function (token) {
  //       // You can access the token ID with `token.id`.
  //       // Get the token ID to your server-side code for use.
  //       console.log(token)
  //       alert('Token Created!!');
  //     }
  //   });

  },
  handlertwo:function(arg1,arg2){
this.money(arg1);
this.pay(arg2);
 }
}
}
</script>

<style>

</style>