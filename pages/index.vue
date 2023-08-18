<template>
  <div class="root">
    <img class="vaimo-logo" src="../assets/images/vaimo-logo-light.svg" />
    <div class="form">
      <img class="app-logo" src="../assets/images/App Logo.svg" />
      <LoginForm />
    </div>
    <Footer />
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm.vue';
import Footer from '../components/Footer/Footer.vue';
export default {
  name: 'IndexPage',
  components: {LoginForm, Footer}
}
</script>

<styles lang="css" scoped>
.root {
  display: flex;
  flex-direction: column;
}
.form {
  align-self: center;
  height: 85vh;
}
</styles>