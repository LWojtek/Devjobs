<template>
    <div class="nav__searchbar" id="nav__searchbar">

        <div class="col nav__searchbar--search">
            <img src="@/assets/images/desktop/icon-search.svg" alt="">
            <input 
                type="text" 
                placeholder="Filter by title, companies expertise..." 
                v-model="search" 
            >
        </div>

        <div class="col nav__searchbar--location">
            <img src="@/assets/images/desktop/icon-location.svg" alt="">
            <input 
                type="text" 
                placeholder="Filter by location... " 
                v-model="location" 
            >
        </div>

        <div class="col nav__searchbar--checkbox">

            <VCheckbox v-model="fullTime"
            />

            <p>Full Time <span>Only</span></p>
            <button class="btn primary__btn--1"
                @click="filterJobs"
            >Search</button>
        </div>


        <VSearchbarMobile 
            v-model="search"
            @search="filterJobs"    
        />        

    </div>
</template>

<script>

import { mapState } from 'vuex';

import VCheckbox from '@/components/VCheckbox.vue';
import VSearchbarMobile from '@/components/VSearchbarMobile.vue';


export default {
    data(){
        return {
            search: '',
            location:'',
            fullTime: false,
        }
    },
    components: {
        VCheckbox,
        VSearchbarMobile,
    },
    computed: {
        ...mapState([
            'jobs',
            'filteredJobs'
        ]),
    },
    methods: {
        filterJobs(){
            this.$store.state.filteredJobs = this.jobs.filter((job) => {
                    return job.position.toLowerCase().match(this.search.toLowerCase())
                    && (job.location.toLowerCase().match(this.location.toLowerCase()))
                    && (job.contract.toLowerCase().match(this.fullTime ? "full time" : "" ));
            })
        },
    },
    created(){
        this.bus.$on('search', (searchData) => {
            this.location = searchData.location;
            this.fullTime = searchData.fullTime;
            this.filterJobs();
        })
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
    animation: shadow 100ms forwards;
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
        background-color: $secondary-white;


        .dark-theme & {
            background-color: $primary-dark-blue;
            color: $secondary-white;
        }

        @media (prefers-color-scheme: dark) {
            background-color: $primary-dark-blue;
                        color: $secondary-white;
        }

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
               color: #000;


        @media (prefers-color-scheme: dark) {
            color: #fff;
        }

        .dark-theme & {
            color: #fff;
        }

        
        .light-theme & {
            color: #000;
        }


            span {
                @media screen and (max-width: 880px) {
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
       background-color: $secondary-white;
    
    .dark-theme & {
        background-color: $primary-dark-blue;
    }
    
    @media (prefers-color-scheme: dark) {
        background-color: $primary-dark-blue;
    }


    @media screen and (max-width: 660px) {
        display: none;
    }
}


</style>