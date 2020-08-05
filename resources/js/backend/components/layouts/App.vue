<template>
  <div class="wrapper">
    <!-- Navbar -->
    <Header/>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <Sidebar/>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
       <router-view></router-view>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <Footer/>
  </div>

</template>

<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
$.widget.bridge("uibutton", $.ui.button);
</script>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";

export default {
  components: {
    Header,
    Footer,
    Sidebar,
    Breadcrumb
  },
};
</script>
