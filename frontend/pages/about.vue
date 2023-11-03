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
              v-for="(item, index) in bod.data"
              :key="index"
              cols="12"
              md="4"
              class="d-flex justify-center"
            >
              <div class="text-center">
                <img :src="apiBase + item.attributes.MemberPhoto.data.attributes.url" :alt="item.attributes.MemberPhoto.data.attributes.alternativeText" class="logo">
                <h2>{{ item.attributes.Name }}</h2>
                <p>{{ item.attributes.CompanyName }}</p>
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
 //START API CALL
 const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase
const {data: bod} = await useFetch("http://localhost:1337/api/board-members?populate=*",
{
  pick: ["data"],
}  
)


  let boardOfDirectors = [
    {
      name: "Elizabeth Sailer",
      company: "Dakota Gold Corp.",
      logo: '/images/logos/dakotagold.png'
    },
    {
      name: "Crystal Hocking",
      company: "RESPEC Company LLC",
      logo: '/images/logos/respec.png'
    },
    {
      name: "Mark Bowron",
      company: "South Dakota Mines",
      logo: '/images/logos/sdm.png'
    },
    {
      name: "Mike Cepak P.E.",
      company: "Retired",
      logo: '/images/sdmia.png'
    },
    {
      name: "Tony Auld",
      company: "Coeur Wharf",
      logo: '/images/logos/wharf.png'
    },
    {
      name: "Jake Hepp",
      company: "Simon",
      logo: '/images/logos/simon.png'
    },
    {
      name: "Dean Aurand",
      company: "Mid Continent Testing Labs",
      logo: '/images/logos/midcontinent.svg'
    },
    {
      name: "Beau Riopel",
      company: "Butler Machinery Company",
      logo: '/images/logos/butler.png'
    },
    {
      name: "Danielle Wiebers",
      company: "Pete Lien & Sons",
      logo: '/images/logos/petelien.jpg'
    },
    {
      name: "Jason Combs",
      company: "",
      logo: '/images/sdmia.png'
    },
    {
      name: "Jon Winter",
      company: "EnCore Energy",
      logo: '/images/logos/encore.png'
    },
    {
      name: "Kwinn Neff",
      company: "Managing Director",
      logo: '/images/sdmia.png'
    },
  ]

  let members = [
    { name: 'Dakota Gold Corp.', logo: '/images/logos/dakotagold.png' },
    { name: 'Agnico Eagle Mines Ltd.', logo: '/images/logos/agnicoeagle.png' },
    { name: 'RESPEC Company LLC', logo: '/images/logos/respec.png' },
    { name: 'South Dakota Mines', logo: '/images/logos/sdm.png' },
    { name: 'Pete Lien & Sons', logo: '/images/logos/petelien.jpg' },
    { name: 'Coeur Wharf', logo: '/images/logos/wharf.png' },
    { name: 'Barr Engineering Co.', logo: '/images/logos/barr.png' },
    { name: 'Mid Continent Testing Labs, Inc.', logo: '/images/logos/midcontinent.svg' },
    { name: 'EnCore Energy', logo: '/images/logos/encore.png' },
    { name: 'Barrick', logo: '/images/logos/barrick.png' },
    { name: 'Midwest Lithium', logo: '/images/logos/midwestlithium.png' },
    { name: 'Solitario Zinc', logo: '/images/logos/solitario.jpg' },
    { name: 'Morris, Inc.', logo: '/images/logos/morris.jpg' },
    { name: 'Black Hills Mining Museum', logo: '/images/logos/bhmm.png' },
    { name: 'Gochnour & Associates', logo: '/images/logos/gochnour.jpg' },
    { name: 'Greystone Company', logo: '/images/sdmia.png' },
    { name: 'Simon', logo: '/images/logos/simon.png' },
    { name: 'Mann Strategies', logo: '/images/sdmia.png' },
    { name: 'Stone Land Service', logo: '/images/sdmia.png' },
    { name: 'Bennett Main Gubbrud & Willert PC', logo: '/images/sdmia.png' },
    { name: 'Butler Machinery', logo: '/images/logos/butler.png' },
    { name: 'Caterpillar, Inc.', logo: '/images/logos/cat.png' },
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

  .directors .logo {
    max-height: 100px;
    object-fit: contain;
    padding-bottom: 0.5em;
  }
  .members p {
    font-size: 0.8em;
    font-weight: bold;
  }
  .members {
    max-width: 1000px;
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