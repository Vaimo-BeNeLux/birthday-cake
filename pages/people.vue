<template>
    <div class="page page--people">
        <Header />
        <Employees :items="users" />
        <Footer />
    </div>
</template>
<script>
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import Employees from '../components/Employees/Employees.vue';
import { users } from '../lib/users';

export default {
    name: 'PeoplePage',
    components: {
        Header,
        Footer,
        Employees
    },
    data() {
        return {
            users: users
        }
    },
}
</script>
<style lang="css" scoped>

</style>
