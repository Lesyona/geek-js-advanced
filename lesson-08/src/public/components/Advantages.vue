<template>
    <section class="advantages">
        <div class="container advantages-container">
            <div class="advantages__item">
                <div class="advantages__item-icon">
                    <img src="images/features_icon_1.svg" alt="">
                </div>
                <div class="advantages__item-title">
                    Free Delivery
                </div>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </div>

            <div class="advantages__item">
                <div class="advantages__item-icon">
                    <img src="images/features_icon_2.svg" alt="">
                </div>
                <div class="advantages__item-title">
                    Sales & discounts
                </div>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </div>

            <div class="advantages__item">
                <div class="advantages__item-icon">
                    <img src="images/features_icon_3.svg" alt="">
                </div>
                <div class="advantages__item-title">
                    Quality assurance
                </div>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Advantages"
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.advantages {
    background-color: var(--black-color);
    color: var(--white-color);
}

.advantages-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
    padding-bottom: 40px;

    @media (min-width: $desktop-break) {
        flex-direction: row;
        padding-top: 104px;
        padding-bottom: 104px;
    }
}

.advantages__item {
    font-size: 14px;
    color: #FBFBFB;
    font-weight: 300;
    text-align: center;
    margin-bottom: 45px;

    @media (min-width: $tablet-break) {
        max-width: 50%;
    }
    @media (min-width: $desktop-break) {
        margin-bottom: 0;
    }
}

.advantages__item-icon {
    width: 47px;
    height: 35px;
    margin: 0 auto 20px;
}

.advantages__item-title {
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 16px;
}
</style>