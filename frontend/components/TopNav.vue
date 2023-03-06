<template>
    <nav class="top-nav">
      <v-container>
        <v-row align="center">
          <v-col>
            <v-img src="/images/sdmia.png" alt="Logo" height="110"/>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <div class="links">
            <a v-for="(link, index) in links" :key="index" href="#">{{ link }}</a>
          </div>
        </v-row>
      </v-container>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TopNav',
    data() {
      return {
        links: ['Mining in SD', 'Resources', 'About SDMIA', 'Contact Us']
      }
    }
  }
  </script>
  
  <style scoped>
  .top-nav {
    display: flex;
    align-items: center;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.90);
    z-index: 1; /* set a higher z-index value for the nav */
    position: relative; /* set position to relative */
  }
  
  .top-nav a {
    margin: 0 10px; /* adjust margin to bring links closer together */
    text-align: center;
  }

  .top-nav links {
    display: flex;
  }
  </style>
  