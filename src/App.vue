<template>
  <div>
    <router-link :to="'/'">Basic Slider</router-link>
    <router-link  class="ml-3" :to="'/gallery'">Gallery Slider</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
