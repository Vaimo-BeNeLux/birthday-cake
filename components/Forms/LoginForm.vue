<template>
    <div class="login-form container-mini">
        <div class="login-form__logo">
          <img src="../../assets/images/App Logo.svg" />
        </div>
        <form @submit="handleSubmit">
            <input v-model="password" class="password-input" type="password" placeholder="Password" />
            <button type="submit">Enter the Cake Factory</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'LoginForm',
    data() {
        return {
          accessPassword: 'vaimo',
          password: ''
        }
    },
    methods: {
        checkPassword(password) {
          // TODO: has to be replaced with env var or Backend password check
          return password === this.accessPassword;
        },
        handleSubmit(e) {
          e.preventDefault();
          if(this.checkPassword(this.password)) {
            localStorage.setItem('user-token', this.password);
            window.location.href = '/factory';
          } else {
            alert('Invalid password');
          }
          this.password = '';
        }
    }
}
</script>
<style lang="css">
.login-form {
  margin-bottom: 50px;
}
.login-form form {
    display:flex;
    flex-direction: column;
}
.password-input {
    margin-bottom: 10px;
}
.login-form__logo {
  padding: 0 30px;
  margin-bottom: 30px;
  height: 72px;
}
</style>
