const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://picsum.photos/200/150?random=1',
    filtered: [],
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.showError(error);
        })
    },
    filterGoods(searchLine) {
      const filterValue = new RegExp(searchLine, 'i');
      this.filtered = this.products.filter(product => filterValue.test(product.product_name));
    },
  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  },
});
