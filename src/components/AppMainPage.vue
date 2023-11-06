<script >

export default {
  data() {
    return {
        cardsDress: [
            {
                img: '/img/1.webp',
                imgBack: '/img/1b.webp',
                discount: '-50%',
                sustainability: 'Sostenibilità',
                brandName: 'levi\'s',
                model: 'Relaxed fit tee unisex',
                price: 14.99,
                oldPrice: 29.99,

            },
            {
                img: '/img/2.webp',
                imgBack: '/img/2b.webp',
                discount: '-30%',
                sustainability: '',
                brandName: 'Guess',
                model: 'Roses tee',
                price: 20.99,
                oldPrice: 29.99,
            },
            {
                img: '/img/3.webp',
                imgBack: '/img/3b.webp',
                discount: '-30%',
                sustainability: '',
                brandName: 'Come zucchero filato',
                model: 'Voglio di colori pastello',
                price: 129.99,
                oldPrice: 184.99,
            },
            {
                img: '/img/4.webp',
                imgBack: '/img/4b.webp',
                discount: '-50%',
                sustainability: 'sostenibilità',
                brandName: 'levi\'s',
                model: 'Teen unisex',
                price: 14.99 ,
                oldPrice: 29.99,
            },
            {
                img: '/img/5.webp',
                imgBack: '/img/5b.webp',
                discount: '',
                sustainability: '',
                brandName: 'Maya deluxe',
                model: 'Stripe bodice',
                price: 99.99,
                oldPrice: '',
            },
            {
                img: '/img/6.webp',
                imgBack: '/img/6b.webp',
                discount: '',
                sustainability: 'Sostenibilità',
                brandName: 'Esprit',
                model: 'Maglione - black ',
                price: 29.99,
                oldPrice: '',
            }
        ]
    }
  },

  methods: {
    
  }


}

</script>

<template>
    <main class="main-page">
        <div class="container">
            <div class="row">
                <div v-for="(item,index) in cardsDress" class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img :src="item.img" alt="t-shirt">
                            <img class="back-img" :src="item.imgBack" alt="back">
                            <span class="heart-sign">&hearts;</span>
                            <span class="discount">{{ item.discount }}</span>
                            <span class="sustainability">{{ item.sustainability }}</span>
                        </figure>
                        <div>
                            <p class="brand-name">{{ item.brandName }}</p>
                            <h3 class="model">{{ item.model }}</h3>
                            <span class="price">{{ item.price }} &euro;</span>
                            <span class="old-price">{{ item.oldPrice }} &euro;</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.main-page {

    
    & .row {
        padding-top: 100px;
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
                color: red;
            }
        
        }


        .discount {
            background-color: red;
            color: white;
            padding: 0px 3px;
            font-size: 14px;
            line-height: 1rem;
            position: absolute;
            bottom: 20px;
            left: 5px;
        }

        .sustainability {
            background-color: green;
            color: white;
            padding: 0px 3px;
            font-size: 14px;
            line-height: 1rem;
            position: absolute;
            bottom: 20px;
            left: 40px;
        }
    
    }

}

.brand-name {
    font-size: 12px;
    text-transform: capitalize;
}

.model {
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
}

.price ,
.old-price {
    font-size: 14px;
    font-weight: bold;
}
.price {
    color: red;
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
