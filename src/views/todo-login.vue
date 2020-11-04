<template>
  <div>
    <H1>Login</H1>
    
    <p>{{message}}</p>

    <form @submit.prevent="login">
       
       username:
      <input v-model="user.username" type="text" id="username">
       password:
      <input v-model="user.password" type="text" id="password">
      <button name="submit" v-on:click.prevent="login()">Login</button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>

    </form>
  </div>
</template>

<script>

import todoServices from '@/services/todoServices.js'

export default {
  data() {
    return {
      user: {},
      message:"Enter username and password"
    }
  },

  methods: {
    login() {
      todoServices.loginUser(this.user)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          this.$router.push({ name: 'list' });
        })
        .catch(error => {
          this.message = error.response.data.message
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },
  }
}
</script>

<style scoped>

</style>
