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

<style lang="scss" scoped>
@import '../scss/variables.scss';

.promo-links {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    padding: 64px 0 30px;

    @media (min-width: $tablet-break) {
        padding-top: 20px;
    }
    @media (min-width: $desktop-break) {
        padding-top: 65px;
    }
}

.promo-links__item {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    overflow: hidden;

    img {
        transition: transform ease-in 0.2s;
    }

    &:last-child {
        width: 100%;
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    @media (min-width: $tablet-break) {
        width: calc((100% - 40px) / 3);
        margin-bottom: 20px;
    }
    @media (min-width: $desktop-break) {
        width: calc(100% / 3 - 20px);
        margin-bottom: 30px;
    }
}

.promo-links__item-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 22, 22, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}

.promo-links__item-subtitle {
    font-size: 16px;
    color: var(--white-color);
}

.promo-links__item-title {
    font-size: 24px;
    color: var(--pink-color);
    font-weight: bold;
}
</style>