<template>
  <button @click="handleLogin" class="bg-blue-500 text-white p-2 rounded">
    Se connecter avec Gmail
  </button>
</template>

<script setup>
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { allowedEmails } from '@/firebase'

const auth = getAuth()

const handleLogin = async () => {
  const email = prompt("Entrez votre email professionnel")
  
  if (!allowedEmails.includes(email)) {
    alert("Accès réservé aux membres de l'équipe")
    return
  }

  const actionCodeSettings = {
    url: window.location.origin + '/confirm', // Page de confirmation
    handleCodeInApp: true
  }

  await sendSignInLinkToEmail(auth, email, actionCodeSettings)
  alert(`Lien de connexion envoyé à ${email}. Vérifiez votre boîte mail !`)
}
</script>