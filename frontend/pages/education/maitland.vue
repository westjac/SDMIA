<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="Maitland Mine History" 
    />
    <div class="dividerBar"></div>
    <div class="weAreMiners">
      <h1>Homestake History</h1>
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
      <div style="text-align: center; margin-bottom: 1em;">
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
      <div style="text-align: center; margin-bottom: 1em;">
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