<template>
  <div class="page page--index">
    <Header :show-nav="false" />
    <div class="page__content">
      <LoginForm />
      <button @click="send">Send</button>
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
  components: { LoginForm, Footer, Header },

  beforeMount() {
    const userToken = localStorage.getItem('user-token');
    if(userToken) window.location.href = '/factory';
  }
}
</script>

<styles lang="css" scoped>
.page--index {
  display: flex;
  flex-direction: column;
  position: relative;
}
</styles>
