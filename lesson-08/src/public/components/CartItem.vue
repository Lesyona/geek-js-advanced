<template>
    <div class="cart-products__item">
        <button class="delete-product" @click="$emit('removeCartItem', product)">
            <i class="fas fa-times"></i>
        </button>

        <div class="product-image">
            <img src="images/featured_items_2.jpg" :alt="product.product_name">
        </div>

        <div class="product-info">
            <div class="product-title">{{ product.product_name }}</div>

            <div class="product-info__line">
                Price: <span class="product-price">{{ product.price }}</span>
            </div>
            <div class="product-info__line">
                Quantity:
                <button
                    @click="$emit('removeCartItem', product)"
                    class="cart-quantity-change"
                >
                    <i class="fas fa-minus"></i>
                </button>
                {{ product.quantity }}
                <button
                    @click="$emit('addCartItem', product)"
                    class="cart-quantity-change"
                >
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: ['product'],
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.cart-products {
    margin-bottom: 45px;

    @media (min-width: $tablet-break) {
        margin-bottom: 64px;
    }

    @media (min-width: $desktop-break) {
        width: 55%;
    }

    &__item {
        display: flex;
        background-color: var(--color-white);
        box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
        margin-bottom: 32px;
        position: relative;

        @media (min-width: $tablet-break) {
            margin-bottom: 30px;
        }

        .delete-product {
            position: absolute;
            top: 14px;
            right: 12px;
            background: none;
            border: 0;
            color: #575757;
            cursor: pointer;
            font-size: 17px;
        }

        .product-image {
            width: 35%;
            min-width: 35%;
            min-height: 100%;

            img {
                width: 100%;
                object-fit: cover;
                height: 100%;
            }

            @media (min-width: $tablet-break) {
                max-width: 262px;
            }
        }

        .product-info {
            padding: 13px 25px 35px 17px;
            flex-grow: 1;

            .product-title {
                text-transform: uppercase;
                color: var(--black-color);
                font-size: 16px;
                margin-bottom: 25px;
            }

            &__line {
                font-size: 14px;
                color: #575757;
                padding: 2px 0;

                .product-price {
                    color: var(--pink-color);
                }
            }

            .product-ammount {
                width: 30px;
                display: inline-block;
                height: 18px;
                line-height: 18px;
                border: 1px solid #EAEAEA;
                font-size: 10px;
                color: #656565;
                padding: 0 5px;
                text-align: center;
                margin-left: 30px;
                vertical-align: middle;
            }

            @media (min-width: $tablet-break) {
                padding-left: 30px;
                padding-top: 22px;

                .product-title {
                    font-size: 24px;
                    margin-bottom: 40px;
                }

                &__line {
                    font-size: 22px;
                    padding: 4px 0;
                }

                .product-ammount {
                    width: 44px;
                    font-size: 18px;
                    height: 24px;
                    line-height: 24px;
                }
            }
        }
    }

    &-buttons {
        display: flex;
        justify-content: space-around;

        @media (min-width: $tablet-break) {
            justify-content: space-evenly;
            margin-top: 62px;
        }

        @media (min-width: $desktop-break) {
            justify-content: space-between;
            margin-top: 72px;
        }
    }
}

.cart-quantity-change {
    background: #eee;
    border: none;
    color: #575757;
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 12px;
    cursor: pointer;
    margin: 0 10px;
}
</style>