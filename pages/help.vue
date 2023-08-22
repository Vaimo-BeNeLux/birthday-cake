<template>
  <div class="page page--help">
    <Header />
    <div class="page__content" style="width:100%">
      <h2>💥 Technical issues</h2>
      <ul>
        <li>If you have encountered a situation where the result did not appear within 10 minutes after clicking the button, and the generation status did not change after reloading the page, please clear your LocalStorage (or open the service in incognito mode) and try again.</li>
        <li>If it does not help - please contact us by according to the information below</li>
      </ul>
      <h2>👤 Adding names to the list</h2>
      <p>You have to <a class="accent" href="https://forms.gle/PHP6S9fVBWtm49xWA" target="_blank">this form</a> to add your name into the list. It can take up to several days to appear in a list. Sorry :(</p>
      <h2>ℹ️ Other issues</h2>
      <p>We expect there will be a product owner for this service soon, who will support all other issues. But until that moment, you can contact devs from <a href="/credits" class="accent">Credits</a> for any question.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm.vue';
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header/Header.vue';

export default {
  name: 'HelpPage',
  components: { LoginForm, Footer, Header },
}
</script>

<styles lang="css" scoped>

</styles>
