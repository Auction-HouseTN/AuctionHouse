<template>
<div>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />
  <div>
    <NavbarRegitre />

    <div class="allthecomponent">
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <div class="login">
              <h3 class="loginword">Login</h3>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input v-model="username"
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input v-model="password"
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="button login__submit" v-on:click="login">
                <router-link class="nav-link" to="/">Log In Now</router-link>
                <span class="button__text"></span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <div class="social-login">
              <h3>Register</h3>
              <div class="social-icons">
                <router-link
                  class="social-login__icon fas fa-plus-circle"
                  to="/register"
                ></router-link>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span
              class="screen__background__shape screen__background__shape4"
            ></span>
            <span
              class="screen__background__shape screen__background__shape3"
            ></span>
            <span
              class="screen__background__shape screen__background__shape2"
            ></span>
            <span
              class="screen__background__shape screen__background__shape1"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  username:'',
  password:"",
  user:{},

  methods:{
    login:function(){
      console.log('usename',this.username)
      console.log('password',this.password)
      axios.post("http://localhost:5000/api/auth/signin",{username:this.username,password:this.password}).then((res)=>{
  
        var user=JSON.stringify(res.data)
        console.log(user)
          sessionStorage.setItem('user',user)
   
        
        console.log("session",sessionStorage.getItem('user'))
        
        }
      )}
    }
  }

</script>

<style scoped>
.allthecomponent {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

body {
  background: linear-gradient(90deg, #e0dfe9, #b3b1c7);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.screen {
  background: linear-gradient(90deg, #d4d3d8, #727086);
  position: relative;
  height: 600px;
  width: 430px;
  box-shadow: 0px 0px 24px #5c5696;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #7d74c0, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}
.loginword {
  margin-bottom: 70px;
  font-size: 33px;
  color: #7e7bb9;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 90px;
  padding-bottom: 150px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #7875b5;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #6a679e;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #6a679e;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #7875b5;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875b5;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
/*
*/
.allthecomponent {
  background: linear-gradient(-45deg, #c5c8d9, #c2c4f2, #b1b3da, #b8b9c2);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
  height: 100%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
