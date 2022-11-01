<template>
  <Carousel
    id="gallery"
    :settings="settings"
    :wrap-around="true"
    v-model="currentSlide"
  >
    <template #slides>
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" />
      </Slide>
    </template>
  </Carousel>
  <Carousel
    id="thumbnails"
    :breakpoints="breakpoints"
    :settings="settings"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
    :autoplay="2000"
  >
    <template #slides>
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" @click="slideTo(image.id - 1)" />
      </Slide>
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        mouseDrag: false,
        dir: "rtl",
      },
      breakpoints: {
        // sp to pc
        768: {
          itemsToShow: 4,
          snapAlign: "center",
        },
      },
      currentSlide: 0,
      images: [
        { id: 1, url: "https://picsum.photos/300/200?q=1" },
        { id: 2, url: "https://picsum.photos/300/200?q=2" },
        { id: 3, url: "https://picsum.photos/300/200?q=3" },
        { id: 4, url: "https://picsum.photos/300/200?q=4" },
      ],
    };
  },
  methods: {
    slideTo(val) {
      console.log(val);
      this.currentSlide = val;
    },
  },
};
</script>

<style>
.carousel__slide {
  padding: 10px;
}
#gallery img {
  width: 50vw;
}
</style>