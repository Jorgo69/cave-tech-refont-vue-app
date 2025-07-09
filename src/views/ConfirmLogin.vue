<template>
  <div class="min-h-screen flex items-center justify-center">
    <p class="text-lg">
      {{ statusMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { allowedEmails } from '../firebase'

const router = useRouter()
const auth = getAuth()
const statusMessage = ref("Validation en cours...")

onMounted(async () => {
  try {
    // 1. Vérifie si c'est bien un lien de connexion valide
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      statusMessage.value = "Lien invalide"
      return router.push('/')
    }

    // 2. Récupère l'email stocké
    const email = localStorage.getItem('emailForSignIn')
    console.log("Email from storage:", email) // Debug
    
    if (!email) {
      statusMessage.value = "Session expirée"
      return router.push('/login')
    }

    // 3. Vérifie l'email autorisé
    if (!allowedEmails.includes(email)) {
      statusMessage.value = "Accès non autorisé"
      return router.push('/')
    }

    // 4. Complète la connexion
    console.log("Tentative de connexion pour:", email) // Debug
    const userCredential = await signInWithEmailLink(auth, email, window.location.href)
    console.log("Connexion réussie:", userCredential.user) // Debug
    
    // 5. Nettoie et redirige
    localStorage.removeItem('emailForSignIn')
    statusMessage.value = "Connexion réussie ! Redirection..."
    router.push('/admin')
    
  } catch (error) {
    console.error("Erreur complète:", error) // Debug complet
    statusMessage.value = `Erreur: ${error.message}`
    setTimeout(() => router.push('/login'), 3000)
  }
})
</script>