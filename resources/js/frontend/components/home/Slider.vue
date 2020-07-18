<template>
  <div class="container-slider">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="images/slider/1.jpg" alt="First slide" />
          <div class="carousel-caption d-md-block">
            <h3 class="animate__animated animate__fadeInLeft">This is the caption for slide 1</h3>
            <p class="animate__animated animate__bounceInRight">This is the caption for slide 1</p>
            <button class="btn btn-primary btn-lg animate__animated animate__zoomInUp">Button</button>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="images/slider/2.jpg" alt="First slide" />
          <div class="carousel-caption d-md-block">
            <h3 class="animate__animated animate__bounceInDown">This is the caption for slide 2</h3>
            <p class="animate__animated animate__bounceInUp">This is the caption for slide 2</p>
            <button class="btn btn-primary btn-lg animate__animated animate__zoomInRight">Button</button>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="images/slider/3.jpg" alt="First slide" />
          <div class="carousel-caption d-md-block">
            <h3 class="animate__animated animate__zoomInLeft">This is the caption for slide 1</h3>
            <p class="animate__animated animate__flipInX">This is the caption for slide 1</p>
            <button class="btn btn-primary btn-lg animate__animated animate__fadeInUp">Button</button>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
import "../../jsExtend/slider.js";

export default {
  name: "Slider",
  components: {}
};
</script>