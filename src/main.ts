import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from "@/components/svgIcon/Index.vue";
import router from '@/router'



import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './assets/main.css'


const app = createApp(App);
app.component("svg-icon",SvgIcon);

app.use(Antd);
app.use(router);

app.mount('#app')
