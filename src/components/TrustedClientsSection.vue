<template>
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-purple-900/20 overflow-hidden">
        <!-- Effets d'arrière-plan futuristes -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-grid-purple-500/20"></div>
            <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
        </div>
        
        <!-- Effet de particules -->
        <div class="particles absolute inset-0 opacity-15"></div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Titre avec effet néon -->
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 neon-glow">
                APPRÉCIÉ PAR LES GÉANTS DU NUMÉRIQUE
            </h2>
            
            <!-- Description avec effet de lumière -->
            <p class="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
                Rejoignez nos clients prestigieux et découvrez le service <span class="holographic-text">exceptionnel</span> qui nous a valu la confiance des leaders mondiaux
            </p>

            <!-- Logos clients avec effet futuriste -->
            <div class="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
                <!-- Logo 1 -->
                <div class="client-logo">
                    <div class="logo-container">
                        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 10H9.01M15 10H15.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Logo 2 -->
                <div class="client-logo">
                    <div class="logo-container">
                        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Logo 3 -->
                <div class="client-logo">
                    <div class="logo-container">
                        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13H20M4 6H20M4 20H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Logo 4 -->
                <div class="client-logo">
                    <div class="logo-container">
                        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 8V16M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Logo 5 -->
                <div class="client-logo">
                    <div class="logo-container">
                        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10H21M7 15H8M12 15H13M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
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
    background-image: radial-gradient(circle at 30% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 25%),
                    radial-gradient(circle at 70% 60%, rgba(232, 121, 249, 0.15) 0%, transparent 25%);
    animation: particles-move 25s infinite alternate;
}

.client-logo {
    position: relative;
    transition: all 0.3s ease;
}

.logo-container {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(39, 39, 42, 0.5);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    border: 1px solid rgba(168, 85, 247, 0.2);
    transition: all 0.3s ease;
    padding: 16px;
}

.logo-icon {
    width: 100%;
    height: 100%;
    color: #a855f7;
    opacity: 0.8;
    transition: all 0.3s ease;
}

.client-logo:hover .logo-container {
    transform: translateY(-5px);
    border-color: rgba(232, 121, 249, 0.5);
    box-shadow: 0 10px 20px rgba(168, 85, 247, 0.2);
}

.client-logo:hover .logo-icon {
    color: #e879f9;
    opacity: 1;
    transform: scale(1.1);
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
@media (max-width: 640px) {
    .logo-container {
        width: 60px;
        height: 60px;
        padding: 12px;
    }
}
</style>