<template>
  <div class="quick-exit">
    <button @click="handleQuickExit" class="quick-exit-button">
      Quick Exit
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  },
  methods: {
    handleQuickExit() {
      window.location.href = 'https://www.google.com';
    }
  }
};
</script>

<style scoped>
.quick-exit {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.quick-exit-button {
  padding: 10px 20px;
  background-color: #ff2700;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}

.quick-exit-button:hover {
  background-color: #afeeee;
}
</style>
