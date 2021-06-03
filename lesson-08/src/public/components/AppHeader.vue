<template>
    <header class="header">
        <div class="container header-container">
            <div class="header-left">
                <a class="header-left__item" href="/">
                    <img src="images/logo.png" alt="Logo">
                </a>
                <a class="header-left__item" href="#">
                    <img src="images/search_icon.png" alt="">
                </a>
            </div>
            <div class="header-right">
                <a class="header-right__item burger-menu" href="#">
                    <img src="images/burger_icon.svg" alt="">
                </a>
                <a class="header-right__item" href="registration.html">
                    <img src="images/user_icon.svg" alt="">
                </a>
                <router-link class="header-right__item cart-item" to="/cart">
                    <img src="images/cart_icon.svg" alt="">
                    <span class="products-number">5</span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style scoped>

</style>