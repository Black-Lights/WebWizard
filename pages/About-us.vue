<script setup>

</script>


<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 style="text-align: center;">About Us</h1>
    <v-container>
      <rectangular-content-box-right
        title="Mission"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/mission">
      </rectangular-content-box-right>
      <rectangular-content-box-left
        title="Team"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/team">
      </rectangular-content-box-left>
      <rectangular-content-box-right
        title="Partners"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/partnerships">
      </rectangular-content-box-right>
      <rectangular-content-box-left
        title="Annual Reports"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="/About_us/annual_reports">
      </rectangular-content-box-left>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import RectangularContentBoxLeft from '~/components/main/RectangularContentBoxLeft.vue';
import RectangularContentBoxRight from '~/components/main/RectangularContentBoxRight.vue';

export default {
  name: 'AboutUs',
  components: {
    Breadcrumbs,
    RectangularContentBoxLeft,
    RectangularContentBoxRight
  },
  data() {
    return {
      breadcrumbs: [
        { label: 'About Us', path: '/About-us' }
        // Add more breadcrumbs as needed
      ]
    };
  }
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
