<template>
  <div class="allcomponent">
    <NavbarEvent />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div v-for="item in events" :key="item" id="container">
      <div class="product-details">
        <h1>{{ item.title }}</h1>

        <p class="information">start's {{ getTime(item.StartDate) }}</p>
      

        <div class="control" >
          <button class="btn" :disabled="disableTimer(item.StartDate,item.endtDate)">
            <span class="price">{{ item.startPrice }}Dt</span>
            <span class="shopping-cart"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></span>
            <router-link
            style="text-decoration: none; color: inherit;"
              class="buy"
              :to="{ name: 'Room', params: { e: JSON.stringify(item) } }"
              >Join Auction</router-link
            >
          </button>
        </div>
      </div>

      <div class="product-image">
        <img :src="item.img" alt="Product image" />

        <div class="info">
          <h2>Info</h2>
          <ul>
            <li><strong>owner : </strong>{{ item.ownerid }}</li>
            <li><strong>Date : </strong>{{ item.StartDate }}</li>
          </ul>
        </div>
      </div>
    </div>










    <!--<ul v-for="item in events" :key="item" class="card" style="width: 500px">
      <label>The Seller is :</label>
      <h2 class="card-title">{{ item.ownerid }}</h2>
      <label>The product is : </label>
      <h3 class="card-title">{{ item.title }}</h3>
      <img class="card-img-top" :src="item.img" alt="Product image" />
      <label>Descriptions :</label>
      <h4>{{ item.descriptions }}</h4>
      <label>Event start in :</label>
      <h3 class="card-text"> {{getTime(item.StartDate)}} </h3>
      <label>The start price :</label>
      <h4 class="card-text">{{ item.startPrice }}DT</h4>
      <label>
        After you click we will check first your balance if you have Adequate
        balance we will send you email to join event</label
      >
      <button>
        <router-link class="nav-link" to="/auction"
          >Join to This event</router-link
        >
      </button>
    </ul>-->
    <!-- <p>hello</p>-->

    <!-- <button> 
        <router-link class="nav-link" to="auction">Join to This event</router-link>
        
      </button> -->
    <!-- <button v-on:click="getId(item)">
        <router-link :to="{ name: 'Room', params: { e:JSON.stringify(item)} }">

          Join to event
        </router-link> -->
    <!-- </button> 

    </ul>-->
  </div>
</template>

<script>
import axios from "axios";
import NavbarEvent from "./Navbar-event.vue";
import moment from "moment";
export default {
  name: "EventsChild",

  data() {
    return {
      e: {},
      msg: "",
      events: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/events").then(({ data }) => {
      this.events = data;
      console.log(this.events);
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
    getTime(time) {
      return moment(time).fromNow();
    },
    
    disableTimer(time,end){
      
      if(time>moment().format()||end!==undefined){return true}
      
      else return false
   
    }
  },
  components: {
    NavbarEvent,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap");

.allcomponent{
  background-image: url("https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#container {
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  margin-top: 14%;
  height: 350px;
  width: 700px;
  background-color:rgba(248, 232, 253, 0.9);
}


.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
}

#container .product-details h1 {
  font-family: "Bebas Neue", cursive;
  display: inline-block;
  position: relative;
  font-size: 35px;
  color: #344055;
  margin-bottom: 30px;
  margin-left: 20px;
}

#container .product-details h1:before {
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  transform: translate(25px, -15px);
  font-family: "Bree Serif", serif;
  display: inline-block;

  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: white;
  margin: 0;
  animation: chan-sh 6s ease infinite;
}


#container .product-details > p {
  font-family: "EB Garamond", serif;
  text-align: center;
  font-size: 30px;
  color: #0d0d0d;
}
.control {
  position: absolute;
  bottom: 20%;
  left: 22.8%;
}
.btn {
  transform: translateY(0px);
  transition: 0.3s linear;
  
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: rgb(98, 106, 107);
  padding: 0;
  margin: 0;
}

.btn:hover {
  transform: translateY(-6px);
  background: #595b5f;
}

.btn span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
}
.btn .price,
.shopping-cart {
  background: #333;
  border: 0;
  margin: 0;
}

.btn .price {
  transform: translateX(-10%);
  padding-right: 15px;
}


.btn .shopping-cart {
  transform: translateX(-100%);
  position: absolute;
  background: #333;
  z-index: 1;
  left: 0;
  top: 0;
}

.btn .buy {
  z-index: 3;
  font-weight: bolder;
  
  
}

.btn:hover .price {
  transform: translateX(-110%);
}

.btn:hover .shopping-cart {
  transform: translateX(0%);
}

.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 45%;
  display: inline-block;
  margin-left: 105px;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Bree Serif", serif;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.8;
  text-align: left;
  font-size: 105%;

  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}
/*/////////////////
backgroung
/////////////////////*/

/*//////////////////////
navbar
//////////////////////////*/

.wrapper {
  position: fixed;
  top: 0;
  /*left: -100%;*/
  right: -100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #68788c, #979da6, #f2eeb3, #f2d64b);
  opacity: 0.8;
  /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
  /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);*/
  transition: all 0.6s ease-in-out;
}
#active:checked ~ .wrapper {
  /*left: 0;*/
  right: 0;
}
.menu-btn {
  position: absolute;
  z-index: 2;
  right: 20px;
  /*left: 20px; */
  top: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  /*color: #fff;*/
  /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
  /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
  transition: all 0.3s ease-in-out;
}
.menu-btn span,
.menu-btn:before,
.menu-btn:after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid #000;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-btn:before {
  transform: translateY(-8px);
}
.menu-btn:after {
  transform: translateY(8px);
}

.close {
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
}

/* closing animation */
#active:checked + .menu-btn span {
  transform: scaleX(0);
}
#active:checked + .menu-btn:before {
  transform: rotate(45deg);
  border-color: #fff;
}
#active:checked + .menu-btn:after {
  transform: rotate(-45deg);
  border-color: #fff;
}
.wrapper ul {
  position: absolute;
  top: 60%;
  left: 45%;
  height: 90%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li {
  height: 10%;
}
.wrapper ul li a {
  text-decoration: none;
  font-size: 35px;
  font-weight: 500;
  padding: 5px 30px;
  color: rgb(0, 0, 0);
  border-radius: 50px;
  position: absolute;
  line-height: 50px;
  margin-top: 30px;
  opacity: 0;
  width: 400px;
  transition: all 0.3s ease;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.wrapper ul li a:after {
  position: absolute;
  content: "";
  background: #fff;
  /*background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);*/
  /*background: linear-gradient(375deg, #1cc7d0, #2ede98);*/
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  transition: transform 0.3s ease;
}
.wrapper ul li a:hover:after {
  transform: scaleY(1);
}
.wrapper ul li a:hover {
  color: #1a73e8;
}
input[type="checkbox"] {
  display: none;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}
.content .title {
  font-size: 40px;
  font-weight: 700;
}
.content p {
  font-size: 35px;
  font-weight: 600;
}

#active:checked ~ .wrapper ul li a {
  opacity: 1;
}
.wrapper ul li a {
  transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateX(100px);
}
#active:checked ~ .wrapper ul li a {
  transform: none;
  transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1); /* easeOutBackを緩めた感じ */
  transition-delay: 0.6s;
  transform: translateX(-100px);
}
/*

////////////////////////
*/

</style>
