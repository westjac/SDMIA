<template>
    <div class="page-header">
        <h1>{{ title }}</h1>
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
            justify-content: center;
            align-items: end;
            height: 25em;
            background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/warf.jpg');
            background-size: cover;
            background-position-y: center;
            background-position-x: center;
        }
        
        .header-image {
            flex: 1 1 100%;
            height: 100%;
            filter: brightness(60%)
        }
        
        .page-header h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #fff;
            margin-bottom: 1.4em;
        }
  </style>
  