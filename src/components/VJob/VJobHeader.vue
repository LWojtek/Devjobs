<template>
    <div class="job__header">
        <div class="job__header--content">
            <div class="logo__container">   
                <div class="job__header--logo" :style="`background-color: ${currentJob.logoBackground}`">
                    <img :src="`/images/logos/${currentJob.logo}.svg`" alt="">
                </div>     
            </div>
            <div class="job__header--info">
                <div>
                    <h2>{{currentJob.company}}</h2>
                    <p>{{currentJob.webshort}}</p>
                </div>
                <div>
                    <a :href="currentJob.website">
                        <button class="btn primary__btn--2">Company Site</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VJobHeader',
        props: [
            'currentJob',
        ]
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.job__header {
    max-width: 73rem;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 0rem;


    @media screen and (max-width: 767px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    &--content {
        display: flex;
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.10);
        transform: translateY(-14rem);

        border-radius: 1rem;

        @media screen and (max-width: 568px) {
            flex-direction: column;
            transform: translateY(-9rem);
        }
    }

    .logo__container {
        border-radius: 1rem;

        @media (prefers-color-scheme: dark) {
            background-color:  $primary-dark-blue;
        }

        .dark-theme & {
            background-color: $primary-dark-blue;
        }

        @media screen and (max-width: 568px) {
            width: 100%;
            height: 50px;
            margin: 0 auto;
            border-radius: 0.8rem 0.8rem 0 0;
        }
    }

    &--logo {
        display: flex;
        align-items: center;
        justify-content: center;
 
        border-radius: 1rem 0 0 1rem;

        width: 14rem;
        height: 100%;

        padding: 2.5rem 4.5rem;

        
        @media screen and (max-width: 568px) {
            width: 6rem;
            height: 6rem;
            margin: 0 auto;
            padding: 0;
            border-radius: 1rem;
            transform: translateY(-3rem);
        }

        img {
            width:100%;

            @media screen and (max-width: 568px) {
                width: 80%;
            }
        }

    }

    &--info {
        position: relative;
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4.2rem 4rem;
        background-color: #fff;

        @media (prefers-color-scheme: dark) {
            background-color:  $primary-dark-blue;
        }

        .dark-theme & {
            background-color: $primary-dark-blue;
        }

        @media screen and (min-width: 568px){
            border-radius: 0 1rem 1rem 0;
        }

        @media screen and (max-width: 568px) {
           flex-direction: column;
            border-radius: 0 0 1rem 1rem;

           >div {
               margin: 1.5rem 0;
           }
        }

        h2 {
            margin-bottom: 1rem;

            @media (prefers-color-scheme: dark) {
                color: $secondary-white;
            }

            .dark-theme & {
                color: $secondary-white;;
            }
        }

        p {
            margin-top: 1rem;
            color: $secondary-grey;
            

            @media screen and (max-width: 568px) {
                text-align: center;
            }
        }
    }
}

</style>