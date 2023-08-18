<template>
    <div class="login-form">
        <form @submit="handleSubmit">
            <input v-model="password" class="password-input" type="password" placeholder="PASSWORD" />
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
            window.location.href = '/generator';
            //this.$router.push('/generator');
          } else {
            alert('Invalid password');
          }
          this.password = '';
        }
    },
    mounted() {
      const userToken = localStorage.getItem('user-token');
      console.log('dd', userToken,this.checkPassword(userToken))
      if(this.checkPassword(userToken)) {
        window.location.href = '/generator';
      }
    }
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
