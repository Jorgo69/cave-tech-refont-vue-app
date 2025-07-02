<template>
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-purple-900 overflow-hidden">
        <!-- Effets d'arrière-plan futuristes -->
        <div class="absolute inset-0 opacity-20">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-purple-500/30"></div>
            <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-900/40 to-transparent"></div>
        </div>
        
        <!-- Particules animées -->
        <div class="particles absolute inset-0 opacity-30"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Texte avec effets futuristes -->
                <div class="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 neon-glow">
                        REJOIGNEZ NOTRE AVENTURE TECHNOLOGIQUE
                    </h2>
                    
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Restez connecté avec les dernières innovations et actualités de notre écosystème. Recevez chaque mois des insights exclusifs directement dans votre boîte mail.
                    </p>

                    <!-- Formulaire futuriste -->
                    <form class="flex flex-col sm:flex-row gap-4 max-w-2xl">
                        <div class="relative flex-grow">
                            <input 
                                type="email" 
                                placeholder="Votre email professionnel" 
                                class="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-all duration-300"
                            />
                            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                        </div>
                        
                        <button 
                            type="submit" 
                            class="relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/30"
                        >
                            <span class="relative z-10 font-medium">S'ABONNER</span>
                            <span class="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span class="absolute -inset-2 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></span>
                        </button>
                    </form>
                </div>

                <!-- Placeholder pour image avec cadre futuriste -->
                <div class="w-full lg:w-1/2 mt-12 lg:mt-0">
                    <div class="relative group">
                        <!-- Cadre futuriste animé -->
                        <div class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-70 blur-lg group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
                        <div class="absolute inset-0 rounded-xl border-2 border-purple-400/30 group-hover:border-pink-300/50 transition-all duration-500"></div>
                        
                        <!-- Conteneur image avec effet holographique -->
                        <div class="relative h-80 lg:h-96 w-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 flex items-center justify-center">
                            <div class="text-center p-6">
                                <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-4xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p class="text-gray-300 text-lg font-light">Newsletter Exclusive</p>
                                <p class="text-pink-300 text-sm mt-2">Contenus Tech Avancés</p>
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
    text-shadow: 0 0 8px rgba(244, 114, 182, 0.6), 
                 0 0 16px rgba(192, 132, 252, 0.4),
                 0 0 24px rgba(216, 180, 254, 0.2);
}

.particles::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 30%, rgba(244, 114, 182, 0.2) 0%, transparent 20%),
                      radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.2) 0%, transparent 20%);
    animation: particles-move 20s infinite alternate;
}

@keyframes particles-move {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-50px) translateX(50px); }
}

/* Animation du champ de formulaire */
input:focus {
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3);
}
</style>