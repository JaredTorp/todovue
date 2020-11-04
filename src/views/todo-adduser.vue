<template>
  <div>
    <H1>Add User</H1>
    

    <form @submit.prevent="addUser">
      First Name:
      <input v-model="user.firstName" type="text" id="firstName">
       Last Name:
      <input v-model="user.lastName" type="text" id="lastName">
       username:
      <input v-model="user.username" type="text" id="username">
       password:
      <input v-model="user.password" type="text" id="password">
      <button name="submit" v-on:click.prevent="addUser()">Submit</button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>

    </form>
  </div>
</template>

<script>

import todoServices from '@/services/todoServices.js'

export default {
  data() {
    return {
      user: {}
    }
  },

  methods: {
    addUser() {
      todoServices.addUser(this.user)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          console.log(error)
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
