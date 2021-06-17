<template>
    <header class="header">
        <div class="container header-container">
            <div class="header-left">
                <a class="header-left__item" href="/">
                    <img src="images/logo.png" alt="Logo">
                </a>
                <div class="header-left__item">
                    <search ref="search"></search>
                </div>
            </div>
            <div class="header-right">
                <a class="header-right__item burger-menu" href="#">
                    <img src="images/burger_icon.svg" alt="">
                </a>
                <a class="header-right__item" href="#">
                    <img src="images/user_icon.svg" alt="">
                </a>
                <cart-popup></cart-popup>
            </div>
        </div>
    </header>
</template>

<script>
import Search from '../components/Search.vue';
import CartPopup from '../components/CartPopup.vue';

export default {
    name: "AppHeader",
    components: {
        Search,
        CartPopup,
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.header {
    height: 75px;
    background-color: var(--black-color);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.header-left {
    display: flex;
    align-items: center;
}

.header-left__item {
    text-decoration: none;

    &:last-child {
        margin-left: 15px;

        @media (min-width: $tablet-break) {
            margin-left: 25px;
        }
    }
}

.header-right {
    display: flex;
    align-items: center;
}

.header-right__item {
    text-decoration: none;
    display: none;
    margin-left: 15px;

    @media (min-width: $tablet-break) {
        margin-left: 25px;
    }

    &:first-child {
        display: block;

        @media (min-width: $tablet-break) {
            margin-left: 0;
        }
    }

    &:last-child {
        margin-left: 40px;
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

    @media (min-width: $tablet-break) {
        display: block;
    }
}

.cart-item {
    position: relative;
}

.products-number {
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: var(--pink-color);
    border-radius: 50%;
    color: var(--white-color);
    width: 19px;
    height: 19px;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
}
</style>