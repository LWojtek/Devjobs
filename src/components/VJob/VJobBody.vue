<template>
    <div class="job__body">
        <div class="job__body--content">
            <div>
                <div class="time__stamp">
                    <span>{{currentJob.postedAt}}</span>
                    <span>*</span>
                    <span>{{currentJob.contract}}</span>
                    <h3>{{currentJob.position}}</h3>
                    <p>{{currentJob.location}}</p>
                </div>
                <div class="button__container">
                    <button class="btn primary__btn--1 ">Apply Now</button>
                </div>
            </div>
            <div class="job__body--desc">
                <p>
                    {{currentJob.description}}
                </p>
            </div>

            <div class="job__body--req">
                <h4>Requirements</h4>
                <p>{{currentJob.requirements.content}}</p>

                <ul>
                    <li v-for="(item, index) in currentJob.requirements.items" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="job__body--duties">
                <h4>What You Will Do</h4>
                <p>{{currentJob.role.content}}</p>

                <ol>
                    <li v-for="(item, index) in currentJob.role.items" :key="index">
                        {{ item }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VJobBody',
        props: [
            'currentJob'
        ]
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.job__body {
    max-width: 73rem;
    width: 100%;
    margin: 0 auto;
    padding-top: 4rem;
    transform: translateY(-14rem);
    
    @media screen and (max-width: 767px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    &--content {
        background: #fff;
        border-radius: 1rem;
        padding: 4rem;
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.10);

        @media screen and (max-width: 568px){
            padding: 2rem;
        }
        
        @media (prefers-color-scheme: dark) {
            background-color: $primary-dark-blue;
        }

        .dark-theme & {
            background-color: $primary-dark-blue;
        }




        >div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 0;

            @media screen and (max-width: 568px) {
                flex-direction: column;
            }

            span {
                @media screen and (max-width: 568px) {
                    font-size: 1.4rem;
                }                
            }
        }

        .button__container {
   
           @media screen and (max-width: 568px) {
                width: 100%;
                margin-top: 2rem;
            }       

            button {

                @media screen and (max-width: 568px) {
                    width: 100%;
                    margin: 2rem 0;
                }   
            }
        }
    }

    &--req,
    &--duties {
        display: block !important;
    }

    p {
        color: #6E8098;
        line-height: 2.6rem;

        @media (prefers-color-scheme: dark) {
            color: $secondary-grey;
        }

        .dark-theme & {
            color: $secondary-grey;
        }

    }

    ul, ol {
        padding: 1.8rem;
    }

    ul li,
    ol li {
        color: #6E8098;
        margin: 0.2rem 0;
        font-size: 1.6rem;
        padding-left: 1rem;
        line-height: 2.6rem;

        @media (prefers-color-scheme: dark) {
            color: $secondary-grey;
        }

        .dark-theme & {
            color: $secondary-grey;
        }
    }

    h3 {
        
        @media (prefers-color-scheme: dark) {
            color: $secondary-white;
        }

        .dark-theme & {
            color: $secondary-white;
        }
    }

    h4 {
        margin-bottom: 2rem;

        @media (prefers-color-scheme: dark) {
            color: $secondary-white;
        }

        .dark-theme & {
            color: $secondary-white;
        }
    }
}


.time__stamp {
    span {
        color: $secondary-grey;

        &:nth-child(2) {
            margin: 0 1rem;
        }
    }

    h3 {
        margin-top: 1rem;
    }

    p {
        font-size: 1.4rem;
        color: $primary-violet;
        margin-top: 1rem;
        font-weight: bold;

        
        @media (prefers-color-scheme: dark) {
            color: $primary-violet;
        }

        .dark-theme & {
            color: $primary-violet;
        }
    }

}

</style>