<template>
    <div>
        <section class="heading-section">
            <div class="heading-container container">
                <h1>SHOPPING CART</h1>
            </div>
        </section>

        <section class="cart-wrap container">
            <cart-item-list></cart-item-list>
            <cart-form
                :cart-total="900"
            ></cart-form>
        </section>
    </div>
</template>

<script>
import CartItemList from '../components/CartItemList.vue';
import CartForm from '../components/CartForm.vue';
export default {
    name: "CartView",
    components: {
        CartItemList,
        CartForm
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.cart-wrap {
    display: flex;
    flex-direction: column;
    padding-top: 39px;
    padding-bottom: 96px;

    @media (min-width: $desktop-break) {
        flex-direction: row;
    }
}
</style>