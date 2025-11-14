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
  min-height: 100vh;
  background: transparent;
}

.page-header {
  background: linear-gradient(140deg, #67b0ec 0%, #00098d 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.page-main {
  margin-top: 90px;
  padding: 24px;
}

@media (max-width: 768px) {
  .page-main {
    padding: 16px;
  }
}
</style>
