<template>
    <div class="nav__switch">
        <img src="@/assets/images/desktop/icon-sun.svg" alt="">
        <input type="checkbox" class="mode__btn" v-model="darkmode">
        <div class="switch">
        </div>
        <img src="@/assets/images/desktop/icon-moon.svg" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                darkmode: false,
            }
        },
        watch: {
            darkmode(newVal){
                this.bus.$emit('darkmode', newVal);
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.nav__switch {
    min-height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav__switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11.2rem;
    height: 5rem;
    position: relative;

    input {
        position: absolute;
        z-index: 999;
        min-width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }

    input[type=checkbox]:checked ~ .switch::after {
        transform: translateX(2.4rem);

    }

    input[type=checkbox]:hover ~ .switch::after {
        background-color: $primary-light-violet;
    }

    img {
        width: 2.4rem;
        height: 2.4rem;
    }
}

.switch {
    position: relative;
    width: 4.8rem;
    height: 2.4rem;
    background: #fff;
    border-radius: 2rem;
    transition: 350ms ease;



    &::after {
        position: absolute;
        content: '';
        width: 2.2rem;
        height: 2.2rem;
        top: 0.1rem;
        left: 0.1rem;
        border-radius: 50%;
        background-color: $primary-violet;
        transition: 350ms ease;
       
    }
}


</style>