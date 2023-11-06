<script >

export default {
  data() {
    return {
        information: ['Informazioni legali', 'Informativa sulla privacy', 'Diritto di recesso'],
        social: [
            '/img/facebook-white.svg',
            '/img/instagram-white.svg',
            '/img/twitter-white.svg',
            '/img/youtube-white.svg'
        ]
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
                            <p><a href="#">Informazioni legali</a></p>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <h4>Trovaci su</h4>
                    <ul class="row">
                        <li v-for="(item,index) in social">
                            <a href="#"><img :src="item" alt="fb"></a>
                        </li>
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
    padding: 12px 0px;

    h4 {
        font-size: 20px;
    }
    .row {
        justify-content: space-between;

        .col-6 {
            width: calc((100% / 12) * 6);

            p {
                padding-top: 5px;
            }
        }

        .col-2 {
            width: calc((100% / 12) * 2);

            img {
                padding-top: 3px;
                width: 18px;
            }
        }
    }
}


</style>