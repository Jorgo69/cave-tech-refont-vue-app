<template>
  <nav class="relative bg-gray-900 border-b border-purple-500/20">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
            CAVE-TECH
          </router-link>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden lg:flex lg:items-center lg:space-x-6">
          <router-link v-for="(item, index) in navItems" 
             :key="index" 
             :to="item.href"
             class="text-gray-300 hover:text-white px-3 py-2">
            {{ item.text }}
          </router-link>
          <router-link
            v-if="isAuthenticated"
            to="/admin"
            class="text-gray-300 hover:text-white px-3 py-2"
          >
            Admin
          </router-link>
          <button class="ml-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
            Contact
          </button>
          <LogoutButton v-if="isAuthenticated" />
        </div>

        <!-- Bouton Mobile -->
        <div class="lg:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-300 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-show="isOpen" class="lg:hidden absolute inset-x-0 top-16 bg-gray-900 z-50">
      <div class="container mx-auto px-4 py-2">
        <div class="flex flex-col space-y-2">
          <router-link v-for="(item, index) in navItems" 
             :key="index" 
             :to="item.href" 
             class="text-gray-300 hover:text-white px-3 py-2"
             @click="isOpen = false">
            {{ item.text }}
          </router-link>
          <button class="w-full my-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const navItems = [
  { text: 'Accueil', href: '/' },
  { text: 'Services', href: '#services' },
  { text: 'Technologies', href: '#tech' },
  { text: 'Réalisations', href: '#work' },
  { text: 'Blog', href: '/blog' },
  { text: 'À propos', href: '#about' },
];

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import LogoutButton from '../../components/LogoutButton.vue'

const auth = getAuth()
const isAuthenticated = ref(false)

// Écoute les changements d'authentification
onAuthStateChanged(auth, (user) => {
  isAuthenticated.value = !!user
})
</script>