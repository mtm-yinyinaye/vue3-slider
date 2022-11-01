<template>
  <div class="container">
    <h1>Bacic</h1>
    <Carousel
      :autoplay="1500"
      :wrap-around="true"
      :settings="settings"
      :breakpoints="breakpoints"
    >
      <Slide v-for="slide in 5" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // sp to pc
        768: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
    };
  },
};
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: rgb(100, 42, 251);
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>