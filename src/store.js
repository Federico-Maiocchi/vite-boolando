import { reactive } from 'vue';

// import cardsJson from '../db.json';

export const store = reactive({
    message: 'hello world',
    // cardImp: cardsJson,
    products: []
})