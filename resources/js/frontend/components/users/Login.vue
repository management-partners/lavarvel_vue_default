<template>
  <div class="container content-container">
    <div id="login" class="card card-info mx-auto form-shadow">
      <div class="card-header text-center form-header">
        <div class="card-title card-title-ex">
          <h3>Login</h3>
        </div>
      </div>
      <div class="card-body form-body">
        <form action>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="username">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input user name"
              aria-describedby="username"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="password">
                <i class="fas fa-unlock"></i>
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Input password"
              aria-describedby="password"
            />
          </div>

          <div class="form-group text-center">
            <button type="submit" class="btn col-md-5 hbtn hb-fill-right" name="Login">Login</button>
          </div>
          <div class="form-group text-center">
            <router-link to="/forget-password">Forget passord</router-link>
          </div>
          <div class="form-group text-center">
            <router-link to="/register">Register</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {}
};
</script>