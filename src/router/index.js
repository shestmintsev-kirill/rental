import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RentalItem from "../components/RentalItem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "RentalItem",
    component: RentalItem,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
