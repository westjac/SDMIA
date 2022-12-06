<template>
    <img class="swoop" src="~/assets/Mtn-Swoop.png" alt="Swoop" />
  <div class="card">
    <img class="logo" src="~/assets/SDMIA-Logo.png" alt="SDMIA Logo" />
    <p class="coming-soon-text">Coming Soon | info@SDMineralIndustries.org</p>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #123c62;
    overflow: hidden;
    background-repeat: no-repeat;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .card {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .logo {
    max-width: 1000px;
    width: 100%;
    height: auto;
  }

  .swoop {
    opacity: 10%;
    height: auto;
    position: absolute;
    bottom: -120px;
    left: -190px;
    overflow: hidden;
  }

  .coming-soon-text {
    font-size: medium;
    font-weight: bolder;
    color: white;
  }
</style>
