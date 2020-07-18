<template>
  <main role="main" class="flex-shrink-0">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </main>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
<script>
import "animate.css";
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