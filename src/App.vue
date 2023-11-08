<script >

import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
import MainPage from './components/MainPage.vue';
import { store } from './store';


export default {

  data() {
    return {
      store: store,
    }
  },

  components: {
    HeaderPage,
    FooterPage,
    MainPage
  },

  methods: {

  },

  mounted() {
    // console.log(this.store)
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
