Vue.component('search', {
  data(){
    return {
      searchLine: '',
    }
  },
  template: `
    <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="searchLine">
        <button
          @click.prevent="$parent.$refs.products.filterGoods(searchLine)"
          class="btn-search"
          type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
  `
})