<template>
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-purple-900/20 overflow-hidden">
        <!-- Effets d'arrière-plan futuristes -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-purple-500/20"></div>
            <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Titre avec effet néon -->
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 neon-glow">
                DÉCOUVREZ LES OUTILS DU FUTUR
            </h2>
            
            <!-- Sous-titre avec effet de lumière -->
            <p class="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
                Libérez l'innovation et accélérez la croissance avec notre technologie <span class="holographic-text">révolutionnaire</span>
            </p>

            <!-- Cartes futuristes -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Carte 1 -->
                <div class="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10">
                        <!-- Icône futuriste -->
                        <div class="w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-center text-purple-300">Innovation de pointe</h3>
                        <p class="text-gray-300 text-center">Découvrez des avancées technologiques révolutionnaires qui repoussent les limites du possible, transformant notre façon de vivre et de travailler.</p>
                    </div>
                </div>

                <!-- Carte 2 -->
                <div class="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10">
                        <!-- Icône futuriste -->
                        <div class="w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-center text-purple-300">Connectivité transparente</h3>
                        <p class="text-gray-300 text-center">Restez connecté à tout moment grâce à notre infrastructure réseau robuste, garantissant une communication ininterrompue dans le monde numérique.</p>
                    </div>
                </div>

                <!-- Carte 3 -->
                <div class="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                    <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10">
                        <!-- Icône futuriste -->
                        <div class="w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-center text-purple-300">Interface intuitive</h3>
                        <p class="text-gray-300 text-center">Expérience utilisateur fluide avec notre interface élégante, conçue pour simplifier les tâches complexes et maximiser la productivité.</p>
                    </div>
                </div>
            </div>

            <!-- Bouton futuriste centré -->
            <div class="flex justify-center mt-12">
                <button class="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/50">
                    <span class="relative z-10">CONTACTEZ-NOUS</span>
                    <span class="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span class="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></span>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
/* Réutilisation des mêmes effets que le premier composant */
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
    font-weight: 500;
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

@keyframes hologram-line {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
}
</style>