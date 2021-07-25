<template>
    <div class="nav__searchbar--mobile">
        <div class="col1 input__wrapper">
            <input 
                type="text" 
                placeholder="Filter by title..." 
                @input="filterJobs()"
                v-model="search"
            >
        </div>
        <div class="col1 filter__icon" @click="openModal()">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fill-rule="nonzero"/></svg>
        </div>
        
        <div class="col1 search__icon">
            <img src="@/assets/images/mobile/icon-search.svg" alt="">
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

    export default {
        name: 'VSearchbarMobile',
        data(){
            return {
                search: '',
            }
        },
        computed: {
            ...mapState([
            'jobs',
            'filteredJobs'
        ])
        },
        methods: {
            openModal(){
                this.$store.state.vmodal = true;
            },
            closeModal(){
                this.$store.state.vmodal = false;
            },
            filterJobs(){
                this.$store.state.filteredJobs = this.jobs.filter((job) => {
                    return job.position.toLowerCase().match(this.search.toLowerCase())
                })
            },
            // filterLocation(){
            //     this.$store.state.filteredJobs = this.jobs.filter((job) => {
            //         return job.location.toLowerCase().match(this.location.toLowerCase())
            //     })
            // },
        },
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

        @media (prefers-color-scheme: light) {
            background-color: $secondary-white;
            color: #000;
        }

        @media (prefers-color-scheme: dark) {
            background-color: $primary-dark-blue;
            color: #fff;
        }

        &.dark-theme {
            background-color: $primary-dark-blue;
             color: #fff;
        }

        
        &.light-theme {
            background-color: $secondary-white;
            color: #000;
        }

        input {
            margin-left: 1rem;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: 'Kumbh Sans', sans-serif;
            font-size: 1.7rem;
            padding-top: 0.5rem;

        @media (prefers-color-scheme: light) {
            background-color: $secondary-white;
            color: #000;
        }

        @media (prefers-color-scheme: dark) {
            background-color: $primary-dark-blue;
            color: #fff;
        }

        &.dark-theme {
            background-color: $primary-dark-blue;
             color: #fff;
        }

        
        &.light-theme {
            background-color: $secondary-white;
            color: #000;
        }

            
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