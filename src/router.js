import Vue from 'vue'
import Router from 'vue-router'
import List from './views/list-home.vue'
import Edit from './views/list-edit.vue'
import Delete from './views/list-delete.vue'
import Add from './views/list-add.vue'
import AddUser from './views/todo-adduser.vue'
import LoginUser from './views/todo-login.vue'
import LogoutUser from './views/todo-logout.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base:
  process.env.NODE_ENV === "development" ? "/" : "/todoVue/",
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      props: true
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: Delete,
      props: true
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: AddUser,
      props: true
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: LoginUser,
      props: true
    },
    {
      path: '/logoutuser',
      name: 'logoutuser',
      component: LogoutUser,
      props: true
    }
    /*
    {
      path: '*',
      component: NotFondComponent
    }
    */
  ]
})
