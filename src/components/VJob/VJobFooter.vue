<template>
    <div class="job__footer">
        <div class="container">
            <div class="job__footer--content">
                <div>
                    <h4>{{ currentJob.position }}</h4>
                    <p>{{ currentJob.company }}</p>
                </div>
                <div class="button__container">
                    <button class="btn primary__btn--1">Apply Now</button>    
                </div>                    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VJobFooter',
        props: [
            'currentJob'
        ]
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.job__footer {
    width: 100%;
    background: #fff;
    margin-top: -7rem;

    &--content {
        width: 100%;
        max-width: 73rem;
        margin: 0 auto;
        padding: 3rem 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
            margin-bottom: 1.5rem;
        }

        p {
            color: $secondary-grey;
        }

        @media screen and (max-width: 767px) {
            padding-left: 2rem;
            padding-right: 2rem;    

            div:first-of-type {                
                display: none;   
            }
        }
    }

    .button__container {
   
           @media screen and (max-width: 568px) {
               width: 100%;
                margin: 0;
            }       

            button {

                @media screen and (max-width: 568px) {
                    width: 100%;
                    margin: 0;
                }   
            }
        }
}


</style>