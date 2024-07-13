<template>
  <v-card class="circular-image-card">
    <div class="circular-image-card__image">
      <NuxtLink :to="link">
        <v-img :src="image" class="circular-image-card__img" width="100" height="100"></v-img>
      </NuxtLink>
    </div>
    <v-card-title class="circular-image-card__title">
      <NuxtLink :to="link" class="title-link">{{ title }}</NuxtLink>
    </v-card-title>
    <v-card-text class="circular-image-card__text">{{ text }}</v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  text: String,
  image: String,
  link: String
})
</script>

<style scoped>
.circular-image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.circular-image-card__image {
  position: relative;
  margin-bottom: 10px;
}

.circular-image-card__img {
  border-radius: 50%;
  object-fit: cover;
}

.circular-image-card__title {
  font-weight: bold;
  font-size: 1.2em;
}

.circular-image-card__text {
  font-size: 0.9em;
}

.title-link {
  text-decoration: none;
  color: inherit;
}

.title-link:hover {
  text-decoration: underline;
}
</style>
