<template>
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
</template>

<script>
export default {
    name: "CartItem",
    props: ['product'],
}
</script>

<style scoped>

</style>