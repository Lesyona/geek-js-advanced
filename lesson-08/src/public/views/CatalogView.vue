<template>
    <section class="container featured-section">
        <product-item-list ref="products"></product-item-list>


    </section>
</template>

<script>
import ProductItemList from '../components/ProductItemList.vue';

export default {
    name: "CatalogView",
    components: {
        ProductItemList
    },
}
</script>

<style lang="scss" scoped>
.featured-section {
    padding-top: 35px;
    padding-bottom: 95px;
}

.featured-title {
    color: var(--black-color);
    font-size: 30px;
    text-align: center;
    font-weight: normal;
    margin-bottom: 5px;
}

.featured-subtitle {
    text-align: center;
    font-size: 14px;
    color: #9F9F9F;
    margin-bottom: 50px;
}
</style>