<script >

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooterPage.vue';
import AppMainPage from './components/AppMainPage.vue';


export default {

  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppFooter,
    AppMainPage
},

  methods: {

  }


}

</script>

<template>
  <div >
    <AppHeader/>
    <AppMainPage/>
    <AppFooter/>
  </div>
  
</template>

<style lang="scss">
@use './style/reset.scss';
@use './style/general.scss';


</style>
