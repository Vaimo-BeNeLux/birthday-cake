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
import { ref } from "@nuxtjs/composition-api";

export default {
    name: 'LoginForm',
    setup() {
      const accessPassword = 'vaimo';
      const password = ref('');

      const checkPassword = (pw) => {
        // TODO: has to be replaced with env var or Backend password check
        return pw === accessPassword;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(checkPassword(password.value)) {
          localStorage.setItem('user-token', password.value);
          window.location.href = '/factory';
        } else {
          alert('Invalid password');
        }
        password.value = '';
      }

      return {
        handleSubmit,
        password
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
