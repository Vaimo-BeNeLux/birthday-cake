<template>
  <div class="root">
    <Header />
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
import Header from '../components/Header/Header.vue';
export default {
  name: 'IndexPage',
  components: {LoginForm, Footer, Header}
}
</script>

<styles lang="css" scoped>
.root {
  display: flex;
  flex-direction: column;
  position: relative;
}
.header {
  justify-content: flex-end!important;
}
.header__nav {
  display:none!important;
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
.app-logo {
  width: 300px;
  margin: 30px 0;
}
</styles>
