<!--<template>-->
<!--  <v-app>-->
<!--    <Header />-->
<!--      <NavBar />-->
<!--        &lt;!&ndash; Chatbot component as an overlay &ndash;&gt;-->
<!--        <Chatbot />-->
<!--          <v-main>-->
<!--            <v-container>-->
<!--              <Nuxt />-->
<!--            </v-container>-->
<!--          </v-main>-->
<!--      <Footer />-->
<!--  </v-app>-->
<!--</template>-->

<!--<script>-->
<!--import NavBar from '@/components/NavBar.vue'-->
<!--import Header from '@/components/Header.vue'-->
<!--import Footer from '@/components/Footer.vue'-->
<!--import Chatbot from '@/components/Chatbot.vue';-->

<!--export default {-->
<!--  components: {-->
<!--    NavBar,-->
<!--    Header,-->
<!--    Footer,-->
<!--    Chatbot-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--/* Add any global styles here if needed */-->
<!--</style>-->





<template>
  <v-app>
    <Header />
    <NavBar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
<!--    Chatbot component as an overlay-->
    <Chatbot />
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Chatbot from '@/components/Chatbot.vue';


export default {
  components: {
    NavBar,
    Footer,
    Header,
    Chatbot
  }
}
</script>

<style>
/* Add any global styles here if needed */
</style>






<!--<template>-->
<!--  <div class="layout">-->
<!--    <Header />-->
<!--      <NavBar />-->
<!--    <main class="main">-->
<!--      <Nuxt />-->
<!--    </main>-->
<!--    <Chatbot />-->
<!--    <Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import NavBar from '@/components/NavBar.vue'-->
<!--import Header from '@/components/Header.vue'-->
<!--import Footer from '@/components/Footer.vue'-->
<!--import Chatbot from '@/components/Chatbot.vue';-->



<!--export default {-->
<!--  name: 'DefaultLayout',-->
<!--  components: {-->
<!--    NavBar,-->
<!--    Header,-->
<!--    Footer,-->
<!--    Chatbot-->
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
