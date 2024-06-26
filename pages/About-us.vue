<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 style="text-align: center;">About Us </h1>
    <v-container>
      <rectangular-content-box-right
        title="Your Title"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-right>
      <rectangular-content-box-left
        title="Hello"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-left>
      <rectangular-content-box-right
        title="Your Title"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-right>
      <rectangular-content-box-left
        title="Hello"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-left>
      <rectangular-content-box-right
        title="Your Title"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-right>
      <rectangular-content-box-left
        title="Hello"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-left>
      <rectangular-content-box-right
        title="Your Title"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-right>
      <rectangular-content-box-left
        title="Hello"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="https://picsum.photos/id/11/100/60">
      </rectangular-content-box-left>
    </v-container>
  </div>
</template>

<script>
import RectangularContentBoxLeft from '~/components/main/RectangularContentBoxLeft.vue';
import RectangularContentBoxRight from '~/components/main/RectangularContentBoxRight.vue';

export default {
  data() {
    return {
      breadcrumbs: [
        // { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        // Add more breadcrumbs as needed
      ]
    };
  },
  components: {
    RectangularContentBoxLeft,
    RectangularContentBoxRight

  }
}
</script>

<style scoped>

</style>
