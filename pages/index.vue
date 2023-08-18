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

import { useQuery, useBody } from "h3"
import { add } from "../lib/firestore"


export default {
  name: 'IndexPage',
  components: {LoginForm, Footer, Header},

  methods:{
    async send() {
      try {
        const docRef = await add('test', "Hello")
        console.log('docRef', docRef)
        return { result: docRef }
      } catch (error) {
        return { error: error.message }
      }
    }
  },

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
