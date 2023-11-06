<script >

export default {
  data() {
    return {
        // cardDress: [
        //     '/img/1.webp',
        //     '/img/2.webp',
        //     '/img/3.webp',
        //     '/img/4.webp',
        //     '/img/5.webp',
        //     '/img/5.webp'
        // ]
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
                <div v-for="n in 6 " class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="/img/1.webp" alt="t-shirt">
                            <img class="back-img" src="/img/1b.webp" alt="back">
                            <span class="heart-sign">&hearts;</span>
                            <span class="discount">-50%</span>
                            <span class="sustainability">sostenibilità</span>
                        </figure>
                        <div>
                            <p class="brand-name">Levis</p>
                            <h3 class="model">RELAXED FIT TEE UNISEX</h3>
                            <span class="price">14,99 &euro;</span>
                            <span class="old-price">29,99 &euro;</span> 
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
        display: flex;
        flex-wrap: wrap;
        

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
            
            .heart-sign:hover {
                color: red;
            }
        
        }


        .discount {
            background-color: red;
            color: white;
            padding: 3px;
            font-size: 12px;
            position: absolute;
            bottom: 20px;
            left: 5px;
        }

        .sustainability {
            background-color: green;
            color: white;
            padding: 3px;
            font-size: 12px;
            position: absolute;
            bottom: 20px;
            left: 40px;
        }

        .brand-name {
            font-size: 12px;
        }

        .model {
            font-weight: 700;
            font-size: 15px;
        }

        .price ,
        .old-price {
            font-size: 12px;
            font-weight: bold;
        }
        .price {
            color: red;
        }

        .old-price {
            text-decoration:line-through ;
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

    
    }

    

}

</style>

 