<script >
import Cards from './Cards.vue'
import cardsJson from '../db.json'


export default {
    components: {
        Cards
    },

    data() {
    return {

        cards: cardsJson.products

        // cardsDress: [
        //     {
        //         img: '/img/1.webp',
        //         imgBack: '/img/1b.webp',
        //         discount: '-50%',
        //         sustainability: 'Sostenibilità',
        //         brandName: 'levi\'s',
        //         model: 'Relaxed fit tee unisex',
        //         price: 14.99,
        //         oldPrice: 29.99,

        //     },
        //     {
        //         img: '/img/2.webp',
        //         imgBack: '/img/2b.webp',
        //         discount: '-30%',
        //         sustainability: '',
        //         brandName: 'Guess',
        //         model: 'Roses tee',
        //         price: 20.99,
        //         oldPrice: 29.99,
        //     },
        //     {
        //         img: '/img/3.webp',
        //         imgBack: '/img/3b.webp',
        //         discount: '-30%',
        //         sustainability: '',
        //         brandName: 'Come zucchero filato',
        //         model: 'Voglia di colori pastello',
        //         price: 129.99,
        //         oldPrice: 184.99,
        //     },
        //     {
        //         img: '/img/4.webp',
        //         imgBack: '/img/4b.webp',
        //         discount: '-50%',
        //         sustainability: 'Sostenibilità',
        //         brandName: 'levi\'s',
        //         model: 'Teen unisex',
        //         price: 14.99 ,
        //         oldPrice: 29.99,
        //     },
        //     {
        //         img: '/img/5.webp',
        //         imgBack: '/img/5b.webp',
        //         discount: '',
        //         sustainability: '',
        //         brandName: 'Maya deluxe',
        //         model: 'Stripe bodice',
        //         price: 99.99,
        //         oldPrice: '',
        //     },
        //     {
        //         img: '/img/6.webp',
        //         imgBack: '/img/6b.webp',
        //         discount: '',
        //         sustainability: 'Sostenibilità',
        //         brandName: 'Esprit',
        //         model: 'Maglione - black ',
        //         price: 29.99,
        //         oldPrice: '',
        //     }
        // ]
    }
    },

    methods: {

    },

    mounted() {
    // console.log(this.cards)
    }


    }

</script>

<template>
    <main class="main-page">
        <div class="container">
            <div class="row">
                <Cards 
                    v-for="product in cards" 
                    :item='product'/>
            </div>
        </div>
    </main>
  
</template>

<style lang="scss" >
@use '../style/partials/variables' as *;

.main-page {

    
    & .row {
        padding-top: 100px;
    }

    .container {
        max-width: 850px;
    }
    .row {
        .col-4 {
            width: calc((100% / 12) * 4);
            padding: 15px;
        }
    }


}



</style>
