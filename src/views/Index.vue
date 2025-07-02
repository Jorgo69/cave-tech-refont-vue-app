<template>
    <!-- Hero Section -->
   <HeroSection @open-modal="showModal = true" />

   <!-- ModalProjet -->
    <ModalProjet :show="showModal" @close="showModal = false" />

   <!-- Status -->
    <StatusSection />

    <FeaturesSection />

    <MissionStatementSection />

    <TrustedClientsSection />

    <TestimonialsSection />

    <BlogSection />

    <NewsLetterSignupSection />

</template>

<script setup>
import { ref } from 'vue';

import FeaturesSection from '../components/ FeaturesSection.vue';
import BlogSection from '../components/BlogSection.vue';
import HeroSection from '../components/HeroSection.vue'
import MissionStatementSection from '../components/MissionStatementSection.vue';
import NewsLetterSignupSection from '../components/NewsLetterSignupSection.vue';
import StatusSection from '../components/StatsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue';
import TrustedClientsSection from '../components/TrustedClientsSection.vue';
import ModalProjet from '../components/ModalProjet.vue';

// État centralisé pour le modal
const showModal = ref(false);
</script>