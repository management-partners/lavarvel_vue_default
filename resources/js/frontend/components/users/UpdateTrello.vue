<template>
  <div id="updatetrello" class="container">
    <div id="updatekeytrello" class="card card-info mx-auto form-shadow">
      <div class="card-header text-center form-header">
        <div class="card-title card-title-ex">
          <h3>Update Trello Token</h3>
        </div>
      </div>
      <div class="card-body form-body">
        <form action class="boder-form">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="ggusername">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input Trello User Name"
              aria-describedby="ggusername"
            />
          </div>

          <div class="form-group text-center">
            <button type="submit" class="btn col-md-5 hbtn hb-fill-right" name="Login">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateTrello",
  components: {}
};
</script>