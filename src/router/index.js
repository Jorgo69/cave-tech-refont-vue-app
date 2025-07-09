import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue' // Ta landing page
import Blog from '../views/Blog.vue' // Futur composant Blog
import Login from '../views/Login.vue'
import ConfirmLogin from '../views/ConfirmLogin.vue'
import AdminView from '../views/AdminView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'


// Firebase Authentification
// router/index.js

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { allowedEmails } from '../firebase'

const auth = getAuth()

const requireAuth = async (to, from, next) => {
  try {
    const user = await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe()
        resolve(user)
      }, reject)
    })

    if (user && allowedEmails.includes(user.email)) {
      next()
    } else {
      next('/')
    }
  } catch (error) {
    console.error('Erreur d\'authentification:', error)
    next('/')
  }
}

const routes = [

  // Routes publiques (avec NavBar/Footer)
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'blog', component: Blog },
      { path: 'login', component: Login },
      { path: 'confirm', component: ConfirmLogin },
    ]
  },

  // Routes admin (sans NavBar/Footer)
  {
    path: '/admin',
    component: AdminLayout,
    beforeEnter: requireAuth, // Protection Firebase
    children: [
      { path: '', component: AdminView }, // /admin
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router