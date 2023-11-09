<script >
import Cards from './Cards.vue'
// import cardsJson from '../db.json'
import { store } from '../store.js'
import axios from 'axios'


export default {
    components: {
        Cards
    },

    data() {
    return {

        store: store,
        open: false,
        currentProduct: {}
        

    }
    },

    created() {
        axios.get('http://localhost:3000/products')
        .then(res => {

            const products = res.data;
            // console.log(res,products)

            this.store.products = products
        })
    },

    methods: {
        showModal(item) {
            this.currentProduct = item
            this.open = true
            console.log(this.currentProduct)
        },

        closeModal() {
            this.open = false;
            this.currentProduct = {}
        }
    },

    mounted() {
    // console.log(this.cards)
    // console.log(store)
    }


    }

</script>

<template>
    <main class="main-page">
        <div class="container">
            <div class="row">
                <Cards 
                    v-for="product in store.products" 
                    :item='product'
                    @show="showModal(product)"/>
            </div>
        </div>    
    </main>

    <div v-if="open" class="modal">
        <div class="card-modal">
            <span 
                class="delete-icon"
                @click="closeModal">
                <font-awesome-icon :icon="['fas', 'circle-xmark']" />
            </span>
            <figure class="figure-img" >
                <img :src="/img/ + currentProduct.frontImage" alt="">
                <div>
                    <div>{{ currentProduct.brand }}</div>
                    <div>{{ currentProduct.name }}</div>
                    <div>{{ currentProduct.price }}</div>
                    <!-- <div></div>
                    <div></div>
                    <div></div> -->
                </div>
            </figure>
        </div>
    </div>

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

.modal::after {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background-color: rgba(0,0,0,0.5);
}


.modal .card-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 50;
        background-color: white;
        border-radius: 20px;
        padding: 20px;
        width: 100%;
        max-width: 500px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);

        .delete-icon {
            display: flex;
            justify-content: flex-end;
        }
        

        .figure-img {
            width: 250px;
            display: flex;
        }

        .card__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 22px;
            font-weight: 700;
        }
    }
    



</style>
