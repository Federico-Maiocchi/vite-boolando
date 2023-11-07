<script >
import AppMenuFooter from './AppMenuFooter.vue';

export default {

    components:{
    AppMenuFooter
},

    data() {
    return {
        menuInfo: {
            titleInfo: 'Boolean s.r.l',
            links: [
                {
                    text: 'Informazioni legali',
                    href: '#'
                },
                {
                    text: 'Informativa sulla privacy',
                    href: '#'
                },
                {
                    text: 'Diritto di recesso',
                    href: '#'
                }
            ]
        },

        menuSocial: {
            titleSocial: 'Ci trovi anche su',
            links: [
                {
                    logo: '/img/facebook-white.svg',
                    href: '#'
                },
                {
                    logo: '/img/instagram-white.svg',
                    href: '#'
                },
                {
                    logo: '/img/twitter-white.svg',
                    href: '#'
                },
                {
                    logo: '/img/youtube-white.svg',
                    href: '#'
                }
            ]
        } 

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
                    <AppMenuFooter  :title="menuInfo.titleInfo" :links="menuInfo.links"/>
                </div>
                <div class="col-2">
                    <AppMenuFooter  :title="menuSocial.titleSocial" :links="menuSocial.links"/>
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

            
        }
    }
}


</style>