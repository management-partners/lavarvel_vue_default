<template>
  <div id="forgetpassword" class="container">
    <div id="forgetpassword" class="card card-info mx-auto form-shadow">
      <div class="card-header text-center form-header">
        <div class="card-title card-title-ex">
          <h3>Forget Password</h3>
        </div>
      </div>
      <div class="card-body form-body">
        <form action>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="email">
                <i class="fas fa-at"></i>
              </span>
            </div>
            <input type="email" class="form-control" placeholder="Email" aria-describedby="email" />
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn hbtn hb-fill-right col-md-5" name="Login">Get Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgetPassword",
  components: {}
};
</script>