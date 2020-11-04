<template>
  <div>
    <H1>List Add</H1>
    

    <form @submit.prevent="addList">
      List Name:
      <input v-model="list.name" type="text" id="listName">
      <button name="submit" v-on:click.prevent="addList()">Submit</button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>

    </form>
  </div>
</template>

<script>

import todoServices from '@/services/todoServices.js'


export default {
  data() {
    return {
      list: {}
    }
  },

  methods: {
    addList() {
     
        todoServices.addList(this.list)
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
