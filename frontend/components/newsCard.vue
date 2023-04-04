<template>
    <div class="article-card">
      <div class="article-card__image-wrapper">
        <img :src="photo" alt="" class="article-card__image" />
      </div>
      <div class="article-card__content">
        <h3 class="article-card__title">{{ title }}</h3>
        <p class="article-card__description">{{ description }}</p>
        <a :href="link" class="article-card__link">Read more ></a>
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
    },
  };
  </script>
  
  <style scoped>
  .article-card {
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 4px;

    background-color: #fff;
    max-width: 50%;
  }
  
  .article-card__image-wrapper {
    flex-shrink: 0;
    margin-right: 16px;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
  }
  
  .article-card__image {
    width: 100%;
    height: 100%;
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
  </style>
  