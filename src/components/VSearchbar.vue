<template>
    <div class="nav__searchbar">
        <div class="col nav__searchbar--search">
            <img src="@/assets/images/desktop/icon-search.svg" alt="">
            <input type="text" placeholder="Filter by title, companies expertise...">
        </div>
        <div class="col nav__searchbar--location">
            <img src="@/assets/images/desktop/icon-location.svg" alt="">
            <input type="text" placeholder="Filter by location... ">
        </div>
        <div class="col nav__searchbar--checkbox">
            <VCheckbox />
            <p>Full Time <span>Only</span></p>
            <button class="btn primary__btn--1">Search</button>
        </div>


        <VSearchbarMobile />



    </div>
</template>

<script>

    import VCheckbox from '@/components/VCheckbox.vue';
    import VSearchbarMobile from '@/components/VSearchbarMobile.vue';

    export default {
        components: {
            VCheckbox,
            VSearchbarMobile
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

// Desktop searchbar

.nav__searchbar {
    display: flex;    
    max-height: 8rem;
    flex-grow: 1;
    border-radius: 1rem;
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.10);


    input {
        margin-left: 1rem;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 1.7rem;
        padding-top: 0.5rem;
    }

    &--search,
    &--location,
    &--checkbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 2.6rem 3.2rem;
        min-height: 8rem;
        max-height: 7.6rem;

        @media screen and (max-width: 1023px) {
            padding: 0.5rem 1rem;
        }
    }

    &--search {
        flex-basis: 40%;
        border-radius: 1rem 0 0 1rem;

        @media screen and(max-width: 1023px) {
            flex-basis: 33.33%;
        }
    }

    &--location {
        flex-basis: 27%;
        border-left: 1px solid rgba(128, 128, 128, 0.3);
        border-right: 1px solid rgba(128, 128, 128, 0.3);

        @media screen and(max-width: 1023px) {
            flex-basis: 33.3%;
        }
    }

    &--checkbox {       
        justify-content: space-between;
        padding: 1.5rem !important;
        flex-basis: 33.33%; 
        border-radius: 0 1rem 1rem 0;

        p {
            font-weight: bold;
            padding-top: 0.5rem;

            span {
                @media screen and (max-width: 767px) {
                    display: none;
                }
            }
        }

        @media screen and(max-width: 1023px) {
            flex-basis: 33.33%;
        }
    }
}

.col {
    background: #fff;

    @media screen and (max-width: 660px) {
        display: none;
    }
}


</style>