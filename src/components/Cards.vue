<script >

export default {
  data() {
    return {
        
    }
  },

  props: {
    item: {
        type: Object,
        required: true,
    }
  },

  methods: {
    activeFavorite() {
        this.item.isInFavorites = !this.item.isInFavorites
    },

    onClick() {
        this.$emit('show')
    }
  }


}

</script>

<template>
    <div class="col-4">
        <div class="card">
            <figure class="card-image">
                <img :src="/img/ + item.frontImage" alt="t-shirt">
                <img class="back-img" :src="/img/ + item.backImage" alt="back">
                <span class="heart-sign"
                    :class="item.isInFavorites === true ? 'text-red' : '' "
                    @click="activeFavorite()"
                    ><font-awesome-icon icon="fa-solid fa-heart" /></span>
                <div class="notifications">
                    <span v-for="elements in item.badges" 
                        class="discount"
                        :class="elements.type === 'discount' ? 'price' : 'sustainability'">
                    {{ elements.value }}
                    </span> 
                </div> 
            </figure>
            <div>
                <p class="brand-name">{{ item.brand}}</p>
                <h3 @click="onClick" class="model">{{ item.name }}</h3>
                <span class="price">{{item.price}}&euro;</span> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;


.text-red {
        color: red;
}

.text-black {
    color: black;
}

.card-image {
    position: relative;

    .heart-sign,
    .discount,
    .sustainability {
        z-index: 2;
    }
    .heart-sign {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        cursor: pointer;

        
        
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
        order: 1;
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
    font-size: 14px;
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