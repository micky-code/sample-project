import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import List from '../components/List.vue';
import CallEvent from '../components/CallEvent.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/List', component: List},
  { path: '/CallEvent', component: CallEvent },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
