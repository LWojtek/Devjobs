<template>
    <div class="nav__searchbar--mobile">
        <div class="col1 input__wrapper">
            <input type="text" placeholder="Filter by title...">
        </div>
        <div class="col1 filter__icon" @click="alert('Bla bla')">
            <img src="@/assets/images/mobile/icon-filter.svg" alt="">
        </div>
        
        <div class="col1 search__icon">
            <img src="@/assets/images/mobile/icon-search.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VSearchbarMobile',
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.nav__searchbar--mobile {  
        display: none;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: #fff;
        min-height: 8rem;
        max-height: 8rem;
        width: 100%;
        border-radius: 1rem;

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

        @media screen and (max-width: 660px) {
            display: flex;
        }

        .input__wrapper {
            flex-basis: 70%;
        }

        .search__icon {
            border-radius: 1rem;
            background-color: $primary-violet;
            padding: 1rem;
            transition: 250ms ease;

            &:hover {
                background: $primary-light-violet;
            }
        }

        .search__icon,
        .filter__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 4.8rem;
            min-height: 4.8rem;
            max-height: 4.8rem;
            cursor: pointer;
        }

}

</style>