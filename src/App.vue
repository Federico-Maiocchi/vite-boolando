<script >

import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
import MainPage from './components/MainPage.vue';


export default {

  data() {
    return {

    }
  },

  components: {
    HeaderPage,
    FooterPage,
    MainPage
},

  methods: {

  }


}

</script>

<template>
  <div >
    <HeaderPage/>
    <MainPage/>
    <FooterPage/>
  </div>
  
</template>

<style lang="scss">
@use './style/reset.scss';
@use './style/general.scss';

.red-bg {
  background-color: red;
}

</style>
