import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './router';
import App from './views/App.vue';

import './assets/main.css';

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);
app.mount('#app');
// createApp(PokemonApp).mount('#app');
