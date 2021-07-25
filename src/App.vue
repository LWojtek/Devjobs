<template>
  <body :class="{'dark-theme' : darkmode}">
    <VHeader />
    <transition name="fade">
      <VModal v-if="this.$store.state.vmodal"/>
    </transition>
    <router-view/>

  </body>
</template>

<script src="@/main.js"></script>
<script>

import VHeader from '@/components/VHeader.vue';
import VModal from '@/components/VModal.vue';

import { mapState } from 'vuex';

export default {
  data(){
    return {
      darkmode: false,
    }
  },
  components: {
    VHeader,
    VModal    
  },
  computed: {
    ...mapState([
      'vmodal',
    ])
  },
  created () {
    this.bus.$on('darkmode', (on) => {
      this.darkmode = on;
    });
  },
};

</script>


<style lang="scss">

@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/components/buttons.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>


