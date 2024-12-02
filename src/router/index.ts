import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";
import ProductsView from "@/views/ProductsView/ProductsView.vue";
import ContactsView from "@/views/ContactsView/ContactsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
  ],
});

export default router;
