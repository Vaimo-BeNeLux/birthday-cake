<template>
    <section class="container">
        <div>
            <button @click="deleteData">Delete Data</button>
        </div>
        <div>
            results: <pre>{{ data }}</pre>
            <hr />
            <!-- people: <pre>{{ people }}</pre> -->
        </div>
    </section>
  </template>
  <script>
  import { ref, onMounted } from '@nuxtjs/composition-api';
  import { getItems, addItem, editItem, removeItem } from '../composables/useDatabase';

  export default {
    setup() {
        const data = ref(null);
        // const people = ref(null);

        onMounted(async () => {
            data.value = await getItems('results');
            // people.value = await getItems('people');
            console.log(data.value);
            // console.log(people.value);
        });

        const updateData = async () => {
            const updateData = {
                id: "mzOuWzMwWSzqwjh1Sv2i",
                first_name: "Martine",
                last_name: "Boulanger",
                bd: 8,
                bm: 12,
                photo_link:
                    "https://ca.slack-edge.com/TC4562M3J-U022X6CCHCG-30a86c6b26f8-512",
                active: true,
                face: true,
            }
            await editItem('people', updateData.id, updateData)
        }

        const deleteData = async () => {
            for (const item of data.value) {
                const id = item.id
                await removeItem('results', id)
            }
            location.reload();
        }

        return {
            data,
            // people,
            updateData,
            deleteData
        }
    }
  }
  </script>
  <style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  button {
    margin: 2rem auto;
  }
  </style>