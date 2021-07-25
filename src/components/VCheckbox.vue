<template>
    <div class="checkbox__container">
        <input type="checkbox" name="fulltime" class="checkbox" v-model="isActive">
        <div class="check"></div>
    </div>
</template>

<script>

export default {
  name: 'VCheckbox',

  props: {
    value: {},
  },

  data(){
    return {
      isActive: false
    }
  },
  watch: {
    isActive(newValue) {
      this.$emit('input', newValue);
    },
    value(newValue) {
      this.isActive = newValue;
    }
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