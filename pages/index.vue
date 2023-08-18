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
}
.header {
  justify-content: flex-end!important;
}
.header__nav {
  display:none!important;
}
.form {
  align-self: center;
  height: 85vh;
}
.app-logo {
  width: 300px;
  margin: 30px 0;
}
</styles>
