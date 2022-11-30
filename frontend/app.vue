<template>
    <img class="swoop" src="./Mtn-Swoop.png" alt="Swoop" />
  <div class="card">
    <img class="logo" src="./SDMIA-Logo.png" alt="SDMIA Logo" />
    <!-- <p>Coming Soon</p> -->
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
    bottom: -140px;
    left: -190px;
    overflow: hidden;
  }
</style>
