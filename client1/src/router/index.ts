import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
//import Messages from '../pages/Messages.vue';

import Login from '../pages/Login.vue';
import session from "../models/session";
import AssignTask from "../pages/AssignTask.vue";

import contact from "../pages/contact.vue";
import about from "../pages/about.vue";
import signup from "../pages/signup.vue"
import ViewTasks from "../pages/ViewTasks.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  
  { path: '/signup', component: signup, props: { title: '' } },
  { path: '/about', component: about, props: { title: '' } },
  { path: '/contact', component: contact, props: { title: '' } },
  { path: '/Assigntask', component: AssignTask },
  { path: '/ViewTasks', component: ViewTasks }
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkActiveClass: 'is-active',
})

router.beforeEach((to, from) => {
    if (['/Assigntask'].includes(to.path)) {
        if (!session.user) {
            return '/login';
        }
    }
})

export default router;