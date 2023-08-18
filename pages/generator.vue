<template>
    <div class="root">
      <Header />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header/Header.vue';
  export default {
    name: 'IndexPage',
    components: {Header}
  }
  </script>
  
  <style lang="css">
  html {
    box-sizing: border-box;
  }
  body {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>