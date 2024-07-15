<!--Index Page-->

<template>
  <v-container>
    <full-width-image image="https://picsum.photos/500/300?image=232" link="https://picsum.photos/500/300?image=232"></full-width-image>
    <rectangular-content-box-left
      title="Hello"
      text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://picsum.photos/id/11/100/60"
      link="https://picsum.photos/id/11/100/60">
    </rectangular-content-box-left>
    <rectangular-content-box-left
      title="Hello"
      text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://picsum.photos/id/11/100/60"
      link="https://picsum.photos/id/11/100/60">
    </rectangular-content-box-left>
    <rectangular-content-box-left
      title="Hello"
      text="Some text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://picsum.photos/id/11/100/60"
      link="https://picsum.photos/id/11/100/60">
    </rectangular-content-box-left>
  </v-container>
</template>

<script>
import FullWidthImage from '@/components/main/FullWidthImage.vue';
import RectangularContentBoxLeft from '~/components/main/RectangularContentBoxLeft.vue';

export default {
  name: 'Index',
  components: {
    FullWidthImage,
    RectangularContentBoxLeft
  },
  head() {
    return {
      title: 'Guiding-Light',
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to Guiding-Light. Discover our mission, projects, services, and how you can get involved.' },
        { hid: 'keywords', name: 'keywords', content: 'Guiding-Light, Home, Nonprofit, Community, Support' },
      ],
    };
  },
}
</script>
