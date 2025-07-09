<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex">
      <AdminSidebar 
        :active-menu="activeMenu"
        ..update-menu="setActiveMenu"
        :is-open="sidebarOpen"
        ..toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
      
      <div class="flex-1 lg:ml-0">
        <AdminHeader ..toggle-sidebar="sidebarOpen = true" />
        
        <main class="p-6">
          <component :is="currentComponent" 
            ..edit-blog="handleEditBlog"
            ..add-blog="handleAddBlog"
            ..save-blog="handleSaveBlog"
            ..cancel-blog="handleCancelBlog"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AdminHeader from '../Admin/AdminHeader.vue'
import AdminSidebar from '../Admin/AdminSidebar.vue'
import DashboardStats from '../Admin/DashboardStats.vue'
import BlogList from '../Admin/BlogList.vue'
import BlogForm from '../Admin/BlogForm.vue'

const activeMenu = ref('dashboard')
const sidebarOpen = ref(false)
const showBlogForm = ref(false)
const editingBlog = ref(null)

const currentComponent = computed(() => {
  if (activeMenu.value === 'blogs') {
    return showBlogForm.value ? BlogForm : BlogList
  }
  return DashboardStats // Pour simplifier, on montre seulement les stats pour le dashboard
})

const handleEditBlog = (blog) => {
  editingBlog.value = blog
  showBlogForm.value = true
}

const handleAddBlog = () => {
  editingBlog.value = null
  showBlogForm.value = true
}

const handleSaveBlog = (formData) => {
  console.log('Sauvegarde du blog:', formData)
  showBlogForm.value = false
  editingBlog.value = null
}

const handleCancelBlog = () => {
  showBlogForm.value = false
  editingBlog.value = null
}

const setActiveMenu = (menu) => {
  activeMenu.value = menu
  showBlogForm.value = false
}
</script>