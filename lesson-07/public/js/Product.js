Vue.component('products', {
  data(){
    return {
      imgCatalog: 'https://picsum.photos/200/150?random=1',
      products: [],
      filtered: [],
    }
  },
  methods: {
    filterGoods(searchLine) {
      const filterValue = new RegExp(searchLine, 'i');
      this.filtered = this.products.filter(product => filterValue.test(product.product_name));
    },
  },
  mounted() {
    this.$parent.getJson('/api/products')
      .then(data => {
        for(let el of data){
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  },
  template: `
    <div class="products">
        <template v-if="!filtered.length">
            <h2 class="no-data">Нет данных</h2>
        </template>
        <product-item
          v-for="product of filtered"
          :key="product.id_product"
          :data-id="product.id_product"
          :img="imgCatalog"
          :product="product"
          >
        </product-item>
    </div>
  `
})

Vue.component('product-item', {
  props: ['img', 'product'],
  template: `
    <div class="product-item" >
        <img :src="img" alt="Some img">
        <div class="desc">
            <h3>{{ product.product_name }}</h3>
            <p>{{ product.price }}₽</p>
            <button class="buy-btn" @click="$root.$refs.cart.addCartItem(product)">Купить</button>
        </div>
    </div>
  `
})