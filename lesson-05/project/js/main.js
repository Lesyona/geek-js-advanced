const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    products: [],
    cartProducts: [],
    imgCatalog: 'https://picsum.photos/200/150?random=1',
    searchLine: '',
    filtered: [],
    isVisibleCart: false,
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      console.log(product.id_product);
    },
    filterGoods(event) {
      event.preventDefault();
      const filterValue = new RegExp(this.searchLine, 'i');

      this.filtered = this.products.filter(product => filterValue.test(product.product_name));
    },
    toggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
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
    this.getJson(`${API + this.cartUrl}`)
      .then(data => {
        for(let el of data.contents){
          this.cartProducts.push(el);
        }
      });
  },
});
