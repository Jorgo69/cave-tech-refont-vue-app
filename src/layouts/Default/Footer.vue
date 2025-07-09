<template>
    <footer class="relative bg-gradient-to-b from-purple-900 to-gray-900 overflow-hidden">
        <!-- Effets d'arrière-plan futuristes -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-pink-500/10"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10 py-12">
            <!-- Contenu principal du footer -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <!-- Colonne Logo + Description -->
                <div class="flex flex-col items-center md:items-start">
                    <div class="mb-6">
                        <!-- Logo avec effet néon -->
                        <div class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 neon-glow">
                            CAVE-TECH
                        </div>
                    </div>
                    <p class="text-gray-300 text-center md:text-left max-w-xs">
                        Pionniers de l'innovation technologique depuis les années 90, façonnant le futur numérique.
                    </p>
                </div>

                <!-- Liens rapides -->
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-semibold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">Navigation</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center">
                                <span class="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                À propos
                            </a></li>
                            <li><a href="#" class="text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center">
                                <span class="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                Services
                            </a></li>
                            <li><a href="#" class="text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center">
                                <span class="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                Blog
                            </a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">Entreprise</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center">
                                <span class="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                Carrières
                            </a></li>
                            <li><a href="#" class="text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center">
                                <span class="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                Contact
                            </a></li>
                            <li><a href="#" class="text-gray-300 hover:text-pink-300 transition-colors duration-300 flex items-center">
                                <span class="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                Confidentialité
                            </a></li>
                        </ul>
                    </div>
                </div>

                <!-- Réseaux sociaux + Newsletter -->
                <div>
                    <h3 class="text-lg font-semibold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">Nous suivre</h3>
                    <div class="flex space-x-4 mb-6">
                        <a href="#" class="social-icon">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                    </div>

                    <h3 class="text-lg font-semibold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">Newsletter</h3>
                    <form class="flex">
                        <input 
                            type="email" 
                            placeholder="Votre email" 
                            class="flex-grow px-4 py-2 bg-gray-800/50 border border-pink-500/30 rounded-l-lg text-white focus:outline-none focus:ring-1 focus:ring-pink-300"
                        >
                        <button 
                            type="submit" 
                            class="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-r-lg hover:opacity-90 transition-opacity"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Séparateur -->
            <div class="border-t border-pink-500/20 my-8"></div>

            <!-- Copyright -->
            <div class="text-center text-gray-400 text-sm">
                <p>© {{ new Date().getFullYear() }} CAVE-TECH. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
/* Effets cohérents avec les autres composants */
.neon-glow {
    text-shadow: 0 0 8px rgba(244, 114, 182, 0.6), 
                 0 0 16px rgba(192, 132, 252, 0.4),
                 0 0 24px rgba(216, 180, 254, 0.2);
}

.social-icon {
    @apply w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 hover:text-white transition-all duration-300;
}

/* Animation des liens */
a:hover span {
    @apply bg-pink-300;
    transform: scale(1.5);
    transition: all 0.3s ease;
}
</style>