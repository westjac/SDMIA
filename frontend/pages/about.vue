<template>
    <div>
    <PageHeader 
    imageSrc="/images/warf.jpg"
    title="About SDMIA" 
    />
    <div class="dividerBar"></div>
    <h1>Our Mission</h1>
    <p>Provide A Unified Voice to Educate, Communicate and Advocate for the Mineral Industries in South Dakota.</p>

    <h1>Our Vision</h1>
    <p>To honor South Dakota’s world class mining heritage and its natural resource partners by:</p>
    <ul style="list-style-type:circle;">
      <li>Developing safe, sustainable, and responsible mineral resources.</li>
      <li>Educating, advocating, and collaborating with educators, local communities, policy makers and members of the public.</li>
      <li>Recognizing the importance and benefit of responsible natural resource development and use.</li>
      <li>Sustaining and improving the quality of life for South Dakotans for generations to come.</li>
    </ul>
    
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
</template>

<script setup>
  let boardOfDirectors = [
    {
      name: "Liz Sailer",
      company: "Dakota Gold Corp."
    },
    {
      name: "Kwinn Neff",
      company: "Agnico Eagle Mines Ltd."
    },
    { name: 'John Doe', company: 'ABC Inc.' },
        { name: 'Jane Smith', company: 'XYZ Corp.' },
        { name: 'Bob Johnson', company: 'DEF Co.' },
        { name: 'Alice Williams', company: 'GHI Ltd.' },
        { name: 'Tom Brown', company: 'JKL LLC' },
        { name: 'Sue Davis', company: 'MNO LLC' },
  ]

  let members = [
    { name: 'John Doe', company: 'ABC Inc.', logo: 'https://via.placeholder.com/80x80' },
        { name: 'Jane Smith', company: 'XYZ Corp.', logo: 'https://via.placeholder.com/80x120' },
        { name: 'Bob Johnson', company: 'DEF Co.', logo: 'https://via.placeholder.com/80x80' },
        { name: 'Alice Williams', company: 'GHI Ltd.', logo: 'https://via.placeholder.com/800x80' },
        { name: 'Tom Brown', company: 'JKL LLC', logo: 'https://via.placeholder.com/80x80' },
        { name: 'Sue Davis', company: 'MNO LLC', logo: 'https://via.placeholder.com/80x80' },
    
  ]
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
        padding-bottom: 1em;
    }
    .v-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }

  .v-col {
    padding: 0;
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

  p {
    margin: 0;
    font-size: 16px;
  }
    /* Set max-width for the container */
    .v-container {
    max-width: 700px;
    margin: 0 auto; /* Center the container horizontally */
  }

  .logo {
    max-width: 80px;
    max-height: 80px;
  }
</style>