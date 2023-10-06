<template>
  <div>
    <!-- <Megatron
      imageSrc="/images/warf.jpg"
      imageAlt="Image alt text"
      :title="homePage.data.attributes.WelcomeText"
      :description="homePage.data.attributes.Subtext"
      :buttonText="homePage.data.attributes.ActionButtonLabel"
    /> -->
    <Megatron
      imageSrc="/images/warf.jpg"
      imageAlt="Image alt text"
      title="Welcome to the South Dakota Mineral Industries Association"
      description="Since 2022, the South Dakota Mineral Industries Association (SDMIA) has been the state and national voice of the South Dakota mining industry. Working alongside our members, SDMIA promotes the industry across the region and nationally."
      buttonText="More About SDMIA >"
      buttonLink="/about"
    />
    <div class="dividerBar"></div>
    <NewsAndResources />

  </div>
</template>

<script setup>

// CMS ACCESS //
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase
console.log("API Base URL: ", apiBase)
//Fetch home page data
// const { data: homePage } = await useFetch(`${apiBase}/api/home-page`)
// END CMS ACCESS //
  
</script>

<style scoped>
  .dividerBar {
    background-color: #123C62;
    height: 80px;
  }
</style>