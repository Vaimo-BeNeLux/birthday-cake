<template>
  <div class="page page--factory">
    <Header />
    <div class="page__content">
      <Generator />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import Generator from "../components/Generator/Generator.vue";

export default {
  name: "FactoryPage",
  components: { Header, Footer, Generator },
};
</script>
<style lang="css" scoped>
</style>
