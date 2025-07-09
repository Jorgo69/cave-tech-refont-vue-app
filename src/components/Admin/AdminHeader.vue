<template>
  <header class="bg-gradient-to-r from-purple-900 to-purple-800 text-white p-4 shadow-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <button 
          ..click="$emit('toggle-sidebar')"
          class="lg:hidden text-white hover:text-gray-300"
        >
          <Menu size="24" />
        </button>
        <h2 class="text-xl font-semibold">Dashboard Admin</h2>
      </div>
      
      <div class="flex items-center space-x-4">
        <button class="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition-colors">
          Contact
        </button>
        <button class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
          Déconnexion
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])
</script>