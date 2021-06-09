<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="copy">
                © 2021 Brand All Rights Reserved.
            </div>
            <div class="social-links">
                <a href="#">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9" height="15">
                        <use xlink:href="images/social-sprite.svg#fb-icon"></use>
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="15">
                        <use xlink:href="images/social-sprite.svg#inst-icon"></use>
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="15">
                        <use xlink:href="images/social-sprite.svg#pint-icon"></use>
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="14">
                        <use xlink:href="images/social-sprite.svg#tw-icon"></use>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.footer {
    height: 143px;
    background-color: var(--black-color);
}

.footer-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.copy {
    order: 1;
    font-size: 16px;
    color: var(--white-color);
}

.social-links {
    display: flex;
    order: 0;
    margin-bottom: 40px;

    a {
        width: 32px;
        height: 32px;
        line-height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white-color);
        transition: background-color 0.2s ease-in;
        margin: 0 3px;

        &:hover {
            background-color: var(--pink-color);

            svg {
                fill: #fff;
            }
        }
    }

    svg {
        fill: black;
    }
}

@media (min-width: $tablet-break) {
    .footer {
        height: 79px;
    }

    .footer-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .copy {
        order: 0;
    }

    .social-links {
        order: 1;
        margin-bottom: 0;
    }
}
</style>