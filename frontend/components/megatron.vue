<template>
    <div class="hero-container">
      <div class="hero-image">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button>{{ buttonText }}</button>
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
        },
    };
  </script>
  
  <style scoped>
    .hero-container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        
        .hero-image {
            flex: 1 1 100%;
            height: 100%;
            filter: brightness(70%)
        }
        
        .hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .hero-content {
            position: absolute;
            top: 20em;
            left: 6em;
            max-width: 80%;
            padding: 0 2rem;
            text-align: left;
            color: #fff;
            z-index: 1;
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
        
        .hero-content button {
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            background-color: #fff;
            color: #000;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .hero-content button:hover {
            background-color: #000;
            color: #fff;
        }
  </style>
  