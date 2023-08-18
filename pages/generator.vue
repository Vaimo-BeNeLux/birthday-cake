<template>
    <div class="root">
      <Header />
      <!-- Content Component here -->
      <GeneratedImages />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header/Header.vue';
  import Footer from '../components/Footer/Footer.vue';
  import GeneratedImages from '../components/GeneratedImages/GeneratedImages.vue';
  export default {
    name: 'GeneratorPage',
    components: {Header, Footer, GeneratedImages}
  }
  </script>