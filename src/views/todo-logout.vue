<template>
  <div>
    <H1>Logout</H1>
    <p>{{this.message}}</p>
    <h4>Logout {{ user.firstName }} {{user.lastName}} ?</h4>
    <button v-on:click="logout()">Logout</button>
    <button v-on:click="cancel()">Cancel</button>
  </div>
</template>

<script>

import ToDoServices from '@/services/todoServices.js'

export default {
  props: ['id'],

  data() {
    return {
      user: Object,
      message: "click to Logout"
    }
  },
  created() {
      ToDoServices.getUser(this.id)
      .then(response => {
        this.user = response.data.user
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  methods: {
    logout() {
        ToDoServices.logoutUser(this.user)
        .then(response => {
          localStorage.setItem("token", "");
          this.$router.push({ name: 'list' })
          console.log(response)
        })
        .catch(error => {
           this.message = error.response.data.message;
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    }
  }
}
</script>

<style></style>
