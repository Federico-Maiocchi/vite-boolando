<script >

export default {

    props: {
        props: ['title', 'links']
    }
        


}

</script>

<template>
    <div>
        <h4>{{title}}</h4>
        <ul class="row">
            <li v-for="(link,index) in links" :key="index">
                <a :href="link.href"><img :src="link.logo" alt=""></a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

 h4 {
        font-size: 20px;

        
    }
.row {
    gap: 10px;
    img {
                padding-top: 3px;
                width: 18px;
            }
}
    
</style>