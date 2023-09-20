<template>
    <div class="container">
        <v-img
            cover
            :src="imageSrc"
            :alt="imageCutline"
        >
            <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
            </template>
        </v-img>
        <div style="text-align: center; margin-bottom: 1em;">
            <p style="color: #666666; font-size: 12px;">{{ imageCutline }}</p>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        props: {
        imageSrc: {
            type: String,
            required: true,
        },
        imageCutline: {
            type: String,
            required: false,
        },
        },
    };
  </script>
  
  <style scoped>
    .container {
        width: clamp(200px, 500px, 800px);
    }
  </style>
  