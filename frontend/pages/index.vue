<template>
  <div>
    <Megatron
      imageSrc="/images/warf.jpg"
      imageAlt="Image alt text"
      title="Welcome to the South Dakota Mineral Industries Association"
      description="Since 2022, the South Dakota Mineral Industries Association (SDMIA) 
        has been the state and national voice of the South Dakota mining industry. Working 
        alongside our members, SDMIA promotes the industry across the region and nationally."
      buttonText="More About SDMIA >"
    />
    <div class="dividerBar"></div>
    <h1>Featured News & Resources</h1>

  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue';

export default {
  components: {
    TopNav,
  },
};
</script>

<style scoped>
  .dividerBar {
    background-color: #123C62;
    height: 80px;
  }
</style>