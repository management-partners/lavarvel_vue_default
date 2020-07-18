<template>
  <div id="contactus" class="container content-container">
    <div id="contactus" class="card card-info mx-auto form-shadow">
        <div class="card-header text-center form-header">
            <div class="card-title card-title-ex"><h3>Contact Us</h3></div>
        </div>
        <div class="card-body boder-form">
            <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name ※">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email ※">
                </div>
                <div class="form-group">
                    <textarea type="text" class="form-control" rows="5" placeholder="Contact content ※"></textarea>
                </div>
                <div class="form-group text-center">
                    <button type="submit" class="btn btn col-md-5 hbtn hb-fill-right">Sign in</button>
                </div>
                
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "ContactUs",
  components: {}
};
</script>