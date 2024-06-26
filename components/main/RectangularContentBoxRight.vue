<template>
  <v-container>
    <v-row align="center">
      <v-col cols="4">
        <v-card class="rectangular-content-box__image" :href="link" target="_blank">
          <v-img :src="image" class="rectangular-content-box__img"></v-img>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="rectangular-content-box">
          <v-card-title class="rectangular-content-box__title">{{ title }}</v-card-title>
          <v-card-text class="rectangular-content-box__text">{{ text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RectangularContentBoxRight',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.rectangular-content-box {
  padding: 20px;
}
.rectangular-content-box__title {
  font-weight: bold;
  font-size: 1.5em;
}
.rectangular-content-box__text {
  font-size: 1em;
  margin-top: 10px;
}
.rectangular-content-box__image {
  width: 100%;
  height: auto;
}
.rectangular-content-box__img {
  width: 100%;
  height: auto;
}
</style>
