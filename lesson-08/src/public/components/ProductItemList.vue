<template>
    <div class="featured-items">
        <product-item
            v-for="product of filtered"
            :key="product.id_product"
            :data-id="product.id_product"
            :img="imgCatalog"
            :product="product"
        >
        </product-item>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    name: "ProductItemList",
    components: {
        ProductItem
    },
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
        this.$root.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.featured-items {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding-bottom: 10px;

    @media (min-width: $tablet-break) {
        padding-bottom: 20px;
    }
}
</style>