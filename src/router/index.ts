import {createWebHistory,createRouter} from 'vue-router';
import HomeView from '../views/Home/HomeView.vue'
import DetailsView from '../views/Details/DetailsView.vue'
const router = createRouter({
    history:createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
        meta:{
          requiresAuth:false
        }
      },
      {
        path: "/details/:tipo/:id",
        name: "details",
        component: DetailsView,
        meta:{
          requiresAuth:false
        }
      }
    ]
  });
  

  export default router;