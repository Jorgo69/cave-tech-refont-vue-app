<template>
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-purple-900/30 overflow-hidden">
        <!-- Effets d'arrière-plan futuristes -->
        <div class="absolute inset-0 opacity-15">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-purple-500/20"></div>
            <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-900/40 to-transparent"></div>
        </div>
        <!-- Particules animées -->
        <div class="particles absolute inset-0 opacity-20"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Texte avec effets futuristes -->
                <div class="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 neon-glow">
                        DONNER DU POUVOIR AU MONDE NUMÉRIQUE
                    </h2>
                    
                    <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Nous nous engageons à donner aux individus et entreprises les moyens d'agir grâce à des solutions 
                        <span class="holographic-text font-medium">technologiques révolutionnaires</span> 
                        qui ouvrent de nouvelles perspectives. Notre mission est de rendre la technologie accessible et efficace pour façonner un avenir meilleur.
                    </p>

                    <!-- Boutons futuristes -->
                    <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button class="relative px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-lg group transition-all duration-300 hover:bg-purple-900/30 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/50">
                            <span class="relative z-10">S'INSCRIRE</span>
                            <span class="absolute inset-0 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 backdrop-blur-sm"></span>
                        </button>
                        
                        <button class="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/50">
                            <span class="relative z-10">CONTACTEZ-NOUS</span>
                            <span class="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span class="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></span>
                        </button>
                    </div>
                </div>

                <!-- Placeholder pour image avec cadre futuriste -->
                <div class="w-full lg:w-1/2 mt-12 lg:mt-0">
                    <div class="relative group">
                        <!-- Cadre futuriste animé -->
                        <div class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-lg group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
                        <div class="absolute inset-0 rounded-xl border-2 border-purple-400/30 group-hover:border-purple-300/50 transition-all duration-500"></div>
                        
                        <!-- Conteneur image avec effet holographique -->
                        <div class="relative h-80 lg:h-96 w-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <!-- Placeholder image - à remplacer par votre image -->
                                <div class="text-center p-6">
                                    <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <p class="text-gray-300 text-lg font-light">Votre équipe technologique</p>
                                    <p class="text-purple-300 text-sm mt-2">Depuis les années 90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

.holographic-text {
    background: linear-gradient(90deg, #e879f9, #a855f7, #7e22ce);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
}

.holographic-text::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #e879f9, #a855f7, #7e22ce);
    animation: hologram-line 3s infinite;
}

.particles::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 20%),
                    radial-gradient(circle at 80% 70%, rgba(232, 121, 249, 0.15) 0%, transparent 20%);
    animation: particles-move 20s infinite alternate;
}

@keyframes hologram-line {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
}

@keyframes particles-move {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-50px) translateX(50px); }
}
</style>