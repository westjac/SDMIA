<template>
    <div class="page-header">
      <div class="header-image">
        <img :src="imageSrc" alt="Background image" />
      </div>
      <div class="header-content">
        <h1>{{ title }}</h1>
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
            title: {
                type: String,
                required: true,
            },
        },
    };
  </script>
  
  <style scoped>
    .page-header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 25em;
        }
        
        .header-image {
            flex: 1 1 100%;
            height: 100%;
            filter: brightness(60%)
        }
        
        .header-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .header-content {
            position: absolute;
            top: 16em;
            max-width: 80%;
            text-align: left;
            color: #fff;
            z-index: 1;
        }
        
        .header-content h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
  </style>
  