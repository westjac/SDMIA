<template>
  <div>
    <Megatron
      imageSrc="/images/warf.jpg"
      imageAlt="Image alt text"
      :title="homePage.data.attributes.WelcomeText"
      :description="homePage.data.attributes.Subtext"
      :buttonText="homePage.data.attributes.ActionButtonLabel"
    />
    <div class="dividerBar"></div>
    <NewsAndResources />

  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase
console.log("API Base URL: ", apiBase)
//Fetch home page data
  const { data: homePage } = await useFetch(`${apiBase}/api/home-page`)
  
</script>

<style scoped>
  .dividerBar {
    background-color: #123C62;
    height: 80px;
  }
</style>