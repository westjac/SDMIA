<template>
    <!-- Style is needed here along with extra background modifications so it can take presidence in order of operations on the url image. -->
    <div class="page-header" :style="`background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${imageSrc}'); background-size: cover; background-position-y: center; background-position-x: center;`">
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
            align-items: flex-end;
            height: 25em;
        }
        .page-header h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #fff;
            margin-bottom: 1.4em;
            text-align: center;
        }
  </style>
  