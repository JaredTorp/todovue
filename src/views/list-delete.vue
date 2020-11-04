<template>
  <div>
    <H1>List Delete</H1>
    <h4>Delete {{ list.name }} ?</h4>
    <button v-on:click="deleteList()">Delete</button>
    <button v-on:click="cancel()">Cancel</button>
  </div>
</template>

<script>

import ToDoServices from '@/services/todoServices.js'

export default {
  props: ['id'],

  data() {
    return {
      list: Object
    }
  },
  created() {
      ToDoServices.getList(this.id)
      .then(response => {
        this.list = response.data.list
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  methods: {
    deleteList() {
        ToDoServices.deleteList(this.id)
        .then(response => {
          this.$router.push({ name: 'list' })
          console.log(response)
        })
        .catch(error => {
          console.log(error.data)
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    }
  }
}
</script>

<style></style>
