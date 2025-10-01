<script>
import ContactBook from './views/ContactBook.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  }
}
</script>

<template>
  <div id="app">
    <div class="page">
      <header class="page-header">
        <AppHeader />
      </header>

      <main class="page-main container">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style>
.page {
  min-height: 120vh;
}

.page-header {
  background-color: rgba(199, 235, 255, 0.308);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}

.page-main {
  margin-top: 110px;
}
</style>
