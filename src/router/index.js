import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/:catchAll(.*)",
    component: () => import('@/components/Welcome.vue')
  },
 
  {
    path: "/pokedex",
    name: "Pokedex",
    component: () => import('@/components/Pokedex.vue')
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import('@/components/Favorites.vue')
  },
  {
    path: "/Welcome",
    name: "Welcome",
    component: () => import('@/components/Welcome.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
