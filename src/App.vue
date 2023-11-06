<script >

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooterPage.vue';

export default {

  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppFooter
},

  methods: {

  }


}

</script>

<template>
  <AppHeader/>
  <AppFooter/>
</template>

<style lang="scss">
@use './style/reset.scss';
@use './style/general.scss';
</style>
