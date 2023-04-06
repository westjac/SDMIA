<template>
  <!-- START OF DESKTOP NAVIGATION MENU -->
    <nav v-show="!isMobile" class="top-nav">
      <v-container>
        <v-row align="center">
          <v-col>
          <a href="/">
            <v-img src="/images/sdmia.png" alt="Logo" height="110"/>
          </a>
            <div class="links">
            <a v-for="(link, index) in links" :key="index" :href="link.slug">{{ link.label }}</a>
          </div>
          </v-col>
        </v-row>
      </v-container>
    </nav>

    <!-- START OF MOBILE NAVIGATION MENU -->
    <nav v-show="isMobile" class="mobile">
      <a href="/">
        <v-img src="/images/sdmia.png" alt="Logo" width="175" height="110"/>
      </a>
      <v-icon icon="mdi-menu" size="x-large" color="#123C62"/>
    </nav>
  </template>
  
  <script setup>
    const isMobile = ref(false);
    let links = [
      {
        label: 'Mining in SD',
        slug: '/mining-in-sd',
      }, 
      {
        label: 'Resources',
        slug: '/resources'
      },
      {
        label: 'About SDMIA',
        slug: '/about'
      },
      {
        label: 'Contact',
        slug: '/contact'
      },
    ]
    
    //RESPONSIVE MENU FUNCTIONS
    function handleResize() {
      isMobile.value = window.innerWidth <= 960;
    }

    onMounted(() => {
      isMobile.value = window.innerWidth <= 960;
      window.addEventListener('resize', handleResize);
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    })

        
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

  .top-nav .links {
    display: flex;
    justify-content: center;
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
    transform: translateY(-2px); /* slight upward movement */
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

.mobile {
    display: flex;
    justify-content: space-between;
    padding-right: 1.5em;
    padding-left: 2em;
    align-items: center;
    height: 90px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1; /* set a higher z-index value for the nav */
    position: relative; /* set position to relative */
}
  </style>
  