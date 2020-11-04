<template>
  <div>
    <UserDisplay></UserDisplay>
    <H1>ToDo List</H1>
    <p>{{message}}</p>
    <todoListDisplay v-for="list in lists" :key="list.id" :list="list"/>
  </div>
</template>

<script>
import todoListDisplay from '@/components/todoListDisplay.vue'
import UserDisplay from '@/components/UserDisplay.vue'
import todoServices from '@/services/todoServices.js'


export default {
  components: {
    todoListDisplay,
    UserDisplay
  },
  data() {
    return {
      lists: [],
      message : ""

    }
  },
  created() {
      todoServices.getLists() //can replace this
      .then(response => {
        this.lists = response.data.lists
      })
      .catch(error => {
        this.message = error.data.message
      })
  }
}
</script>

<style></style>
