<template>
    <div class="article-card" :class="layoutAlternator">
      <div class="article-card__image-wrapper">
        <img :src="photo" alt="" class="article-card__image OreShapeMask" />
      </div>
      <div class="article-card__content">
        <h3 class="article-card__title">{{ title }}</h3>
        <p class="article-card__description">{{ description }}</p>
        <a target="_blank" :href="link" class="article-card__link">Read more ></a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      photo: {
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
      link: {
        type: String,
        required: true,
      },
      index: {
        type: Number,
        required: false,
      },
    },
    computed: {
      layoutAlternator() {
        if(this.index % 2 == 1){
          return "rowDir"
        }else if(this.index % 2 == 0){
          return "rowReverseDir"
        }else{
          return "rowDir"
        }  
      }
    }
  }
  

  </script>
  
  <style scoped>
  .article-card {
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 4px;
    max-width: 600px;

    background-color: #fff;
    width: 40vw;
  }

  .rowDir {
    flex-direction: row;
  }
  
  .rowReverseDir {
    flex-direction: row-reverse;
    
  }
  .article-card__image-wrapper {
    flex-shrink: 0;
    margin-right: 16px;
    
  }
  
  .article-card__image {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  .article-card__content {
    flex-grow: 1;
  }
  
  .article-card__title {
    margin: 0 0 8px;
    font-size: 24px;
    font-weight: bold;
    color: #123C62;
  }
  
  .article-card__description {
    margin: 0 0 16px;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .article-card__link {
    display: inline-block;
    padding: 8px 16px;
    border: 2px solid #3FB65D;
    border-radius: 4px;
    text-decoration: none;
    color: #3FB65D;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
  
  .article-card__link:hover {
    background-color: #3FB65D;
    color: #fff;
  }

  .OreShapeMask {
    -webkit-mask-image: url("/images/OreShape.png");
  mask-image: url("/images/OreShape.png");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  }

  /* Media Query for smaller screen sizes */
  @media (max-width: 960px) {
    .article-card {
    flex-direction: column;
    max-width: 100%;
    width: 80vw;
  }

  .article-card__image-wrapper {
    width: 150px;
    height: 150px;
    margin-right: 0;
    margin-bottom: 16px;
  }

  .article-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .article-card__content {
    text-align: center;
  }
  }
  </style>
  