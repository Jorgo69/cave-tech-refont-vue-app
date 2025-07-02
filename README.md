### Installer vue router
`npm install vue-router@4`
###  Créer un fichier de configuration pour le routeur

Dans votre projet, créez un dossier router à la racine (au même niveau que src) et ajoutez-y un fichier index.js :

Structure du projet après ajout :

```
votre-projet/
├── src/
│   ├── components/
│   ├── views/
│   ├── App.vue
│   ├── main.js
├── router/
│   ├── index.js
├── vite.config.js
├── package.json
```

### Configurer Vue Router
Ajoutez le code suivant dans router/index.js :
import { createRouter, createWebHistory } from "vue-router";

// Importez vos composants de vues
import Home from "../src/views/Home.vue";
import About from "../src/views/About.vue";

// Définissez les routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

// Créez le routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

### Créer des vues
Dans le dossier src, créez un dossier views pour stocker vos composants de vues. Par exemple :

Fichier src/views/Home.vue :
```
<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil !</p>
  </div>
</template>

<script setup>
// Vous pouvez ajouter des scripts ici si nécessaire
</script>
```

### Integrer le routeur dans l'app

```
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importez le routeur

const app = createApp(App);

// Utilisez le routeur
app.use(router);

app.mount("#app");
```

### Mettre à jour App.vue

Ajoutez un <router-view> dans App.vue pour afficher les différentes vues en fonction de la route active :

```
<template>
  <div>
    <!-- Barre de navigation -->
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">À propos</router-link>
    </nav>

    <!-- Contenu dynamique des vues -->
    <router-view />
  </div>
</template>

<script setup>
// Pas besoin de script pour l'instant
</script>

<style>
/* Ajoutez des styles globaux ici */
</style>
```