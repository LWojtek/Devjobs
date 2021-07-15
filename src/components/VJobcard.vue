<template>
    <router-link :to="`/${job.id}`" style="text-decoration: none; color: inherit">
        <div class="job__card--logo" :style="`background-color: ${job.logoBackground}`">
            <img :src="`/images/logos/${job.logo}.svg`" alt class="icon" />
        </div>
        <div class="job__card--content">
            <div class="time__stamp">
                <span>{{ job.postedAt }}</span>
                <span>*</span>
                <span>{{ job.contract }}</span>
            </div>

            <h4>{{ job.position }}</h4>

            <span>{{ job.company }}</span>

            <p>{{ job.location }}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'VJobcard',
        props: [
            'job'
        ],
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';


ul li {
    list-style-type: none;
}

.job__card {
    min-height: 22.8rem;    // temp
    flex-basis: 33rem;
    min-width: 33rem;
    background: #fff;
    margin-bottom: 4rem;
    position: relative;
    padding: 4.9rem 3.2rem 3.2rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: box-shadow 250ms ease;

    @media screen and (max-width: 375px) {
        
        min-width: 30rem;
    }

    &:hover {
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.20);
    }


    &--logo {
        position: absolute;
        background-color: hsl(12, 79%, 52%);
        width: 5rem;
        height: 5rem;
        top: -2.5rem;
        left: 3.2rem;

        border-radius: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    &--content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;
    }

    .time__stamp {
        span {
            color: $secondary-grey;

            &:nth-child(2) {
                margin: 0 1rem;
            }
        }
    }

    h4 {
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }

    span {
        color: $secondary-grey;
    }

    p {
        font-size: 1.4rem;
        color: #5964E0;
        margin-top: auto;
        font-weight: bold;
    }
}

</style>