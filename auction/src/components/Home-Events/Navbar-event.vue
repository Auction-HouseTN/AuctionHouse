<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
        
          
            <!-- <h3 class="nav-item" class="nav-link" >My Balance is {{this.data}} </h3> -->
            <h3  class="profilName" >{{profilName}} 🟢 </h3>    
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name: "NavbarEvents"
}
</script>
<style>

</style>