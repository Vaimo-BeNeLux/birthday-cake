<template>
    <div class="header">
        <div class='header__nav'>
            <img class="header__app-logo" src="../../assets/images/App Logo.svg" />
            <nav>
                <li v-for="link in links" :key="link.id">
                    <a :href="link.link">{{ link.name }}</a>
                </li>
            </nav>
        </div>
        <img class="header__vaimo-logo" src="../../assets/images/vaimo-logo-light.svg" />
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'Generator',
                    link: ''
                },
                {
                    id: 2,
                    name: 'Employees',
                    link: ''
                },
                {
                    id: 3,
                    name: 'How to use',
                    link: ''
                },
                {
                    id: 4,
                    name: 'Logout',
                    link: ''
                },
            ]
        }
    },
}
</script>
<style lang="css" scoped>
.header {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 1366px;
}
.header,
.header__nav,
.header__nav nav {
    display: flex;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: white;
}
</style>