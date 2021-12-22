<template>
<div>
    <NavbarRegitre/>
<div class="container p-3 my-3">
    <div class="row">
        <div class="col">
            <h2>Login</h2>
            <form >
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input type="text" class="form-control" placeholder="Enter your username" id="username"  name="username" >
                 
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter your password" id="password" required  name="password" >
                   
                </div>
                <button type="submit" class="btn btn-primary" >Login</button>
              </form>
        </div>
    </div>
</div>
</div>

  
</template>

<script>
import NavbarRegitre from "./Navbar-regitre.vue";
export default {
    name: "Login",
    components: { NavbarRegitre }
}
</script>

<style>

</style>