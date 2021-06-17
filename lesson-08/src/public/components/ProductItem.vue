<template>
    <router-link to="/catalog/:id_product" class="featured-item">
        <span class="featured-item__image">
            <img class="img-fluid" src="images/featured_items_1.jpg" alt="">

            <button
                @click="$root.$refs.cart.addCartItem(product)"
                class="add-to-cart"
            >
                Add to Cart
            </button>
        </span>
        <span class="featured-item__info">
            <span class="featured-item__title">
                {{ product.product_name }}
            </span>
            <span class="featured-item__desc">
                {{ product.description }}
            </span>
            <span class="featured-item__price">
                {{ product.price }}₽
            </span>
        </span>
    </router-link>
</template>

<script>
export default {
    name: "ProductItem",
    props: ['img', 'product'],
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.featured-item {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin-bottom: 30px;

    @media (min-width: $tablet-break) {
        width: calc(100% / 2 - 7px);
        margin-bottom: 16px;
    }
    @media (min-width: $desktop-break) {
        width: calc(100% / 3 - 20px);
        margin-bottom: 30px;
    }
}

.featured-item__image {
    position: relative;

    img {
        width: 100%;
    }

    &:hover {
        &::before {
            background-color: rgba(58, 56, 56, 0.86);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .add-to-cart {
            display: flex;
        }
    }
}

.add-to-cart {
    display: none;
    align-items: center;
    border: 1px solid var(--white-color);
    color: var(--white-color);
    font-size: 14px;
    padding: 12px 16px 12px 13px;
    cursor: pointer;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.2s ease-in;
    background: none;

    &::before {
        content: '';
        background: url(../images/cart_icon.svg) 0 0 / cover no-repeat;
        width: 26px;
        height: 24px;
        margin-right: 11px;
    }

    &:hover {
        background-color: var(--pink-color);
    }
}

.featured-item__info {
    background-color: #f8f8f8;
    padding: 25px 28px 20px 16px;
    flex-grow: 1;
}

.featured-item__title {
    display: block;
    text-transform: uppercase;
    font-size: 13px;
    color: #000;
}

.featured-item__desc {
    color: #5D5D5D;
    font-size: 14px;
    font-weight: 300;
    display: block;
    margin: 12px 0 17px;
}

.featured-item__price {
    color: var(--pink-color);
    font-size: 16px;
    display: block;
}
</style>