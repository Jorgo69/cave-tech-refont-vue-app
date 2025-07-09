<template>
  <div class="bg-white rounded-lg shadow-lg p-6">
    <h3 class="text-xl font-semibold mb-6 text-gray-800">
      {{ editingBlog ? 'Modifier le Blog' : 'Nouveau Blog' }}
    </h3>
    
    <div class="space-y-6">
      <!-- Formulaire similaire à la version React -->
      <!-- ... -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Save, X } from 'lucide-vue-next'

const props = defineProps({
  blog: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save-blog', 'cancel-blog'])

const formData = ref({
  title: props.blog?.title || '',
  content: props.blog?.content || '',
  category: props.blog?.category || '',
  status: props.blog?.status || 'draft',
  tags: props.blog?.tags || ''
})

const handleSubmit = () => {
  emit('save-blog', formData.value)
}
</script>