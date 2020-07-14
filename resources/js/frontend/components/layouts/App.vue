<template>
<div>
  
    <Header />
    <router-view></router-view>
    <Footer />

</div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>