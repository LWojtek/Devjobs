<template>
    <div class="modal__container" >
        <div class="modal">
            <div class="nav__searchbar--location">
                <img src="@/assets/images/desktop/icon-location.svg" alt="">
                <input 
                    type="text" 
                    placeholder="Filter by location... " 
                    v-model="location">
            </div>
            <div class="nav__searchbar--checkbox">
                <div style="display: flex; align-items: center;">
                    <VCheckbox v-model="fullTime"/>
                    <p>Full Time <span>Only</span></p>
                </div>    
                <button class="btn primary__btn--1" @click="closeModal">Search</button>    
            </div>
        </div>
    </div>
</template>

<script>

import VCheckbox from '@/components/VCheckbox.vue';

    export default {
        data(){
            return {
                location: '',
                fullTime: false,
            }
        },
        components: {
            VCheckbox
        },
        methods: {
            closeModal(){
                this.bus.$emit('search', {
                    location: this.location,
                    fullTime: this.fullTime
                });

                this.$store.state.vmodal = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.modal__container {
    display: none;
}

@media screen and(max-width: 660px) {

    .modal__container {
        display: flex;
        justify-content: center;
        align-items: center;
    
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        background: rgba(0,0,0, 0.2);
        z-index: 1;
    }
    
    .modal {
        opacity: 1;
        background: #fff;
        flex-basis: 80%;
        border-radius: 1rem;
        transition: 250ms;
    }

    .nav__searchbar--location {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.4rem;
        border-bottom: 1px solid $secondary-light-grey;

        input {
            flex-basis: 90%;
            border: none;
            margin-left: 1rem;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: 'Kumbh Sans', sans-serif;
            font-size: 1.7rem;
            padding-top: 0.5rem;
        }
    }

    .nav__searchbar--checkbox {
        padding: 2.4rem;

        button {
            width: 100%;
            margin-top: 2rem;
        }     

        p {
            font-weight: bold;
            margin-left: 2rem;
        }
    }
}


</style>