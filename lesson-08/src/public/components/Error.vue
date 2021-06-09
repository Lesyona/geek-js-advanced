<template>
    <div class="error" v-if="isVisibleError">{{ errorText }}</div>
</template>

<script>
export default {
    name: "Error",
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
}
</script>

<style scoped>
.error {
    padding: 30px 80px;
    color: red;
    font-weight: bold;
}
</style>