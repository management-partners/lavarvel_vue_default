<template>
  <div class="container content-container">
    <div id="updateprofile" class="card card-info mx-auto form-shadow">
      <div class="card-header text-center form-header">
        <div class="card-title card-title-ex">
          <h3>Update profile</h3>
        </div>
      </div>
      <div class="card-body form-body">
        <form action class="boder-form">
          <div class="input-group mb-3">
            <div id="file" class="input-group">
              <div class="custom-file">
                <input type="file" id="cutomfile" class="custom-file-input" name="cutomfile" />
                <label class="custom-file-label" for="customfile" data-browse="参照">ファイル選択...</label>
              </div>
              <div class="input-group-append">
                <button type="button" class="btn btn-outline-secondary reset">取消</button>
              </div>
            </div>
          </div>

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
              <span class="input-group-text theme-input-group" id="birthday">
                <i class="far fa-calendar-alt"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="birthday"
              aria-describedby="birthday"
            />
          </div>

          <div class="input-group mb-3">
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="male" name="sex" class="custom-control-input" />
              <label class="custom-control-label" for="male">Male</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="female" name="sex" class="custom-control-input" />
              <label class="custom-control-label" for="female">Female</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="other" name="sex" class="custom-control-input" />
              <label class="custom-control-label" for="other">Other</label>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="postcode">
                <i class="fas fa-building"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control col-md-3"
              placeholder="Post Code"
              aria-describedby="postcode"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="address1">
                <i class="fas fa-map-marker-alt"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Post Code Address"
              aria-describedby="address1"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text theme-input-group" id="address2">
                <i class="fas fa-location-arrow"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Address"
              aria-describedby="address2"
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
$(".custom-file-input").on("change", handleFileSelect);
function handleFileSelect(evt) {
  $("#preview").remove(); // 繰り返し実行時の処理
  $(this)
    .parents(".input-group")
    .after('<div id="preview"></div>');

  var files = evt.target.files;

  for (var i = 0, f; (f = files[i]); i++) {
    var reader = new FileReader();

    reader.onload = (function(theFile) {
      return function(e) {
        if (theFile.type.match("image.*")) {
          var $html = [
            '<div class="d-inline-block mr-1 mt-1"><img class="img-thumbnail" src="',
            e.target.result,
            '" title="',
            escape(theFile.name),
            '" style="height:100px;" /><div class="small text-muted text-center">',
            escape(theFile.name),
            "</div></div>"
          ].join(""); // 画像では画像のプレビューとファイル名の表示
        } else {
          var $html = [
            '<div class="d-inline-block mr-1"><span class="small">',
            escape(theFile.name),
            "</span></div>"
          ].join(""); //画像以外はファイル名のみの表示
        }

        $("#preview").append($html);
      };
    })(f);

    reader.readAsDataURL(f);
  }
  $(this)
    .next(".custom-file-label")
    .html(+files.length + "個のファイルを選択しました");
}

//ファイルの取消
$(".reset").click(function() {
  $(this)
    .parent()
    .prev()
    .children(".custom-file-label")
    .html("ファイル選択...");
  $("#preview").remove();
  $(".custom-file-input").val("");
});

export default {
  name: "UpdateProfile",
  components: {}
};
</script>