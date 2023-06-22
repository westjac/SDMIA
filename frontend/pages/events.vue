<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="Events" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>SDMIA Events Calendar</h1>
      <iframe class="video" width="900" height="700" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&showTitle=0&showPrint=1&showTabs=1&showDate=1&showNav=1&showCalendars=0&showTz=1&src=NHNmZXA0bGNkNWJpZWFmaWxwNDE3anU2MHEyZTVqM3JAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E" frameborder="0" scrolling="no"></iframe>
      <p style="text-align: center; padding-bottom: 1em;">Please contact us at info@sdmineralindustries.org if you have an event you would like added to the SDMIA public events calendar.</p>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
  .dividerBar {
    background-color: #123C62; 
    height: 60px;
  }
  h1 {
        text-align: center;
        color: #123C62;
        padding-top: 1em;
    }
    .weAreMiners {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 6em;
      padding-bottom: 1em;
    }

    .weAreMiners .video {
      margin: 1em;
      aspect-ratio: 16 / 9;
      width: 100%;
    }
    .MEC {
      display: flex;
      flex-direction: column;
      padding: 0 6em;
    }

    img {
      max-width: 960px;
      height: 100%;
    }

    @media screen and (max-width: 960px) {
      .weAreMiners {
      padding: 0 2em;
    }
    .MEC {
      padding: 0 2em;
    }
    }
</style>