<template>
    <div class="login-form">
        <form :onsubmit="handleSubmit">
            <input class="password-input" type="password" placeholder="PASSWORD" />
            <button type="submit">Enter the Cake Factory</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'LoginForm',
    methods: {
        handleSubmit() {
            
        }
    },
}
</script>
<style lang="css">
.login-form {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-form form {
    display:flex;
    flex-direction: column;
}
.password-input {
    margin-bottom: 10px;
}
</style>