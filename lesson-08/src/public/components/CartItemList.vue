<template>
    <div>
        <cart-item
            v-for="item of cartProducts"
            :key="item.id_product"
            :product="item"
            @removeCartItem="removeCartItem"
        >
        </cart-item>

        {{ cartTotal }}
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
export default {
    name: "CartItemList",
    components: {
        CartItem,
    },
    data(){
        return {
            cartProducts: [],
        }
    },
    methods: {
        addCartItem(product){
            let productFind = this.cartProducts.find(item => item.id_product === product.id_product);
            if(productFind) {
                this.$root.putJson(`/api/cart/${productFind.id_product}`, {quantity: 1})
                    .then(data => {
                        if (data.result === 1) {
                            productFind.quantity++;
                        }
                    });
            } else {
                let productToCart = Object.assign({quantity: 1}, product);
                this.$root.postJson('/api/cart', productToCart)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartProducts.push(productToCart);
                        }
                    });
            }
        },
        removeCartItem(product) {
            if(product.quantity > 1){
                this.$root.putJson(`/api/cart/${product.id_product}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            product.quantity--;
                        }
                    });
            } else {
                this.$root.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if(data.result === 1) {
                            this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
                        }
                    });
            }
        },
    },
    mounted() {
        this.$root.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartProducts.push(el);
                }
            });
    },
    computed: {
        cartTotal() {
            let total = 0;
            this.cartProducts.forEach(product => {
                total += product.price * product.quantity;
            })
            return total;
        }
    },
}
</script>

<style scoped>

</style>