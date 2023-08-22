<template>
  <div class="page page--credits">
    <Header />
    <div class="page__content" style="width:100%">
      <h2>Benelux Cake Forces</h2>
      <p>These people made an effort to make Birthdays fun again!</p>
      <div class="grid">
        <div class="grid__item">
          <img class="photo" src="../assets/credits/olha.png" alt="">
          <div class="name">Olha Bobkova</div>
          <div class="role">Team Coordinator</div>
          <div class="slack"><img src="../assets/images/slack.svg" /> @olha.bobkova</div>
        </div>
        <div class="grid__item">
          <img class="photo" src="../assets/credits/martine.png" alt="">
          <div class="name">Martine Boulanger</div>
          <div class="role">Frontend Developer</div>
          <div class="slack"><img src="../assets/images/slack.svg" /> @martine.boulanger </div>
        </div>
        <div class="grid__item">
          <img class="photo" src="../assets/credits/rekha.png" alt="">
          <div class="name">Rekha Periasamy</div>
          <div class="role">Frontend Developer</div>
          <div class="slack"><img src="../assets/images/slack.svg" /> @rekha.periasamy</div>
        </div>
        <div class="grid__item">
          <img class="photo" src="../assets/credits/kos.png" alt="">
          <div class="name">Kostiantyn Smokvina</div>
          <div class="role">Frontend Developer</div>
          <div class="slack"><img src="../assets/images/slack.svg" /> @kostiantyn.smokvina</div>
        </div>
        <div class="grid__item">
          <img class="photo" src="../assets/credits/dmytro.png" alt="">
          <div class="name">Dmytro Makukh</div>
          <div class="role">Backend Developer</div>
          <div class="slack"><img src="../assets/images/slack.svg" /> @dmytro.makukh </div>
        </div>
        <div class="grid__item">
          <img class="photo" src="../assets/credits/pavlo.png" alt="">
          <div class="name">Pavlo Zamoroka</div>
          <div class="role">Prompt Guru</div>
          <div class="slack"><img src="../assets/images/slack.svg" /> @pavlo.zamoroka</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm.vue';
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header/Header.vue';

export default {
  name: 'CreditsPage',
  components: { LoginForm, Footer, Header },
}
</script>

<styles lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  margin-top:40px;
}
.grid img.photo {
  border-radius: 4px;
}
.name {
  font-weight: bold;
  margin-top: 10px;
}
.role {
  opacity: 0.6;
  margin: 2px 0;
  font-size: 12px;
}
.slack {
  font-size: 14px;
}
.slack img {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-bottom: -3px;
  margin-right: 5px;
}
</styles>
