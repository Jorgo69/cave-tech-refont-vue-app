<script setup>
import { ref, onMounted } from "vue";

import africanCountries from '../api/countries/african.json';
import africanCities from '../api/countries/africans-cities.json';

const props = defineProps({
  show: Boolean
});

const emit = defineEmits(['close']);

// Données du formulaire
const form = ref({
  civility: 'M',
  fullName: '',
  company: '',
  country: '',
  city: '',
  subject: '',
  message: ''
});

// Liste des pays
const countries = ref([]);
// Liste des villes (simulée)
const cities = ref([]);

// Charger les pays
onMounted( () => {
  try {

    countries.value = Object.values(africanCountries);
    // Trier les pays par nom
    countries.value.sort((a, b) => a.name_fr.localeCompare(b.name_fr));

  } catch (error) {
    console.error("Erreur lors du chargement des pays:", error);
  }
});

// Simuler le chargement des villes (dans un vrai projet, utiliser une API)
const loadCities = () => {

  const selectedCountry = countries.value.find(c => c.name_fr === form.value.country);
  if (selectedCountry && africanCities[selectedCountry.id]) {
    cities.value = africanCities[selectedCountry.id];
  } else {
    cities.value = [];
  }
};

// Soumettre le formulaire
const submitForm = () => {
  console.log('Formulaire soumis:', form.value);
  // Ici vous ajouteriez la logique pour envoyer les données au serveur
  emit('close');
};
</script>






<template>
  <Transition name="modal">
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Fond flouté -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <!-- Centrage vertical -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!-- Contenu du modal -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-900">
            <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              <slot name="header">Contactez-nous</slot>
            </h3>
            
            <form class="mt-4" @submit.prevent="submitForm">
              <!-- Civilité -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Civilité</label>
                <div class="flex items-center space-x-4">
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="form.civility" value="M" class="text-blue-600">
                    <span class="ml-2">M.</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="form.civility" value="Mme" class="text-blue-600">
                    <span class="ml-2">Mme</span>
                  </label>
                </div>
              </div>

              <!-- Nom complet -->
              <div class="mb-4">
                <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom Complet</label>
                <input 
                  v-model="form.fullName"
                  id="fullName" 
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
              </div>

              <!-- Société -->
              <div class="mb-4">
                <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Société/Organisation</label>
                <input 
                  v-model="form.company"
                  id="company" 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
              </div>

              <!-- Pays -->
              <div class="mb-4">
                <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pays</label>
                <select 
                  v-model="form.country"
                  id="country" 
                  required
                  @change="loadCities"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                  <!-- <option value="" disabled selected>Sélectionnez un pays</option> -->
                  <option v-for="country in countries" :key="country.id" :value="country.name_fr">
                    {{ country.name_fr }} (+{{ country.phoneCode }})
                  </option>
                </select>
              </div>

              <!-- Ville -->
              <div class="mb-4" v-if="cities.length > 0">
                <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ville</label>
                <select 
                  v-model="form.city"
                  id="city" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                  <option value="" disabled selected>Sélectionnez une ville</option>
                  <option v-for="city in cities" :key="city.id" :value="city.name_fr">
                    {{ city.name_fr }}
                  </option>
                </select>
              </div>
              <div class="mb-4" v-else>
                <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ville</label>
                <input 
                  v-model="form.city"
                  id="city" 
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
              </div>

              <!-- Objet -->
              <div class="mb-4">
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Objet</label>
                <input 
                  v-model="form.subject"
                  id="subject" 
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
              </div>

              <!-- Message -->
              <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  v-model="form.message"
                  id="message" 
                  rows="4" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"></textarea>
              </div>

              <!-- Boutons -->
              <div class="mt-6 flex justify-end space-x-3">
                <button 
                  type="button" 
                  @click="$emit('close')"
                  class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  Annuler
                </button>
                <button 
                  type="submit" 
                  class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>



<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>