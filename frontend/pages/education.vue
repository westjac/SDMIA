<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="Mining Education" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>We Are Miners.</h1>
      <iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/W4uQqiHnXUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>Thank you to the University of Texas Health and Safety Training Center for developing a documentary focused on the global benefits of mining, the technical advancements of today’s modern mining industry and the opportunities for those interested in impacting our world with a career that matters. And thank you to all who safely and responsibly mine the metals and minerals necessary for today’s modern lifestyle and our Coeur Wharf team for lending their expertise in developing this video.</p>
    </div>
    <div class="MEC">
      <v-img
        aspect-ratio="16/9"
        cover
        src="\images\edu\MEC-Mineral-Baby-2022.jpg"
        alt="MEC Mineral Baby 2022"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div style="text-align: center;">
        <p style="color: #666666; font-size: 12px;">Image attribution: MEC Mineral Baby 2022</p>
      </div>
      <v-img
        aspect-ratio="16/9"
        cover
        src="\images\edu\MEC-Mineral-World.jpg"
        alt="MEC Mineral World"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div style="text-align: center;">
        <p style="color: #666666; font-size: 12px;">Image attribution: MEC Mineral World</p>
      </div>
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
      margin: 0 6em;
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
      margin: 0 6em;
    }

    .MEC .v-img {
      margin: 1em 0;
    }
</style>