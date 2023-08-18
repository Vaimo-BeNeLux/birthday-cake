<template>
    <div class="header">
        <div class='header__nav'>
            <img class="header__app-logo" src="../../assets/images/App Logo.svg" />
            <nav>
                <li v-for="link in links" :key="link.id" @click="handleClick(link)">
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
                    link: '/generator'
                },
                {
                    id: 2,
                    name: 'Employees',
                    link: '/employees'
                },
                {
                    id: 3,
                    name: 'How to use',
                    link: ''
                },
                {
                    id: 4,
                    name: 'Logout',
                    link: '/'
                },
            ]
        }
    },
    methods: {
        handleClick(link) {
            if (link.name === 'Logout') {
              localStorage.removeItem('user-token');
              window.location.href = '/';
            }
        }
    }
}
</script>
<style lang="css" scoped>
.header {
    margin: 0 auto 50px;
    padding: 25px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.header__nav nav {
    display: flex;
}

li {
    list-style-type: none;
    margin: 0 15px;
}

.header__app-logo {
    width: 200px;
    margin-right: 50px;
}
.header__vaimo-logo {
    width: 200px;
}
</style>
