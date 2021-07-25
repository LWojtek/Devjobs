<template>
    <div class="checkbox__container">
        <input type="checkbox" name="fulltime" class="checkbox" v-model="isFulltime" @change="filterLocation()">
        <div class="check"></div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'VCheckbox',
  data(){
    return {
      isFulltime: false
    }
  },
  methods: {
    filterLocation(){
        this.$store.state.filteredJobs = this.jobs.filter((job) => {
               if (this.isFulltime) {
                  return job.contract.match('Full Time');
               } else {
                 return job
               }
        })
    },
  },
  computed: {
    ...mapState([
      'jobs',
      'filteredJobs'
    ])
  },
}

</script>



<style lang="scss" scoped>


@import '@/assets/scss/variables.scss';


.checkbox__container {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    background: $secondary-light-grey;
    z-index: 0;
    border-radius: 0.5rem;
  
    .check {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $primary-violet;
      background-image: url('../assets/images/desktop/icon-check.svg');  
      background-repeat: no-repeat;
      background-size: 80% 80%;
      background-position: 50% 50%;
      display: none;
      border-radius: 0.5rem;  
    }
  
    .checkbox {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 1;
    }  
}
  
  input[type=checkbox]:checked ~ .check {
       display: block;
  }
  
</style>