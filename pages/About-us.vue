<!--<template>-->
<!--  <div>-->
<!--    <Breadcrumbs :crumbs="breadcrumbs" />-->
<!--    <h1 class="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">About Us</h1>-->

<!--    <v-container class="flex flex-wrap justify-center">-->
<!--      <rectangular-content-box-right-->
<!--        v-for="(item, index) in contentBoxes"-->
<!--        :key="index"-->
<!--        :title="item.title"-->
<!--        :text="item.text"-->
<!--        :image="item.image"-->
<!--        :link="item.link"-->
<!--        :class="{ 'mb-8': index < contentBoxes.length - 1 }"-->
<!--      />-->
<!--    </v-container>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import RectangularContentBoxLeft from '~/components/main/RectangularContentBoxLeft.vue';-->
<!--import RectangularContentBoxRight from '~/components/main/RectangularContentBoxRight.vue';-->

<!--const breadcrumbs = [-->
<!--  { label: 'About Us', path: '/about-us' }-->
<!--];-->

<!--const contentBoxes = [-->
<!--  {-->
<!--    title: 'Mission',-->
<!--    text: 'Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',-->
<!--    image: 'https://picsum.photos/id/11/100/60',-->
<!--    link: './About_us/mission'-->
<!--  },-->
<!--  {-->
<!--    title: 'Team',-->
<!--    text: 'Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',-->
<!--    image: 'https://picsum.photos/id/11/100/60',-->
<!--    link: '/About_us/team'-->
<!--  },-->
<!--  {-->
<!--    title: 'Partners',-->
<!--    text: 'Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',-->
<!--    image: 'https://picsum.photos/id/11/100/60',-->
<!--    link: '/About_us/partnerships'-->
<!--  },-->
<!--  {-->
<!--    title: 'Annual Reports',-->
<!--    text: 'Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',-->
<!--    image: 'https://picsum.photos/id/11/100/60',-->
<!--    link: '/About_us/annual_reports'-->
<!--  }-->
<!--];-->
<!--</script>-->

<!--<style scoped>-->
<!--/* No specific scoped styles needed */-->
<!--</style>-->




<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :crumbs="breadcrumbs" />
    <h1 style="text-align: center;">About Us </h1>
    <v-container>
      <rectangular-content-box-right
        title="Mission"
        text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://picsum.photos/id/11/100/60"
        link="./About_us/mission">
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
