import { createRouter, createWebHistory } from "vue-router";
import ContactsPage from "../pages/ContactsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ContactsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
