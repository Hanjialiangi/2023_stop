<template>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>{{title}}</a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script setup>
let title="";
switch(window.location.pathname)
{
    case '/home':title='首页';break;
    case '/api': title='开放API';break;
}
</script>
<style lang="sass" scoped></style>