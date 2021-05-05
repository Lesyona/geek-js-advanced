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
    cartRendered: '',
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
      this.products.forEach(product => {
        let productItem = document.querySelector(`.product-item[data-id="${product.id_product}"]`);

        if(!this.filtered.includes(product)) {
          productItem.classList.add('invisible');
        } else {
          productItem.classList.remove('invisible');
        }
      });
    },
    toggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
      if(this.isVisibleCart) {
        setTimeout(() => {
          let cartBlock = document.querySelector('.cart-block');
          cartBlock.insertAdjacentHTML('afterbegin', this.cartRendered);
        }, 0);
      }
    },
    renderCartItem(product){
      return `<div class="cart-item" data-id="${product.id_product}">
            <div class="product-bio">
            <img src="https://picsum.photos/50/100?random=1" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${product.product_name}</p>
            <p class="product-quantity">Количество: ${product.quantity}</p>
        <p class="product-single-price">${product.price} за ед.</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">${product.quantity*product.price} ₽</p>
            <button class="del-btn" data-id="${product.id_product}">&times;</button>
        </div>
        </div>`
    },
  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
    this.getJson(`${API + this.cartUrl}`)
      .then(data => {
        for(let el of data.contents){
          this.cartProducts.push(el);
          this.cartRendered += this.renderCartItem(el);
        }
      });
  },
});
