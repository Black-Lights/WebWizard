<template>
  <v-container fluid>
    <v-card class="full-width-image" :href="link" target="_blank">
      <v-img :src="image" class="full-width-image__img"></v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'FullWidthImage',
  props: {
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
.full-width-image {
  width: 100%;
  margin-bottom: 20px;
}
.full-width-image__img {
  width: 100%;
  height: auto;
  max-height: 500px;

}
</style>
