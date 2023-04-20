<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="About SDMIA" 
    />
    <div class="dividerBar"></div>
    <div class="content">
      <div class="mission">
        <h1>Our Mission</h1>
        <p>Provide A Unified Voice to Educate, Communicate and Advocate for the Mineral Industries in South Dakota.</p>
      </div>
      <div class="vision">
        <h1>Our Vision</h1>
        <p>To honor South Dakota’s world class mining heritage and its natural resource partners by:</p>
        <br />
        <ul style="list-style-type:circle;">
          <li>Developing safe, sustainable, and responsible mineral resources.</li>
          <li>Educating, advocating, and collaborating with educators, local communities, policy makers and members of the public.</li>
          <li>Recognizing the importance and benefit of responsible natural resource development and use.</li>
          <li>Sustaining and improving the quality of life for South Dakotans for generations to come.</li>
        </ul>
      </div>

      <div class="directors">
        <h1>Board of Directors</h1>
        <v-container fluid>
          <v-row class="justify-center">
            <v-col
              v-for="(item, index) in boardOfDirectors"
              :key="index"
              cols="12"
              md="4"
              class="d-flex justify-center"
            >
              <div class="text-center">
                <h2>{{ item.name }}</h2>
                <p>{{ item.company }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      
      <div class="members">
        <h1>Members</h1>
        <v-container fluid>
          <v-row class="justify-center">
            <v-col
              v-for="(item, index) in members"
              :key="index"
              cols="12"
              md="4"
              class="d-flex justify-center"
            >
              <div class="text-center">
                <img :src="item.logo" alt="Company logo" class="logo">
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script setup>
  let boardOfDirectors = [
    {
      name: "Kwinn Neff",
      company: "Agnico Eagle Mines Ltd."
    },  
    {
      name: "Liz Sailer",
      company: "Dakota Gold Corp."
    },
    {
      name: "Crystal Hocking",
      company: "RESPEC Compnay LLC"
    },
    {
      name: "Mark Bowron",
      company: "South Dakota Mines"
    },
    {
      name: "Brian Tideman",
      company: "Pete Lien & Sons"
    },
    {
      name: "Mike Cepak P.E.",
      company: "Retired"
    },
    {
      name: "Tony Auld",
      company: "Coeur Wharf"
    },
    {
      name: "Kathy Johnson PhD.",
      company: "Barr Engineering Co."
    },
    {
      name: "Dean Aurand",
      company: "Mid Continent Testing Labs, Inc."
    },
    {
      name: "Larry Mann",
      company: "Mann Strategies"
    },
    {
      name: "Vacant",
      company: "Managing Director"
    },
  ]

  let members = [
    { name: 'Dakota Gold Corp.', logo: '/images/logos/dakotagold.png' },
    { name: 'Agnico Eagle Mines Ltd.', logo: '/images/logos/agnicoeagle.png' },
    { name: 'RESPEC Company LLC', logo: '/images/logos/respec.png' },
    { name: 'South Dakota Mines', logo: '/images/logos/sdm.png' },
    { name: 'Pete Lien & Sons', logo: '/images/logos/petelien.jpg' },
    { name: 'South Dakota DANR', logo: '/images/logos/sddanr.png' },
    { name: 'Coeur Wharf', logo: '/images/logos/wharf.png' },
    { name: 'Barr Engineering Co.', logo: '/images/logos/barr.png' },
    { name: 'Mid Continent Testing Labs, Inc.', logo: '/images/logos/midcontinent.svg' },
  ]
</script>

<style scoped>
  .dividerBar {
    background-color: #123C62; 
    height: 60px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 6em;
  }

  .mission {
    max-width: 400px;
    text-align: center;
  }

  .mission p {
    font-size: 1.1em;
    }

    .vision {
      max-width: 650px;
    }

    .vision p, ul {
      font-size: 1.1em;
    }

    .vision ul {
      padding-left: 2em;
    }

  .directors {
    max-width: 700px;
    margin: 0 auto;
  }

  .directors p {
    font-size: 0.8em;
    font-weight: bold;
  }

  .members .logo {
    max-height: 100px;
    object-fit: contain;
    padding-bottom: 0.5em;
  }

  .members p {
    font-size: 0.8em;
    font-weight: bold;
  }

  h1 {
        text-align: center;
        color: #123C62;
        padding-top: 1em;
        padding-bottom: 1em;
    }
    .v-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }

  .text-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    color: #123C62;
  }

  @media screen and (max-width: 960px) {
  .content {
    padding: 0 2em;
  }
}


</style>