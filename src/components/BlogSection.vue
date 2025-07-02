<template>
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-purple-900/20 overflow-hidden" id="blog">
        <!-- Effets d'arrière-plan futuristes -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-purple-500/20"></div>
            <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
        </div>
        
        <!-- Effet de particules -->
        <div class="particles absolute inset-0 opacity-15"></div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Titre avec effet néon -->
            <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 neon-glow">
                NOS DERNIÈRES RÉFLEXIONS
            </h2>

            <!-- Articles de blog futuristes -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Article 1 -->
                <div class="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <!-- Effet de halo -->
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <!-- Image placeholder futuriste -->
                    <div class="h-48 bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-grid-white/10"></div>
                        <svg class="w-16 h-16 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                        </svg>
                    </div>
                    
                    <!-- Contenu -->
                    <div class="p-6 relative">
                        <span class="inline-block mb-3 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Conception et Développement
                        </span>
                        <h3 class="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                            L'avenir de l'IA dans les soins de santé
                        </h3>
                        <p class="text-gray-300 mb-4">
                            Nous disposons d'une gamme très variée de logiciels spécifiques et concevons sur demande des logiciels répondant à votre activité. Aussi, il vous est possible de faire la mise à jour de vos logiciels spécifiques existants.
                        </p>
                        <div class="flex items-center text-purple-400 group-hover:text-pink-300 transition-colors duration-300">
                            <span class="text-sm font-medium">Lire la suite</span>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Article 2 -->
                <div class="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <!-- Effet de halo -->
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <!-- Image placeholder futuriste -->
                    <div class="h-48 bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-grid-white/10"></div>
                        <svg class="w-16 h-16 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                    </div>
                    
                    <!-- Contenu -->
                    <div class="p-6 relative">
                        <span class="inline-block mb-3 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Génie Civil et Construction
                        </span>
                        <h3 class="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                            Innovations dans la construction moderne
                        </h3>
                        <p class="text-gray-300 mb-4">
                            Notre équipe d'experts travaille sur des chantiers de construction moderne, symbolisant le professionnalisme et l'efficacité, avec une expertise inégalée dans la construction de bâtiments.
                        </p>
                        <div class="flex items-center text-purple-400 group-hover:text-pink-300 transition-colors duration-300">
                            <span class="text-sm font-medium">Lire la suite</span>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Article 3 -->
                <div class="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <!-- Effet de halo -->
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <!-- Image placeholder futuriste -->
                    <div class="h-48 bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-grid-white/10"></div>
                        <svg class="w-16 h-16 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    
                    <!-- Contenu -->
                    <div class="p-6 relative">
                        <span class="inline-block mb-3 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Formations professionnelles
                        </span>
                        <h3 class="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                            Excellence managériale et technique
                        </h3>
                        <p class="text-gray-300 mb-4">
                            Nous offrons des formations dans divers domaines pour améliorer la performance des institutions, notamment en informatique, maintenance, sécurité et gestion de projet.
                        </p>
                        <div class="flex items-center text-purple-400 group-hover:text-pink-300 transition-colors duration-300">
                            <span class="text-sm font-medium">Lire la suite</span>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bouton "Voir plus" optionnel -->
            <!-- <div class="flex justify-center mt-12">
                <button class="relative px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-lg group transition-all duration-300 hover:bg-purple-900/30 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/50">
                    <span class="relative z-10">TOUT AFFICHER</span>
                    <span class="absolute inset-0 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 backdrop-blur-sm"></span>
                </button>
            </div> -->
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
/* Effets cohérents avec les autres composants */
.neon-glow {
    text-shadow: 0 0 8px rgba(192, 132, 252, 0.6), 
                 0 0 16px rgba(192, 132, 252, 0.4),
                 0 0 24px rgba(192, 132, 252, 0.2);
}

.particles::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 30% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 25%),
                    radial-gradient(circle at 70% 60%, rgba(232, 121, 249, 0.15) 0%, transparent 25%);
    animation: particles-move 25s infinite alternate;
}

@keyframes particles-move {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-30px) translateX(30px); }
}

/* Animation des cartes au survol */
.group:hover .transform {
    transform: translateY(-5px);
}
</style>