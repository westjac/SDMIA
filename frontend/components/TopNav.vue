<template>
  <!-- START OF DESKTOP NAVIGATION MENU -->
    <nav v-if="!isMobile" class="top-nav">
      <v-container>
        <v-row align="center">
          <v-col>
          <a href="/">
            <v-img src="/images/sdmia.png" alt="Logo" height="110"/>
          </a>
            <div class="links">
            <a v-for="(link, index) in links" :key="index" :href="link.slug"
            @mouseover="openDropdown(index)"
            @mouseleave="closeDropdown(index)">
            {{ link.label }}
            <div  v-if="link.expanded && link.submenu.length != 0" class="dropdown-menu" :class="{ 'fade-in': link.expanded }">
              <a
                v-for="(submenuItem, submenuIndex) in link.submenu"
                :key="submenuIndex" 
              >
                <NuxtLink class="submenu-item"  :to="submenuItem.slug">{{ submenuItem.label }}</NuxtLink>
              </a>
            </div>
            </a>
          </div>
          </v-col>
        </v-row>
      </v-container>
    </nav>

    <!-- START OF MOBILE NAVIGATION MENU -->
    <div v-if="isMobile" class="mobile-nav-space"></div>
    <div v-if="isMobile" class="mobile-nav">
      <nav class="mobile">
        <a href="/">
          <v-img src="/images/sdmia.png" alt="Logo" width="175" height="110"/>
        </a>
        <v-icon @click="toggleMobileNav" icon="mdi-menu" size="x-large" color="#123C62" :class="{'icon-active' : mobileNav}"/>
      </nav>
      <transition>
        <div v-if="mobileNav" class="dropdownNavigation">
          <a v-for="(link, index) in links" :key="index" :href="link.slug">
            {{ link.label }}
            <span v-if="!link.expanded && link.submenu.length !== 0" class="arrow" :class="{ 'expanded': link.expanded }" @click.stop.prevent="toggleSubMenuArrow(link, $event)">&#9654;</span>
            <span v-if="link.expanded && link.submenu.length !== 0" class="arrow" :class="{ 'expanded': link.expanded }" @click.stop.prevent="toggleSubMenuArrow(link, $event)">&#9660;</span>
            <div v-if="link.expanded" class="dropdown-menu-mobile" :class="{ 'fade-in': link.expanded }">
              <a
                v-for="(submenuItem, submenuIndex) in link.submenu"
                :key="submenuIndex"
              >
              <NuxtLink class="submenu-item"  :to="submenuItem.slug">{{ submenuItem.label }}</NuxtLink>
              </a>
            </div>
          </a>
        </div>
      </transition>
    </div>

  </template>
  
  <script setup>
    const isMobile = ref(false);
    const scrollPosition = ref(null);
    const mobileNav = ref(false);
    const links = ref(null);

    links.value = [
      {
        label: 'Home',
        slug: '/',
        expanded: false,
        submenu: [
        ],
      },
      {
        label: 'Education',
        slug: '/education',
        expanded: false,
        submenu: [
            { label: 'Critical Minerals', slug: '/education/SDCriticalMinerals' },
            { label: 'Early History', slug: '/education/EarlyMining' },
            { label: 'Homestake', slug: '/education/Homestake' },
            { label: 'Richmond Hill', slug: '/education/RichmondHill' },
            { label: 'Maitland', slug: '/education/Maitland' },
        ],
      },
      {
        label: 'About SDMIA',
        slug: '/about',
        expanded: false,
        submenu: [
        ],
      },
      {
        label: 'Events',
        slug: '/events',
        expanded: false,
        submenu: [
        ],
      },
      {
        label: 'Contact',
        slug: '/contact',
        expanded: false,
        submenu: [
        ],
      },
    ]

    function toggleMobileNav() {
      mobileNav.value = !mobileNav.value
    }

    function toggleSubMenu(link) {
      link.expanded = !link.expanded;
    }

    // Toggle submenu when clicking the arrow
    function toggleSubMenuArrow(link, event) {
      event.stopPropagation(); // Prevent the link click event from firing
      console.log('Clicked arrow for:', link.label); // Add this line for debugging
      toggleSubMenu(link);
    }
    
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

    function openDropdown(index) {
      links.value[index].expanded = true;
    }

    function closeDropdown(index) {
      links.value[index].expanded = false;
    }

        
  </script>
  
  <style scoped>

  
.dropdownNavigation .dropdown-toggle:after {
  content: '\25B6';
  margin-left: 5px;
  cursor: pointer;
}

  .top-nav .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  min-width: 200px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

  .top-nav .dropdown:hover .dropdown-menu {
  display: block;
}

  .top-nav .dropdown-menu .submenu-item {
  display: block;
  padding: 0px 0px;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.top-nav .dropdown-menu .submenu-item:hover {
  color: #34495e;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.dropdown-menu-mobile {
  
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.dropdown-menu-mobile {
  display: none;
  opacity: 0;
}

/* Apply the fade-in animation */
.dropdown-menu-mobile.fade-in {
  display: flex;
  animation: fadeIn 0.3s ease-in-out forwards;
}

.dropdown-menu {
  display: none;
  opacity: 0;
}

/* Apply the fade-in animation */
.dropdown-menu.fade-in {
  display: block;
  animation: fadeIn 0.3s ease-in-out forwards;
}

/* Keyframes for the fade-in animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
  .top-nav {
    display: flex;
    align-items: center;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.90);
    z-index: 1; /* set a higher z-index value for the nav */
    position: relative; /* set position to relative */
    z-index: 1000;
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
}

.mobile-nav {
  z-index: 1;
  position: fixed;
  width: 100%;

}

.dropdownNavigation {
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  padding-top: 1em;
}

.dropdownNavigation a{
    color: #000;
    padding: 6px;
}

.dropdownNavigation a{
    font-weight: bold;
    color: #123C62; /* dark blue */
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); /* slight drop shadow */
    transition: all 0.3s ease-in-out; /* smooth transition when hovered over */
    font-size: large;
  }

  .dropdownNavigation a:hover {
    color: #34495e; /* slightly lighter blue */
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3); /* stronger drop shadow */
    transform: translateY(-2px); /* slight upward movement */
  }

  .dropdownNavigation a:visited {
    font-weight: bold;
    color: #123C62; /* dark blue */
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); /* slight drop shadow */
    transition: all 0.3s ease-in-out; /* smooth transition when hovered over */
    text-decoration: none;
}

.mobile-nav-space {
  height: 90px;
}
  </style>
  