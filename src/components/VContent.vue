<template>
    <div class="container">
        <div class="content">
            <ul class="content__wrapper">       

                    <VJobcard  class="job__card" v-for="job in jobs" :key="job.id" :job="job"/>
 
            </ul>
            <div class="content__load">
                <button class="btn primary__btn--1">Load more</button>
            </div>
        </div>
    </div>
</template>



<script>

import { mapState } from 'vuex';

import VJobcard from '@/components/VJobcard.vue';

    export default {
        name: 'VContent',
        components: {
            VJobcard
        },
        computed: {
        ...mapState([
            'jobs',
        ])
    },
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.content {
    padding: 8rem 16.5rem;
    margin: 0 auto;

    
    @media screen and(max-width: 1440px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

}

.content__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;

    @media screen and (max-width: 1366px) {
        gap: 1.5rem;
    }
}


.content__load {
    text-align: center;
}

</style>