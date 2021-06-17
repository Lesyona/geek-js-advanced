<template>
    <div class="small-cart">
        <button
            class="btn-cart"
            type="button"
            @click="toggleCart()">
<!--            <span class="products-number">5</span>-->
        </button>

        <div class="cart-popup-block" v-if="isVisibleCart">
            <cart-item-list></cart-item-list>

            <router-link class="place-order" to="/cart">Place order</router-link>
        </div>
    </div>
</template>

<script>
import CartItemList from './CartItemList.vue';
export default {
    name: "CartPopup",
    components: {
        CartItemList
    },
    data(){
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        toggleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
    },
}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.small-cart {
    position: relative;

    .btn-cart {
        cursor: pointer;
        border: none;
        background: url("../images/cart_icon.svg") 0 0 / cover no-repeat;
        width: 32px;
        height: 29px;
        padding: 0;
        display: block;
        margin-left: 15px;
        outline: none;

        @media (min-width: $tablet-break) {
            margin-left: 25px;
        }

        &:hover {
            -webkit-animation-name: headShake;
            animation-name: headShake;
            -webkit-animation-duration: 1.3s;
            animation-duration: 1.3s;
            -webkit-animation-duration: 1.3s;
            animation-duration: 1.3s;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }
    }
}
.cart-popup-block {
    position: absolute;
    background: var(--white-color);
    right: 0;
    top: 52px;
    z-index: 10;
    width: 220px;
    box-shadow: 17px 19px 24px rgb(0 0 0 / 13%);

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        right: 10px;
        border-bottom: 10px solid var(--white-color);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }

    .cart-products__item {
        min-height: auto;
        margin-bottom: 0;
        box-shadow: none;
        border-bottom: 1px solid var(--grey-color);

        .delete-product {
            top: 9px;
            right: 7px;
        }

        .product-image {
            width: 50px;
            min-width: 50px;
            max-width: none;
        }

        .product-info {
            padding: 10px 30px 10px 10px;

            .product-title {
                font-size: 14px;
                margin-bottom: 5px;
            }

            &__line {
                font-size: 14px;

                .cart-quantity-change {
                    width: 18px;
                    height: 18px;
                    font-size: 11px;
                    margin: 0 4px;
                }
            }
        }
    }

    .place-order {
        color: var(--black-color);
        text-decoration: none;
        text-align: center;
        display: block;
        padding: 10px 0;
        font-weight: bold;
        text-transform: uppercase;
    }
}
</style>