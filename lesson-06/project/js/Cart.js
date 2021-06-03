Vue.component('cart', {
  data(){
    return {
      cartUrl: '/getBasket.json',
      cartProducts: [],
      isVisibleCart: false,
    }
  },
  methods: {
    toggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
    },
    addCartItem(product){
      this.$parent.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if(data.result === 1) {
            let productFind = this.cartProducts.find(item => item.id_product === product.id_product);

            if(productFind) {
              productFind.quantity++;
            } else {
              let productToCart = Object.assign({quantity: 1}, product);
              this.cartProducts.push(productToCart);
            }
          }
        });
    },
    removeCartItem(product) {
      this.$parent.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if(data.result === 1) {
            if(product.quantity > 1){
              product.quantity--;
            } else {
              this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
            }
          }
        });
    },
  },
  mounted() {
    this.$parent.getJson(`${API + this.cartUrl}`)
      .then(data => {
        for(let el of data.contents){
          this.cartProducts.push(el);
        }
      });
  },
  template: `
    <div>
        <button
          class="btn-cart"
          type="button"
          @click="toggleCart()">
            Корзина
        </button>
          
        <div class="cart-block" v-if="isVisibleCart">
            <p v-if="!cartProducts.length">Корзина пуста</p>
            <cart-item
              v-for="item of cartProducts"
              :key="item.id_product"
              :product="item"
              @removeCartItem="removeCartItem"
              >
            </cart-item>
        </div>
    </div>
  `
})

Vue.component('cart-item', {
  props: ['product'],
  template: `
    <div class="cart-item">
        <div class="product-bio">
            <img src="https://picsum.photos/50/100?random=1" alt="Some image">
            <div class="product-desc">
                <p class="product-title">{{ product.product_name }}</p>
                <p class="product-quantity">Количество: {{ product.quantity }}</p>
                <p class="product-single-price">{{ product.price }}₽ за единицу</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ product.quantity * product.price }}₽</p>
            <button class="del-btn" @click="$emit('removeCartItem', product)">&times;</button>
        </div>
    </div>
  `
})