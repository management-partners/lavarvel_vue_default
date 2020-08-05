<template>
  <section class="content" id="dashboard">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-info main-box">
            <div class="col-md-4">
              <h3>150</h3>
              <p>New User</p>
            </div>
            <div class="col-md-4">
              <div class="icon">
                <i class="ion ion-person-stalker"></i>
              </div>
            </div>
            <div class="col-md-4">
              <h3>200</h3>
              <p>All User</p>
            </div>
            <a href="#" class="small-box-footer">
              More info
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box main-box bg-gradient-success">
            <div class="col-md-4">
              <h3>150</h3>
              <p>New Email</p>
            </div>
            <div class="col-md-4">
              <div class="icon icon-email">
                <i class="ion ion-email"></i>
              </div>
            </div>
            <div class="col-md-4">
              <h3>200</h3>
              <p>All Email</p>
            </div>
            <a href="#" class="small-box-footer">
              More info
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box main-box">
            <div class="col-md-4">
              <h3>150</h3>
              <p>Post</p>
            </div>
            <div class="col-md-4">
              <div class="icon icon-cloud">
                <i class="ion ion-cloud"></i>
              </div>
            </div>
            <div class="col-md-4">
              <h3>200</h3>
              <p>RSS</p>
            </div>
            <a href="#" class="small-box-footer">
              More info
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box main-box main-box-ex">
            <div class="col-md-4">
              <h3>150</h3>
              <p>Google</p>
            </div>
            <div class="col-md-4">
              <div class="icon icon-bar">
                <i class="ion ion-stats-bars"></i>
              </div>
            </div>
            <div class="col-md-4">
              <h3>200</h3>
              <p>Trello</p>
            </div>
            <a href="#" class="small-box-footer">
              More info
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {};
  },
  components: {},
  mounted: function () {},
};
</script>
