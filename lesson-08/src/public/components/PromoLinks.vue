<template>
    <section class="container">
        <div class="promo-links">
            <router-link to="/catalog" class="promo-links__item">
                <img class="img-fluid" src="images/promo_link_1.jpg" alt="">
                <span class="promo-links__item-text">
                      <span class="promo-links__item-subtitle">
                          30% OFF
                      </span>
                      <span class="promo-links__item-title">
                          FOR WOMEN
                      </span>
                  </span>
            </router-link>

            <router-link to="/catalog" class="promo-links__item">
                <img class="img-fluid" src="images/promo_link_2.jpg" alt="">
                <span class="promo-links__item-text">
                      <span class="promo-links__item-subtitle">
                          HOT DEAL
                      </span>
                      <span class="promo-links__item-title">
                          FOR MEN
                      </span>
                  </span>
            </router-link>

            <router-link to="/catalog" class="promo-links__item">
                <img class="img-fluid" src="images/promo_link_3.jpg" alt="">
                <span class="promo-links__item-text">
                      <span class="promo-links__item-subtitle">
                          NEW ARRIVALS
                      </span>
                      <span class="promo-links__item-title">
                          FOR KIDS
                      </span>
                  </span>
            </router-link>

            <router-link to="/catalog" class="promo-links__item">
                <picture>
                    <source srcset="images/promo_link_4.jpg" media="(min-width: 600px)">
                    <img class="img-fluid" src="images/promo_link_4_mob.jpg" alt="">
                </picture>
                <span class="promo-links__item-text">
                      <span class="promo-links__item-subtitle">
                          LUXIROUS & TRENDY
                      </span>
                      <span class="promo-links__item-title">
                          ACCESORIES
                      </span>
                  </span>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "PromoLinks"
}
</script>

<style scoped>

</style>