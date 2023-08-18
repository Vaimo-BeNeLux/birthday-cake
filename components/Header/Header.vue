<template>
    <div class="header" :class="{ 'with-nav': showNav }">
        <div v-if="showNav" class='header__nav'>
            <a href="/">
              <img class="header__app-logo" src="../../assets/images/App Logo.svg" />
            </a>
            <nav>
                <li v-for="link in links" :key="link.id" @click="handleClick(link)">
                    <a :href="link.link" :class="{'active': $route.path === link.link }">{{ link.name }}</a>
                </li>
            </nav>
        </div>
        <img class="header__vaimo-logo" src="../../assets/images/vaimo-logo-light.svg" />
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
      showNav: {
        type: Boolean,
        default: true
      }
    },
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'Factory',
                    link: '/factory'
                },
                {
                    id: 2,
                    name: 'People',
                    link: '/people'
                },
                {
                    id: 3,
                    name: 'Guide',
                    link: ''
                },
                {
                    id: 4,
                    name: 'Logout',
                    link: '#logout'
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
    margin: 0 auto;
    padding: 30px 15px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 50px;
}
.header.with-nav {
    justify-content: space-between;
}
.header__nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.header__nav nav {
    display: flex;
}

.header__nav nav a {
  display: block;
  line-height: 20px;
  padding: 15px 15px;
  opacity: 0.6;
  transition: opacity 0.2s
}

.header__nav nav a.active,
.header__nav nav a:hover {
  opacity: 1;
}

li {
    list-style-type: none;
}

.header__app-logo {
    width: 200px;
    margin-right: 50px;
}
.header__vaimo-logo {
    width: 100px;
}
</style>
