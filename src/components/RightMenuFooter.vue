<script >

export default {
    props: ['title', 'links']
}

</script>

<template>
    <div>
        <h4>{{ title }}</h4>
        <ul class="row">
            <li v-for="(link,index) in links" :key="index">
                <p><a :href="link.href">{{ link.text }}</a></p>
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
    justify-content: space-between;
    
    p {
        padding-top: 5px;
    }
    
}
    
</style>