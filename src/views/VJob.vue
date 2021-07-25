<template>
    <div>
        <div class="container">

            <VJobHeader :currentJob="this.currentJob" />

            <VJobBody :currentJob="this.currentJob" />

        </div>

        <VJobFooter :currentJob="this.currentJob" />

    </div>
</template>

<script>

import VJobHeader from '@/components/VJob/VJobHeader.vue';
import VJobBody from '@/components/VJob/VJobBody.vue';
import VJobFooter from '@/components/VJob/VJobFooter.vue';


import { mapState } from 'vuex'

    export default {
        name: 'VJob',
        components: {
            VJobHeader,
            VJobBody,
            VJobFooter,
        },
        data(){
            return {
                id: parseInt(this.$route.params.jobId),
            }
        },
        computed: {
            ...mapState([
                'jobs'
            ]),
            indexVerified(){
                return this.jobs.filter(job => {
                    return job.id === this.id;
                });
            },
            currentJob(){
            return this.indexVerified[0]
            },
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';


</style>