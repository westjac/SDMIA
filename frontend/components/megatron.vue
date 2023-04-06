<template>
    <div class="hero-container">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a target="_blank" :href="buttonLink">{{ buttonText }}</a>
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
        imageAlt: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
        buttonLink: {
            type: String,
            required: true,
        },
        },
    };
  </script>
  
  <style scoped>
    .hero-container {
            display: flex;
            flex-wrap: wrap;
            align-items: end;
            height: auto;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/warf.jpg');
            background-size: cover;
            background-position-y: center;
            background-position-x: center;
        }
        
        .hero-content {
            height: auto;
            padding-top: 18em;
            max-width: 60%;
            text-align: left;
            color: #fff;
            z-index: 1;
            margin-bottom: 18em;
            margin-left: 6em;
        }
        
        .hero-content h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        
        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .hero-content a {
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            background-color: #fff;
            color: #000;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .hero-content a:hover {
            background-color: #3FB65D;
            color: #fff;
        }

        @media screen and (max-width: 960px) {
            .hero-content {
                margin-left: 2em;
            }
            .hero-content p{
                font-size: 1.1em;
            }
            .hero-content h1{
                font-size: 2em;
            }

            .hero-content a {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            }
        }

  </style>
  