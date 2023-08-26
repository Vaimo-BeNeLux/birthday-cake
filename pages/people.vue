<template>
    <div class="page page--people">
        <Header />
        <Employees :items="users" />
        <Footer />
    </div>
</template>
<script>
import { ref, onMounted } from '@nuxtjs/composition-api';
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import Employees from '../components/Employees/Employees.vue';
import { getItems } from '../composables/useDatabase';
// import { users } from '../lib/users';

export default {
    name: 'PeoplePage',
    components: {
        Header,
        Footer,
        Employees
    },
    setup() {
        const users = ref([]);

        onMounted(async () => {
            users.value = await getItems('people');
        })

        return {
            users
        }
    }
}
</script>
<style lang="css" scoped>

</style>
