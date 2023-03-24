<template>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="handleSkip('/home')">
          <pie-chart-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2" @click="handleSkip('/open_api')">
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
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  props:{
    pathname: String
  },
  data() {
    return {
      selectedKeys: ref(['1']),
    };
  },
  methods: {
    handleSkip(name) {
      this.$router.push(name);
    }
  },
  mounted()
  {
    switch(window.location.pathname){
        case '/home': this.selectedKeys = ref(['1']); break;
        case '/open_api': this.selectedKeys = ref(['2']); break;
    }
  }
});
</script>
<style scoped></style>