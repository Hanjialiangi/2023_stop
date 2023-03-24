<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <svg-icon name="logo" color="#FF8000" width="50px" height="50px" />
      </div>
      <Menu :pathname="pathname"></Menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;">
        <a-avatar :size="50" :src="imgUrl"></a-avatar>
        <span style="margin-right:100px;margin-left:20px;font-size:large;">{{ name }}</span>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
          <bread-crumb :pathname="pathname"></bread-crumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view></router-view>
          </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        {{ text }}
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import BreadCrumb from '../components/BreadCrumb.vue'
import Menu from '../components/Menu.vue'
export default defineComponent({
  components: {
    Menu,
    BreadCrumb
  },
  props: {
    imgUrl: String,
    text: String,
    name: String,
    pathname: String
  },
  data() {
    return {
      collapsed: ref(false),
    };
  }
});
</script>
<style>
.logo {
  height: 32px;
  margin: 16px;
  /* background: rgba(255, 255, 255, 0.3); */
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>