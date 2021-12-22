<template>
  <div>
    <div>
      <NavbarRegitre />
    </div>
    <div class="container d-flex justify-content-center my-5">
      <div class="container p-3 my-3">
        <div class="row">
          <div class="col">
            <h2>Register</h2>
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                  id="name"
                  required
                  minlength="8"
                />
              </div>
              <div class="form-group">
                <label for="username">Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your username"
                  id="username"
                  required
                  minlength="8"
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email address"
                  id="email"
                  required
                  email
                />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter your password"
                  id="password"
                  required
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                />
              </div>
              <div class="form-group col-md-6 fseven py-3">
                <button type="butoon" class="btn btn-primary">Submit</button>
              </div>
            </form>
            <div class="row rfour">
              <div class="form-group col-md-6 feight py-3">
                <p class="text-muted">
                  Already have an account?<br /><a href="#">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarRegitre from "./Navbar-regitre.vue";
export default {
  name: "Registre",
  components: { NavbarRegitre },
};
</script>

<style></style>
