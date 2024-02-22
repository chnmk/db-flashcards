import { createRouter, createWebHistory } from "vue-router";
import DatacardsField from "../components/DatacardsField.vue";

export default createRouter({
  routes: [
    {
      path: "/:user/:id",
      name: "home",
      component: DatacardsField,
    },
  ],
  history: createWebHistory(),
});
