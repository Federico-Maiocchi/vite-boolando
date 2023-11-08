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

        // cards: cardsJson.products,
        store: store,
        // products: store.cards

    }
    },

    created() {
        axios.get('http://localhost:3000/products')
        .then(res => {

            const products = res.data;
            console.log(res,products)

            this.store.products = products
        })
    },

    methods: {

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
                    :item='product' />
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
