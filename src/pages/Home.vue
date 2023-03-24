<script lang="ts"  async setup>
import Layout from '@/components/Layout.vue'
import {getRandomImg,getText} from '@/api'
import $store from '@/store/index'
import { computed } from 'vue';

let imgUrl="";
let text="";
let pathname =window.location.pathname;
const res =await getRandomImg();
if(res.code ==="200"){
    imgUrl=res.data.url;
} 
const textRes =await getText();
if(textRes){
    text=textRes.content;
}


const name = computed(() => $store.state.name)
</script>
<template>
    <Layout :imgUrl="imgUrl" :text="text" :name="name" :pathname="pathname"/>
</template>

<style scoped lang="sass">

</style>