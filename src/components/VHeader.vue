<template>
    <header class="container nav--bg">
        <div>
            <div class="nav ">      
                <div class="nav__content">
                    <div>
                        
                        <router-link to="/">
                            <VLogo />
                        </router-link>
                        <VSwitch /> 

                    </div>

                    <VSearchbar v-if="this.id === '/'"/>
                                           
                </div>               
            </div>
        </div>
    </header>
</template>

<script>


import VSwitch from '@/components/VSwitch.vue';
import VLogo from '@/components/VLogo.vue';
import VSearchbar from '@/components/VSearchbar.vue';

    export default {
        name: 'VHeader',
        components: {
            VSwitch,
            VLogo,
            VSearchbar
        },
        data(){
            return {
                id: this.$route.path,
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.nav {
    height: 20rem;
    padding-left: 16.5rem;
    padding-right: 16.5rem;

    @media screen and(max-width: 1440px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }

        @media screen and(max-width: 767px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

.nav__content {
    width: 100%;
    min-height: 16rem; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(4rem);

    @media screen and (max-width: 375px) {
        transform: translateY(1.5rem);
        min-height: 10rem;
    }
    
    >div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-grow: 1;

        @media screen and (max-width: 375px) {
            align-items: center;
        }
    }
}

.nav--bg {
    background-image: url('../assets/images/desktop/bg-pattern-header.svg');
    background-repeat: no-repeat;

    @media screen and (max-width: 375px) {
        background-image:url('../assets/images/mobile/bg-pattern-header.svg');
    }


}


</style>