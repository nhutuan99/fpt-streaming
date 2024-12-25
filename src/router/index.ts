import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ChannelDetail from "@/views/ChannelDetail.vue";
import VodDetail from "@/views/VodDetail.vue";
import VodDrmDetail from "@/views/VodDrmDetail.vue";
import TokenPage from "@/views/TokenPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/channel/:id",
    name: "ChannelDetail",
    component: ChannelDetail,
  },
  {
    path: "/vod/:id",
    name: "VodDetail",
    component: VodDetail,
  },
  {
    path: "/vod-drm/:id",
    name: "VodDrmDetail",
    component: VodDrmDetail,
  },
  {
    path: "/token",
    name: "TokenPage",
    component: TokenPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
