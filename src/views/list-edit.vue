<template>
  <div>
    <UserDisplay> </UserDisplay>
    <H1>List Edit</H1>
    <p>{{message}}</p>
    <h2>Editing {{list.name}}</h2>


    <form @submit.prevent="updateStudent">
      Name:
      <input v-model="list.name" type="text" id="id">
      <input type="submit" name="submit" v-on:click.prevent="updateList()" >
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
    <button name="add" v-on:click.prevent="addForm()">Add Item</button>
 <center>
  <table>
    <ListItemDisplay v-for="item in items" :key="item.id"  :item="item" @deleteItem="deleteItem(item.id)" @updateItem="updateItem(item)"/>
    <ListItemAdd v-if="addItemDisplay" @addItem="addItem"/>

  </table>
  </center>
  
  
  </div>
</template>

<script>
import todoServices from '@/services/todoServices.js'
import UserDisplay from '@/components/UserDisplay.vue'
import ListItemDisplay from '@/components/ListItemDisplay.vue'
import ListItemAdd from '@/components/ListItemAdd.vue'
export default {
  props: ['id'],
  components: {
    UserDisplay, 
    ListItemDisplay,
    ListItemAdd
  },
  data() {
    return {
      list: {},
      UserDisplay,
      items:{},
      message : "Make updates to the list",
      addItemDisplay: false
    }
  },
  created() {
      todoServices.getList(this.id)
      .then(response => {
        this.list = response.data.list
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
         todoServices.getListItems(this.id)
      .then(response => {
        this.items = response.data.items;
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  methods: {
    addForm(){
      this.addItemDisplay = true;
    },
    updateList() {
      todoServices.updateList(this.id, this.list)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
         console.log(error)
        })
    },
     addItem(item) {
      todoServices.addListItem(this.id, item)
        .then((response) => {
          item.id = response.data.itemid;
          this.items.push(item);
          this.addItemDisplay = false;
        })
        .catch(error => {
         this.message = error.data.message
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },
    updateItem(item){
      todoServices.updateListItem(this.id, item.id, item)
      .then(() => {
          
        })
        .catch(error => {
         this.message = error.response.data.message
        })

    },
    deleteItem(id){
    todoServices.deleteListItem(this.id, id)
      .then(() => {
        this.items.forEach((item,i) => {
          if (item.id == id) {
            this.items.splice(i, 1);
          }
        })
          
        })
        .catch(error => {
         this.message = error.response.data.message
        })
    },
    
}
}
</script>

<style></style> 
