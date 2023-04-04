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
  .top-nav .links a{
    font-weight: bold;
    color: #123C62; /* dark blue */
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); /* slight drop shadow */
    transition: all 0.3s ease-in-out; /* smooth transition when hovered over */
    font-size: large;
  }

  .top-nav .links a:hover {
    color: #34495e; /* slightly lighter blue */
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3); /* stronger drop shadow */
    transform: translateY(-4px); /* slight upward movement */
  }

  .top-nav .links a:visited {
    font-weight: bold;
    color: #123C62; /* dark blue */
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); /* slight drop shadow */
    transition: all 0.3s ease-in-out; /* smooth transition when hovered over */
    text-decoration: none;
}

a {
  text-decoration: none;
}
  </style>
  