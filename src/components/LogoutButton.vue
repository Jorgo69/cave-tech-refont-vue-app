<template>
  <button
    @click="handleLogout"
    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
  >
    Déconnexion
  </button>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/') // Redirige vers la page d'accueil après déconnexion
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error)
  }
}
</script>