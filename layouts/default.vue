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
  <div class="flex flex-col min-h-screen">
    <v-app>

      <!-- Header -->
      <header class="bg-gray-800 text-white">
        <Header v-if="$vuetify.breakpoint.lgAndUp" />
      </header>

<!--      &lt;!&ndash; Navigation Bar &ndash;&gt;-->
<!--      <nav class="bg-gray-700 text-white">-->
<!--        <NavBar />-->
<!--      </nav>-->
      <!-- Render mobile navigation on small screens -->
      <MobileNavbar v-if="$vuetify.breakpoint.smAndDown" />

      <!-- Render desktop navigation on larger screens -->
      <Navbar v-else />

      <!-- Your main app content here -->
<!--      <router-view />-->

      <!-- Main Content -->
      <v-main class="flex-1">
        <v-container class="px-4 py-8">
          <Nuxt />
        </v-container>
      </v-main>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white mt-auto">
        <Footer />
      </footer>

      <!-- Chatbot component as an overlay -->
      <Chatbot />
    </v-app>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import Chatbot from '@/components/Chatbot.vue'
import MobileNavbar from '@/components/MobileNavbar.vue';
import Navbar from '@/components/NavBar.vue';

export default {
  components: {
    // NavBar,
    Footer,
    Header,
    HeaderMobile,
    Chatbot,
    MobileNavbar,
    Navbar,
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
