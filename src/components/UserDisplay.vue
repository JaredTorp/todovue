<template>
<span>
  <span v-if="loggedin">
    Welcome, {{user.firstName}}
    <router-link :to="{name: 'logoutuser'}">(Logout)</router-link>
  </span>
  <span v-if="!loggedin">No user logged in</span>
</span>



</template>

<script>
import todoServices from "@/services/todoServices.js";
export default {
  data() {
    return { user: {}, loggedin: false};
  },

  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      todoServices.getUser()
      .then(response => {
        this.user = response.data.user;
        this.loggedin = true;
      })
      .catch(() => {
        this.loggedin = false;
        this.user = null;
        localStorage.setItem("token", "");

      });
    }
  }




}
</script>

<style></style>
