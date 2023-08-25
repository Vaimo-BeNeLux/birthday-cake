<template>
    <section class="container">
        <div>
            <pre>{{ data }}</pre>
        </div>
    </section>
  </template>
  <script>
  import { ref, onMounted } from '@nuxtjs/composition-api';
  import { getItems } from '../composables/useDatabase';

  export default {
    setup() {
        const data = ref(null);

        onMounted(async () => {
            data.value = await getItems('people');
            console.log(data.value);
        });

        return {
            data
        }
    }
  }
  </script>
  <style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  </style>