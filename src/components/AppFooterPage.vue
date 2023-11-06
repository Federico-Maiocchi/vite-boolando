<script >

export default {
  data() {
    return {
        information: ['Informazioni legali', 'Informativa sulla privacy', 'Diritto di recesso']
    }
  },

  methods: {
    
  }


}

</script>

<template>
   <footer class="footer-page">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h4>Boolean s.r.l</h4>
                    <ul class="row">
                        <li v-for="(item,index) in information">
                            <a href="#">Informazioni legali</a>
                        </li>
                        <!-- <li><a href="#">Informativa sulla privacy</a></li>
                        <li><a href="#">Diritto di recesso</a></li> -->
                    </ul>
                </div>
                <div class="col-2">
                    <h4>Trovaci su</h4>
                    <ul class="row">
                        <li><a href="#"><img src="./img/facebook-white.svg" alt="fb"></a></li>
                        <li><a href="#"><img src="./img/instagram-white.svg" alt="inst"></a></li>
                        <li><a href="#"><img src="./img/twitter-white.svg" alt="tw"></a></li>
                        <li><a href="#"><img src="./img/youtube-white.svg" alt="yt"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.footer-page {
    background-color: $footer-color;
    color: $text-white;
    padding: 10px 0px;

    h4 {
        font-size: 20px;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .col-6 {
            width: calc((100% / 12) * 6);
        }

        .col-2 {
            width: calc((100% / 12) * 2);
        }
    }
}



// img {
//     color: black;
// }

</style>