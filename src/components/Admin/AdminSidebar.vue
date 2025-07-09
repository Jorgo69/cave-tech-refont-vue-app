<template>
  <div>
    <!-- Overlay mobile -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      ..click="$emit('toggle-sidebar')"
    />
    
    <!-- Sidebar -->
    <div 
      class="fixed top-0 left-0 h-full bg-gradient-to-b from-purple-900 to-purple-800 text-white transform transition-transform duration-300 ease-in-out z-50"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full', 'lg:translate-x-0 lg:static lg:inset-0 w-64'"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <h1 class="text-2xl font-bold">CAVE-TECH</h1>
          <button 
            ..click="$emit('toggle-sidebar')"
            class="lg:hidden text-white hover:text-gray-300"
          >
            <X size="24" />
          </button>
        </div>
        
        <nav class="space-y-2">
          <button
            v-for="item in menuItems"
            :key="item.id"
            ..click="$emit('update-menu', item.id)"
            class="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors"
            :class="activeMenu === item.id
              ? 'bg-pink-600 text-white'
              : 'text-gray-300 hover:bg-purple-700 hover:text-white'"
          >
            <component :is="item.icon" size="20" />
            <span>{{ item.label }}</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  Home, 
  FileText, 
  Settings, 
  Users, 
  BarChart3,
  X
} from 'lucide-vue-next'

defineProps({
  activeMenu: String,
  isOpen: Boolean
})

defineEmits(['update-menu', 'toggle-sidebar'])

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'blogs', icon: FileText, label: 'Blogs' },
  { id: 'users', icon: Users, label: 'Utilisateurs' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'settings', icon: Settings, label: 'Paramètres' },
]
</script>