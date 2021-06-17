<template>
    <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="searchLine">
        <button
            @click.prevent="$root.$refs.CatalogView.filterGoods(searchLine)"
            class="btn-search"
            type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    name: "Search",
    data(){
        return {
            searchLine: '',
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.search-form {
    position: relative;
    display: inline-block;
}
.btn-search {
    background-color: transparent;
    border: none;
    color: #fafafa;
    font-size: 1.2em;
    position: absolute;
    bottom: 5px;
    right: 0;
}
.search-field:focus{
    outline: none;
}
.search-field {
    width: 170px;
    color: #fafafa;
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fafafa;

    @media (min-width: $tablet-break) {
        width: 200px;
    }
}
</style>