<script lang="ts"  async setup>
import Layout from '@/components/Layout.vue'
import {getRandomImg,getText} from '@/api'
document.title="首页"
let imgUrl="";
let text="";
const res =await getRandomImg();
if(res.code ==="200"){
    imgUrl=res.data.url;
} 
const textRes =await getText();
if(textRes){
    text=textRes.content;
}
</script>
<template>
    <Layout :imgUrl="imgUrl" :text="text"/>
</template>

<style scoped lang="sass">

</style>