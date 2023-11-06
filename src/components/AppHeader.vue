<script >

export default {
  data() {
    return {
        gender: ['uomo', 'donna', 'bambino'],
        menu: ['profilo', 'preferiti', 'carrello'],
    }
  },

  methods: {
    
  }


}

</script>

<template>
   <header class="header-page">
        <!--gender / logo / icons-->
        <nav class="container">
            <div class="row">
                <div class="menu gender-section">
                    <ul class="row gap-2">
                        <li v-for="(item,index) in gender">
                            <a class="gender" href="#">{{item}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-8">
                    <div class="">
                        <img class="logo" src="/img/boolean-logo.png" alt="logo">
                    </div>
                </div>
                <div class="menu profile-section">
                    <ul class="row gap-2">
                        <li v-for="(item,index) in menu" >
                            <a class="icons" href="#">{{item}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.header-page {
    background-color: $header-color;
    color: $text-white;
    padding: 15px;
    width: 100%;  
    // position: fixed; 
    // z-index: 100;
    
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .menu {
        font-size: 20px;
    }
    .gap-2 {
        gap: 10px;
    }

    .logo {
        width: 150px;
    }
}


</style>