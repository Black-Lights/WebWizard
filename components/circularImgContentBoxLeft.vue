<template>
  <v-container>
    <v-row align="center" class="rectangular-content-box__row">
      <v-col cols="12" md="8">
        <v-card class="rectangular-content-box">
          <v-card-title class="rectangular-content-box__title">
            <NuxtLink :to="link" class="title-link">{{ title }}</NuxtLink>
          </v-card-title>
          <v-card-text class="rectangular-content-box__text">{{
            text
          }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <div class="rectangular-content-box__image">
          <NuxtLink :to="link">
            <v-img
              :src="image"
              class="rectangular-content-box__img"
              width="250px"
              height="250px"
            ></v-img>
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RectangularContentBoxLeft",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
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
.rectangular-content-box {
  opacity: 0.7;
  padding: 20px;
}

.rectangular-content-box__title {
  color: #000000 !important;
  font-weight: bold;
  font-size: 1.5em;
}

.rectangular-content-box__text {
  color: #000000 !important;
  font-size: 1.3em;
  line-height: 1.6;
  margin-top: 10px;
  text-align: justify;
}

.rectangular-content-box__image {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rectangular-content-box__img {
  width: 100px; /* Adjust this size as needed */
  height: 100px; /* Keep it the same as width for a circular shape */
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover; /* Ensures the image covers the space */
}

.title-link {
  text-decoration: none;
  color: inherit;
}

.title-link:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 600px) {
  .rectangular-content-box {
    padding: 10px; /* Reduce padding on smaller screens */
  }

  .rectangular-content-box__title {
    font-size: 1.2em;
  }

  .rectangular-content-box__text {
    font-size: 0.9em;
  }

  .rectangular-content-box__row {
    flex-direction: column-reverse; /* Reverse the order of image and text */
  }

  .rectangular-content-box__img {
    width: 80px; /* Adjust this size for smaller screens */
    height: 80px; /* Keep it the same as width for a circular shape */
  }
}
</style>
