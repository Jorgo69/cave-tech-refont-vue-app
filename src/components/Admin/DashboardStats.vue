<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div 
        v-for="(stat, index) in stats"
        :key="index"
        class="p-6 rounded-lg text-white shadow-lg"
        :class="stat.color"
      >
        <h3 class="text-lg font-semibold mb-2">{{ stat.title }}</h3>
        <p class="text-3xl font-bold">{{ stat.value }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Activité Récente</h3>
        <div class="space-y-3">
          <div 
            v-for="(activity, i) in activities"
            :key="i"
            class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <div class="w-2 h-2 rounded-full" :class="activity.color"></div>
            <span class="text-sm text-gray-600">{{ activity.text }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Statistiques</h3>
        <div class="space-y-4">
          <div 
            v-for="(stat, j) in blogStats"
            :key="j"
            class="flex justify-between items-center"
          >
            <span class="text-sm text-gray-600">{{ stat.label }}</span>
            <span class="font-semibold">{{ stat.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = ref([
  { title: 'Total Blogs', value: '124', color: 'bg-gradient-to-r from-pink-500 to-pink-600' },
  { title: 'Utilisateurs', value: '1,234', color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
  { title: 'Vues', value: '45,678', color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
  { title: 'Commentaires', value: '89', color: 'bg-gradient-to-r from-green-500 to-green-600' },
])

const activities = ref([
  { text: 'Nouveau blog publié', color: 'bg-green-500' },
  { text: 'Utilisateur inscrit', color: 'bg-blue-500' },
  { text: 'Commentaire en attente', color: 'bg-yellow-500' }
])

const blogStats = ref([
  { label: 'Blogs publiés', value: '124' },
  { label: 'En cours', value: '12' },
  { label: 'Brouillons', value: '8' }
])
</script>