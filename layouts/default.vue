<template>
  <v-app>
    <Header />
    <NavBar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Add any global styles here if needed */
</style>





<!--<template>-->
<!--  <v-app>-->
<!--    <Header />-->
<!--    <NavBar />-->
<!--    <v-main>-->
<!--      <v-container>-->
<!--        <Nuxt />-->
<!--      </v-container>-->
<!--    </v-main>-->
<!--    <Footer />-->
<!--  </v-app>-->
<!--</template>-->

<!--<script>-->
<!--import NavBar from '@/components/NavBar.vue'-->
<!--import Footer from '@/components/Footer.vue'-->
<!--import Header from '@/components/Header.vue'-->

<!--export default {-->
<!--  components: {-->
<!--    NavBar,-->
<!--    Footer,-->
<!--    Header-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--/* Add any global styles here if needed */-->
<!--</style>-->






<!--<template>-->
<!--  <div class="layout">-->
<!--    <Header />-->
<!--      <NavBar />-->
<!--    <main class="main">-->
<!--      <Nuxt />-->
<!--    </main>-->
<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import NavBar from '@/components/NavBar.vue'-->
<!--import Header from '@/components/Header.vue'-->
<!--import Footer from '@/components/Footer.vue'-->


<!--export default {-->
<!--  name: 'DefaultLayout',-->
<!--  components: {-->
<!--    NavBar,-->
<!--    Header,-->
<!--    Footer-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.layout {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  min-height: 100vh;-->
<!--}-->

<!--.main {-->
<!--  flex: 1;-->
<!--  padding: 2rem;-->
<!--  background-color: #f7f9fc;-->
<!--}-->
<!--</style>-->
