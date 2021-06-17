import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import Subscribe from '../components/Subscribe.vue';
import Error from '../components/Error.vue';

import HomeView from '../views/HomeView.vue';
import CatalogView from '../views/CatalogView.vue';
import CartView from '../views/CartView.vue';

import VueRouter from "vue-router";

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/cart',
    component: CartView
  },
  {
    path: '/catalog',
    component: CatalogView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = {
  el: '#app',
  router: router,
  components: {
    AppHeader,
    AppFooter,
    Subscribe,
    Error,
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        })
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        });
    },
    deleteJson(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        });
    },
  },
}

export default app;