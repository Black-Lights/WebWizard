<script setup>

</script>

<template>
  <div>
    <Breadcrumbs :items="breadcrumbs" />
    Activities

    <div>
      <PageBody />
    </div>
  </div>
</template>


<script>
import PageBody from '~/components/PageBody.vue'

export default {
  components: {
    PageBody
  }
}
</script>
<style scoped>

</style>
