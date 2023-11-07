<script >
import AppCards from './AppCards.vue'
import cardsJson from '../db.json'


export default {
    components: {
        AppCards
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
                <AppCards 
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

    .card-image {
        position: relative;

        .heart-sign,
        .discount,
        .sustainability {
            z-index: 2;
        }
        .heart-sign {
            background-color: white;
            padding: 4px;
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 25px;
            
            &:hover {
                color: $color-red;
            }
        
        }

        .notifications {
            display: flex;
            flex-wrap: wrap;
            gap: 2px;
            position: absolute;
            bottom: 20px;
            left: 5px;
        }

        .discount {
            background-color: $color-red;
            color: white;
            font-size: 16px;
            line-height: 30px;
            bottom: 20px;
            left: 5px;
        }

        .sustainability {
            background-color: green;
            color: white;
            font-size: 16px;
            line-height: 30px;
            bottom: 20px;
            left: 40px;
        }
    
    }

}

.brand-name {
    font-size: 14px;
    text-transform: capitalize;
}

.model {
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
}

.price ,
.old-price {
    font-size: 16px;
    font-weight: bold;
}
.price {
    color: $color-red;
}

.old-price {
    text-decoration:line-through ;
    margin-left: 5px;
}

.back-img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.card:hover .back-img {
    z-index: 1;
}

</style>

<!-- v-for="product in cards" :item='product' -->