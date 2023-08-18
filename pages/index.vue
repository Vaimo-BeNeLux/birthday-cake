<template>
  <div class="page page--index">
    <Header :show-nav="false" />
<!--    <div class="form">-->
<!--      <img class="app-logo" src="../assets/images/App Logo.svg" />-->
<!--      <LoginForm />-->
<!--    </div>-->
    <Footer />
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm.vue';
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header/Header.vue';
export default {
  name: 'IndexPage',
  components: {LoginForm, Footer, Header}
}
</script>

<styles lang="css" scoped>
.page--index {
  display: flex;
  flex-direction: column;
  position: relative;
}
.form {
  align-self: center;
  height: 75vh;
  margin-top: 25vh;
}

</styles>
