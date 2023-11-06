<script >

export default {
  data() {
    return {
        gender: [uomo, donna, bambino],
        menu: [profilo, preferiti, carrello],
    }
  },

  methods: {
    
  }


}

</script>

<template>
   <nav class="container">
            <div class="row">
                <div class="col-2">
                    <ul class="row justify-around">
                        <li ><a class="gender" href="#">Uomo</a></li>
                        <li ><a class="gender" href="#">Donna</a></li>
                        <li ><a class="gender" href="#">Bambino</a></li>
                    </ul>
                </div>
                <div class="col-8">
                    <div class="row justify-center">
                        <img class="logo" src="./img/boolean-logo.png" alt="logo">
                    </div>
                </div>
                <div class="col-2">
                    <ul class="row justify-around">
                        <li ><a class="icons" href="#">prifilo</a></li>
                        <li ><a class="icons" href="#">preferiti</a></li>
                        <li ><a class="icons" href="#">carrello</a></li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style lang="scss" scoped>

</style>