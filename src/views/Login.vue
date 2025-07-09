<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <button 
      @click="handleLogin"
      class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
    >
      Connexion Admin
    </button>
  </div>
</template>

<script setup>
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth'
import { allowedEmails } from '../firebase'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()

const handleLogin = async () => {
  const email = prompt("Veuillez entrer votre email autorisé:")
  
  if (!email) return // Annulation

  if (!allowedEmails.includes(email)) {
    alert("❌ Email non autorisé. Contactez l'administrateur.")
    return
  }

  const actionCodeSettings = {
    url: `${window.location.origin}/confirm`, // Ex: http://localhost:5173/confirm
    handleCodeInApp: true
  }

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    localStorage.setItem('emailForSignIn', email) // Stocke l'email pour validation ultérieure
    alert(`📨 Lien de connexion envoyé à ${email}. Vérifiez votre boîte mail (pensez aux spams).`)
    router.push('/waiting') // Optionnel : page d'attente
  } catch (error) {
    console.error("Erreur d'envoi :", error)
    alert("🔥 Erreur lors de l'envoi du lien. Voir la console.")
  }
}
</script>