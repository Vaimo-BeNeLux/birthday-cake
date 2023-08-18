<template>
  <div class="page page--factory">
    <Header />
    <Generator />
    <GeneratedImages />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import GeneratedImages from "../components/GeneratedImages/GeneratedImages.vue";
import Generator from "../components/Generator/Generator.vue";

export default {
  name: "FactoryPage",
  components: { Header, Footer, GeneratedImages, Generator },
};
</script>
<style lang="css" scoped>
</style>
