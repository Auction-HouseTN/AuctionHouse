<template>
  <div>
    <NavbarEvent />
     <div class="allcomponent">
    
        
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Add Event</a></h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">From Here You Can Add</span>
              <form id="stripe-login">
                <div class="field padding-bottom--24">
                  <label for="email">Title</label>
                  <input  type="text"
                  v-model="title"
                  class="form-control"
                  placeholder="Exp: House ,Car ,Watch...">
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">Description</label>
                  <input type="text"
                  v-model="descriptions"
                  class="form-control"
                  placeholder="Describe your product">
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">Image</label>
                  <input type="text"
                  v-model="img"
                  placeholder="Link the url"
                  class="form-control">
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">Price</label>
                  <input  type="text"
                  v-model="money"
                  class="form-control"
                  placeholder="Start Price">
                </div>
                <div class="field padding-bottom--24">
                <label>Date of the Event :</label>
                <input type="datetime-local" v-model="date" ctype="date" />
              </div>
              <div class="field padding-bottom--24">
                <p class="text-center">
                  We will send email to confirm your Product
                </p>
              </div>
                
                <div class="field padding-bottom--24">
                <a
                  href="homeEvents"
                  type="submit"
                  v-on:click="send()"
                  class="btn btn-block mybtn btn-primary tx-tfm"
                  ><input type="submit" name="submit" value="Create your event"></a
                >
              </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div>
 
  
    

   
     <!-- <div class="container">
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
   </div>   -->
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

<style scoped>
* {
  padding: 0;
  margin: 0;
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}
body {
    min-height: 100%;
    background-color: #ffffff;
}
h1 {
    letter-spacing: -1px;
}
a {
  color: #5469d4;
  text-decoration: unset;
}
.login-root {
    background: #fff;
    display: flex;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
}
.loginbackground {
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
}
.flex-flex {
    display: flex;
}
.align-center {
  align-items: center; 
}
.center-center {
  align-items: center;
  justify-content: center;
}
.box-root {
    box-sizing: border-box;
}
.flex-direction--column {
    -ms-flex-direction: column;
    flex-direction: column;
}

.box-divider--light-all-2 {
    box-shadow: inset 0 0 0 2px #e3e8ee;
}
.box-background--blue {
    background-color: #5469d4;
}
.box-background--white {
  background-color: #ffffff; 
}
.box-background--blue800 {
    background-color: #212d63;
}
.box-background--gray100 {
    background-color: #e3e8ee;
}
.box-background--cyan200 {
    background-color: #7fd3ed;
}
.padding-top--64 {
  padding-top: 64px;
}
.padding-top--24 {
  padding-top: 24px;
}
.padding-top--48 {
  padding-top: 48px;
}
.padding-bottom--24 {
  padding-bottom: 24px;
}
.padding-horizontal--48 {
  padding: 48px;
}
.padding-bottom--15 {
  padding-bottom: 15px;
}


.flex-justifyContent--center {
  -ms-flex-pack: center;
  justify-content: center;
}

.formbg {
    margin: 0px auto;
    width: 100%;
    max-width: 900px;
    background: rgb(237, 228, 241);
    border-radius: 4px;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
}
span {
    display: block;
    font-size: 30px;
    line-height: 28px;
    color: #1a1f36;
    margin-bottom: 20px;
}
label {
    margin-bottom: 10px;

}
.reset-pass a,label {
    font-size: medium;
    font-weight: 600;
    display: block;
}
.reset-pass > a {
    text-align: right;
    margin-bottom: 10px;
}
.grid--50-50 {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
}
.text-center{
  margin-top: 20px;
  margin-bottom:30px ;
}

.field input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="submit"] {
    background-color: rgb(84, 105, 212);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, 
                rgb(84, 105, 212) 0px 0px 0px 1px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}
.field-checkbox input {
    width: 20px;
    height: 15px;
    margin-right: 5px; 
    box-shadow: unset;
    min-height: unset;
}
.field-checkbox label {
    display: flex;
    align-items: center;
    margin: 0;
    width: 100%;
}
a.ssolink {
    display: block;
    text-align: center;
    font-weight: 600;
}
.footer-link span {
    font-size: 14px;
    text-align: center;
}
.listing a {
    color: #697386;
    font-weight: 600;
    margin: 0 10px;
}

.animationRightLeft {
  animation: animationRightLeft 2s ease-in-out infinite;
}
.animationLeftRight {
  animation: animationLeftRight 2s ease-in-out infinite;
}
.tans3s {
  animation: animationLeftRight 3s ease-in-out infinite;
}
.tans4s {
  animation: animationLeftRight 4s ease-in-out infinite;
}

@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
} 

@keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
} 
</style>
