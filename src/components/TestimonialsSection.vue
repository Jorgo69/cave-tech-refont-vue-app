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
            <!-- Titre avec effet néon -->
            <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 neon-glow">
                PLUS D'UN MILLION DE CLIENTS SATISFAITS
            </h2>

            <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Conteneur image avec cadre futuriste -->
                <div class="w-full lg:w-1/2">
                    <div class="relative group">
                        <!-- Cadre futuriste animé -->
                        <div class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-lg group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
                        <div class="absolute inset-0 rounded-xl border-2 border-purple-400/30 group-hover:border-purple-300/50 transition-all duration-500"></div>
                        
                        <!-- Placeholder image avec effet holographique -->
                        <div class="relative h-80 w-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 flex items-center justify-center">
                            <div class="text-center p-6">
                                <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <p class="text-gray-300 text-lg font-light">Témoignage client</p>
                                <p class="text-purple-300 text-sm mt-2">Expérience révolutionnaire</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Témoignage avec effets futuristes -->
                <div class="w-full lg:w-1/2">
                    <div class="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500">
                        <!-- Effet de citation -->
                        <svg class="absolute top-4 left-4 w-8 h-8 text-purple-500/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>

                        <p class="text-gray-300 text-lg mb-8 italic relative z-10">
                            "Je suis extrêmement impressionné par les solutions technologiques transformatrices proposées par 
                            <span class="holographic-text font-medium">{{ appName }}</span>. 
                            Leurs innovations ont révolutionné nos opérations, optimisant notre productivité de 40%. Grâce à leurs capacités avancées d'analyse, nous prenons désormais des décisions fondées sur les données en toute confiance."
                        </p>

                        <!-- Auteur du témoignage -->
                        <div class="flex items-center">
                            <div class="h-14 w-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p class="font-bold text-purple-300">Sarah Thompson</p>
                                <p class="text-gray-400 text-sm">PDG @Thompson Entreprises</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bouton futuriste centré sur mobile -->
                    <div class="flex justify-center lg:justify-start mt-12">
                        <button class="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/50">
                            <span class="relative z-10">CONTACTEZ-NOUS</span>
                            <span class="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span class="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const appName = import.meta.env.VITE_APP_NAME;
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
    background-image: radial-gradient(circle at 30% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 25%),
                    radial-gradient(circle at 70% 60%, rgba(232, 121, 249, 0.15) 0%, transparent 25%);
    animation: particles-move 25s infinite alternate;
}

@keyframes hologram-line {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
}

@keyframes particles-move {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-30px) translateX(30px); }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .testimonial-text {
        font-size: 1rem;
        padding: 1.5rem;
    }
}
</style>