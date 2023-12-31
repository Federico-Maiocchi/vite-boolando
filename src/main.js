import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUser,
    faBasketShopping,
    faHeart,
    faCircleXmark
    
 } from '@fortawesome/free-solid-svg-icons'

 library.add(
    faUser,
    faBasketShopping,
    faHeart,
    faCircleXmark
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
