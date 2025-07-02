<template>
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900 py-24">
        <!-- Effets futuristes en arrière-plan -->
        <div class="absolute inset-0 opacity-20">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-purple-500/30"></div>
            <div class="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/50 to-transparent"></div>
        </div>
        
        <!-- Particules animées -->
        <div class="particles absolute inset-0 opacity-30"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row items-center">
                <div class="w-full md:w-1/2 text-center md:text-left">
                    <!-- Titre avec effet néon -->
                    <h1 class="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-glow">
                        RÉVOLUTIONNER <br>L'AVENIR NUMÉRIQUE
                    </h1>
                    
                    <!-- Texte avec effet holographique -->
                    <p class="text-xl mb-10 text-gray-300 font-light tracking-wide">
                        Depuis les années 90, nous façonnons le futur avec 
                        <span class="holographic-text font-medium">
                            {{ appName }}
                        </span>
                    </p>
                    
                    <!-- Boutons futuristes -->
                    <div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <button 
                            @click="$emit('open-modal')" 
                            class="relative px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-lg group transition-all duration-300 hover:bg-purple-900/30 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/50"
                        >
                            <span class="relative z-10">VOUS AVEZ UN PROJET ?</span>
                            <span class="absolute inset-0 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 backdrop-blur-sm"></span>
                        </button>
                        
                        <button 
                            class="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/50"
                        >
                            <span class="relative z-10">CONTACTEZ-NOUS</span>
                            <span class="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span class="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></span>
                        </button>
                    </div>
                </div>
                
                <!-- Placeholder pour une image/illustration 3D futuriste -->
                <div class="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <div class="relative w-64 h-64 md:w-80 md:h-80">
                        <div class="absolute inset-0 bg-purple-500/10 rounded-full animate-pulse"></div>
                        <div class="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
                        <div class="relative z-10 flex items-center justify-center h-full">
                            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                                CAVE-TECH
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const appName = import.meta.env.VITE_APP_NAME;
</script>

<style>
/* Effets CSS personnalisés */
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
    height: 2px;
    background: linear-gradient(90deg, #e879f9, #a855f7, #7e22ce);
    animation: hologram-line 3s infinite;
}

@keyframes hologram-line {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
}

.particles::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 20%),
                      radial-gradient(circle at 80% 70%, rgba(232, 121, 249, 0.2) 0%, transparent 20%);
    animation: particles-move 20s infinite alternate;
}

@keyframes particles-move {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-50px) translateX(50px); }
}

@keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}
</style>