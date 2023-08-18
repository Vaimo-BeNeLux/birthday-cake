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
  position: relative;
}
.form {
  align-self: center;
  height: 75vh;
  margin-top: 25vh;
}
.vaimo-logo {
    width: 200px;
    position: absolute;
    top: 25px;
    right: 100px;
}
.app-logo {
    width: 400px;
    align-self: center;
    margin-bottom: 50px;
}
</styles>