Vue.component('error', {
  data(){
    return {
      errorText: 'Error during request!',
      isVisibleError: false,
    }
  },
  methods: {
    showError(error) {
      this.errorText = error;
      this.isVisibleError = true;
    }
  },
  template: `
    <div class="error" v-if="isVisibleError">{{ errorText }}</div>
  `
})