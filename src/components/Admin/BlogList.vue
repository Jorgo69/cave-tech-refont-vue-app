<template>
  <div class="bg-white rounded-lg shadow-lg">
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold text-gray-800">Liste des Blogs</h3>
        <button
          ..click="$emit('add-blog')"
          class="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all"
        >
          <Plus size="18" />
          <span>Nouveau Blog</span>
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Titre
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Catégorie
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vues
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr 
            v-for="blog in blogs"
            :key="blog.id"
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ blog.title }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900 capitalize">{{ blog.category }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getStatusColor(blog.status)">
                {{ blog.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ blog.date }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ blog.views }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex space-x-2">
                <button class="text-blue-600 hover:text-blue-900">
                  <Eye size="16" />
                </button>
                <button 
                  ..click="$emit('edit-blog', blog)"
                  class="text-yellow-600 hover:text-yellow-900"
                >
                  <Edit size="16" />
                </button>
                <button 
                  ..click="deleteBlog(blog.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  <Trash2 size="16" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Eye, Edit, Trash2 } from 'lucide-vue-next'

const blogs = ref([
  {
    id: 1,
    title: 'Introduction à Vue.js 3',
    category: 'tech',
    status: 'published',
    date: '2024-01-15',
    views: 1234
  },
  // ... autres blogs
])

const getStatusColor = (status) => {
  switch(status) {
    case 'published': return 'bg-green-100 text-green-800'
    case 'draft': return 'bg-yellow-100 text-yellow-800'
    case 'archived': return 'bg-gray-100 text-gray-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const deleteBlog = (id) => {
  blogs.value = blogs.value.filter(blog => blog.id !== id)
}

defineEmits(['edit-blog', 'add-blog'])
</script>