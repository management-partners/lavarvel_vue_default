<template>
  <div id="updatepassword" class="container">
    <div id="updatepassword" class="card card-info mx-auto form-shadow">
      <div class="card-header text-center form-header">
        <div class="card-title card-title-ex">
          <h3>Update password</h3>
        </div>
      </div>
      <div class="card-body form-body">
        <form action class="boder-form">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="newpassword">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="New passsword"
              aria-describedby="newpassword"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="newpasswordconfirm">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Confirm New passsword"
              aria-describedby="newpasswordconfirm"
            />
          </div>

          <div class="form-group btn-space text-center">
            <button type="submit" class="btn col-md-5 hbtn hb-fill-right" name="Login">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdatePassrod",
  components: {}
};
</script>