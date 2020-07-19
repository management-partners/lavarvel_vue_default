<template>
  <div id="register" class="container">
    <div id="register" class="card card-info mx-auto form-shadow">
      <div class="card-header text-center form-header">
        <div class="card-title card-title-ex">
          <h3>Register</h3>
        </div>
      </div>
      <div class="card-body form-body">
        <form action class="boder-form">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="username">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="User name"
              aria-describedby="username"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="fullname">
                <i class="fas fa-user-secret"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Full name"
              aria-describedby="fullname"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="email">
                <i class="far fa-envelope"></i>
              </span>
            </div>
            <input type="email" class="form-control" placeholder="Email" aria-describedby="email" />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="password">
                <i class="fas fa-unlock-alt"></i>
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-describedby="password"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="passwordConfirm">
                <i class="fas fa-unlock"></i>
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Password Confirm"
              aria-describedby="passwordConfirm"
            />
          </div>

          <div class="form-group btn-space">
            <button type="submit" class="btn col-md-5 hbtn hb-fill-right" name="Login">Registration</button>
            <button
              type="reset"
              class="btn btn-light col-md-5 float-right hbtnCancel hbCancel-fill-right"
              name="Cancel"
            >Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  components: {}
};
</script>