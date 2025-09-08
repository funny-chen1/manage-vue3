import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia"
import router from "./router/index.js";
import { ElContainer, ElHeader, ElAside, ElMain, ElMenu, ElIcon, ElForm, ElFormItem, ElInput, ElButton, ElCheckbox , ElCard, ElTable, ElPagination, ElDialog, ElTooltip, ElRadioGroup, ElRadio, ElMessage} from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { resize } from "./directive/resize";

const app = createApp(App);

app.use(createPinia())
// 路由
app.use(router);
// 引入组件
app.use(ElContainer).use(ElHeader).use(ElAside).use(ElMain).use(ElMenu).use(ElIcon).use(ElForm).use(ElFormItem).use(ElButton).use(ElInput).use(ElCheckbox)
    .use(ElCard).use(ElTable).use(ElPagination).use(ElDialog).use(ElTooltip).use(ElRadioGroup).use(ElRadio).use(ElMessage)
// 注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 自定义指令
app.directive("sy-resize", resize);


app.mount("#app");
