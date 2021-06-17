<template>
    <div class="cart-forms">
        <div class="form-address">
            <div class="cart-form__title">SHIPPING ADRESS</div>

            <form action="/">
                <div class="form-input-wrap">
                    <input type="text" class="input-text" placeholder="Bangladesh">
                </div>
                <div class="form-input-wrap">
                    <input type="text" class="input-text" placeholder="State">
                </div>
                <div class="form-input-wrap">
                    <input type="text" class="input-text" placeholder="Postcode / Zip">
                </div>

                <button type="submit" class="cart-button">GET A QUOTE</button>
            </form>
        </div>

        <div class="form-checkout">
            <div class="cart-total">
                SUB TOTAL <span>{{ cartTotal }}</span>
                <div class="grand-total">GRAND TOTAL <span>{{ cartTotal }}</span></div>
            </div>
            <button type="submit" class="cart-button">PROCEED TO CHECKOUT</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartForm",
    props: ['cart-total'],
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.cart-forms {
    display: flex;
    flex-direction: column;

    @media (min-width: $tablet-break) {
        flex-direction: row;
    }

    @media (min-width: $desktop-break) {
        flex-direction: column;
        width: 32%;
        margin-left: 13%;
    }
}

.form-address {
    margin-bottom: 48px;

    .cart-form__title {
        font-size: 16px;
        font-weight: 300;
        color: var(--black-color);
        margin-bottom: 20px;
    }

    @media (min-width: $tablet-break) {
        width: 50%;
        margin-right: 7px;
        margin-bottom: 0;
    }

    @media (min-width: $desktop-break) {
        width: 100%;
        margin-right: 0;
    }
}

.form-input-wrap {
    margin-bottom: 20px;

    .input-text {
        border: 1px solid #A4A4A4;
        width: 100%;
        color: #222;
        padding: 15px 16px;
        font-size: 13px;
        font-weight: 300;
        font-family: $font-roboto;
    }
}

.form-checkout {
    background: #F5F3F3;
    padding: 35px;

    .cart-total {
        border-bottom: 1px solid #E2E2E2;
        text-align: right;
        margin-bottom: 17px;
        padding-bottom: 20px;
        text-transform: uppercase;
        color: #4A4A4A;
        font-size: 11px;

        span {
            margin-left: 30px;
        }

        .grand-total {
            font-weight: 300;
            font-size: 16px;
            color: var(--black-color);
            margin-top: 12px;

            span {
                font-weight: bold;
                color: var(--pink-color);
            }
        }
    }

    .cart-button {
        font-size: 16px;
        font-weight: 300;
        background-color: var(--pink-color);
        color: var(--white-color);
        text-transform: uppercase;
        padding: 15px 10px;
        width: 100%;
        max-width: 270px;
        border: 1px solid var(--pink-color);
        transition: background-color ease-in 0.2s;

        &:hover {
            background-color: var(--white-color);
            color: var(--pink-color);
        }
    }

    @media (min-width: $tablet-break) {
        width: 50%;
        margin-left: 8px;
        margin-top: 38px;
        align-self: flex-start;
        padding: 40px 45px;
    }

    @media (min-width: $desktop-break) {
        width: 100%;
        margin-left: 0;
        margin-top: 57px;
    }
}
</style>