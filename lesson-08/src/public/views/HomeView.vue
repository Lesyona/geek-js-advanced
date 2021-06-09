<template>
    <div>
        <promo-links></promo-links>
        <advantages></advantages>
    </div>
</template>

<script>
import PromoLinks from '../components/PromoLinks.vue';
import Advantages from '../components/Advantages.vue';

export default {
    name: "Home",
    components: {
        PromoLinks,
        Advantages,
    }
}
</script>

<style scoped>

</style>