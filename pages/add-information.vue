<template>
    <div class="page">
        <Header />
        <AddDataForm />
        <Footer />
    </div>
</template>
<script>
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import AddDataForm from '../components/Forms/AddDataForm.vue';

export default {
    name: "AddPerson",
    components: {
        Header, 
        Footer,
        AddDataForm
    }
}
</script>
<style lang="css" scoped>
</style>