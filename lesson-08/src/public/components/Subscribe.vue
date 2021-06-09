<template>
    <section class="section-subscribe">
        <div class="subscribe-container container">
            <div class="subscribe-feedback">
                <div class="user-image"></div>
                <div class="user-feedback">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <em>a pulvinar purus condimentum</em>“
                </div>
            </div>
            <div class="subscribe-form__wrap">
                <div class="subscribe-form__title">
                    <h2>SUBSCRIBE</h2>
                    FOR OUR NEWLETTER AND PROMOTION
                </div>
                <form class="subscribe-form" action="/">
                    <input class="form-input" type="email" placeholder="Enter Your Email">
                    <button class="form-button" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Subscribe"
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.section-subscribe {
    background: url(../images/subscribe_bg.jpg) 0 0 / cover no-repeat;
}

.subscribe-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 64px;
    padding-bottom: 110px;
    color: var(--black-color);

    @media (min-width: $tablet-break) {
        padding-bottom: 140px;
    }
    @media (min-width: $desktop-break) {
        flex-direction: row;
        padding-top: 100px;
        padding-bottom: 150px;
    }
}

.subscribe-feedback {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 60px;

    @media (min-width: $tablet-break) {
        max-width: 360px;
    }
    @media (min-width: $desktop-break) {
        margin-bottom: 0;
    }
}

.user-image {
    background: url(../images/user_image.png) 50% 50% / cover no-repeat;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    margin-bottom: 30px;
}

.user-feedback {
    font-size: 18px;

    @media (min-width: $tablet-break) {
        font-size: 20px;
    }
}

.subscribe-form__wrap {
    text-align: center;
    max-width: 356px;

    @media (min-width: $tablet-break) {
        min-width: 340px;
    }
    @media (min-width: $desktop-break) {
        margin-right: 100px;
    }
}

.subscribe-form__title {
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 22px;

    @media (min-width: $tablet-break) {
        font-size: 18px;
    }

    h2 {
        font-size: 24px;
    }
}

.subscribe-form {
    display: flex;
}

.form-input {
    border: 0;
    background-color: #E1E1E1;
    height: 46px;
    padding: 0 20px;
    font-size: 14px;
    border-radius: 23px 0 0 23px;
    flex-grow: 1;
}

.form-button {
    background-color: var(--pink-color);
    color: var(--white-color);
    text-align: center;
    font-size: 14px;
    height: 46px;
    border: 0;
    padding: 0 20px;
    border-radius: 0 23px 23px 0;
    cursor: pointer;
}
</style>