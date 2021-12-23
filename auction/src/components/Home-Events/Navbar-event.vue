<template>

 <div class="nav">
        <div class="container">
            <div class="logo">
                 <router-link class="logo" to='/'>Auction House </router-link>
            </div>
            <div class="main_list" id="mainListDiv">
                <div class="topnav">
                    <ul id="myUL">
                    <li id="tomars">
                    <router-link to='/'>Home </router-link>
                    </li>
                    <li id="tojupiter">
                    <router-link to='/create'>Create </router-link>
                    </li>
                    <li id="tomoon">
                    <router-link to='/buy'>Buy Coins</router-link>
                    </li>
                    <li id="bo">
                     <router-link to='/sell'>Sell Coins</router-link>
                    </li>
                    <li id="bo">
                     <router-link to='/aboutus'>About us</router-link>
                    </li>
                    <li id="bo">
                     <router-link to='/login'>Log out</router-link> 
                    </li>
                 </ul>
                </div>
            </div>    
        </div>
    </div>


    <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link " to='/'>Home Events</router-link>
            
          </li>
        
         
          <li class="nav-item">
             <router-link class="nav-link " to='/create'>Create Events</router-link>
            <a class="nav-link" href="/create"></a>
          </li>
         
      
          <li class="nav-item">
            <router-link class="nav-link " to='/buy'>Buy Coins</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link " to='/sell'>Sell Coins</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/aboutus'>About us</router-link> 
          </li>
         <li class="nav-item">
            <router-link class="nav-link" to='/register'>Go==></router-link> 
          </li>
          
        </ul>
        
          
             <h3 class="nav-item" class="nav-link" >My Balance is {{this.data}} </h3> 
            <h3  class="profilName" > 🟢 </h3>    
      </div>
    </div>
  </nav>-->
</template>
<script>
export default {
    name: "NavbarEvents",
    mounted(){
     
    },
    
}
</script>
<style scoped>
.nav{
      width: 100%;
    height: 65px;
    line-height: 65px;
    text-align: center;
    box-shadow: 2px 5px 3px rgba(0, 0, 0, 0.2);
    z-index: 10;
    background-color:#BFBFBF;
    
}

.nav div.logo{
    width: 250px;
    height: 50px;
    position: absolute;

}

.nav div.logo a{
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 1.8em;
    color:#0D0D0D;
   

}

.nav div.logo a:hover {
    color: #97959A;
}

.nav div.main_list{
    width: 600px;
    height: 95px;
    float: right;
}

.nav div.main_list ul{
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
}

.nav div.main_list ul li{
    width: 150px;
    height: 65px;
}

.nav div.main_list ul li a{
    text-decoration: none;
    color: rgb(255, 255, 255);
    line-height: 65px;
    text-transform: uppercase;
    color:#0D0D0D;
}

.nav div.main_list ul li a:hover{
    color: #97959A;
}
#myUL{

}
</style>