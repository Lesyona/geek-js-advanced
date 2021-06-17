const app = new Vue({
  el: '#app',
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        })
    },
  },
  mounted() {
    // console.log(this.$refs.products);
  },
});
