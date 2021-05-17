Vue.component('search', {
  data(){
    return {
      searchLine: '',
    }
  },
  methods: {
    startSearch(event) {
      event.preventDefault();
      this.$emit('filter-goods', this.searchLine);
    }
  },
  template: `
    <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="searchLine">
        <button
          @click="startSearch($event)"
          class="btn-search"
          type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
  `
})