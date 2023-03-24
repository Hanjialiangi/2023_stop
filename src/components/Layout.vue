<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <svg-icon name="logo" color="#FF8000" width="50px" height="50px" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="handleSkip('/home')">
          <pie-chart-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2" @click="handleSkip('/api')">
          <desktop-outlined />
          <span>开放API</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>用户</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>组织</span>
            </span>
          </template>
          <a-menu-item key="6">测试1</a-menu-item>
          <a-menu-item key="8">测试2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>系统设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;">
        <a-avatar :size="50" :src="imgUrl"></a-avatar>
        <span style="margin-right:100px;margin-left:20px;font-size:large;">{{name}}</span>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <bread-crumb></bread-crumb>
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
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import BreadCrumb from '../components/BreadCrumb.vue'
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    BreadCrumb
  },
  props: {
    imgUrl: String,
    text: String,
    name: String
  },
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
  methods: {
    handleSkip(name) {
      this.$router.push(name);
    }
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