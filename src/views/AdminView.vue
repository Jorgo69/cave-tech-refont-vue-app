<template>

    <div class="relative min-h-screen lg:flex">
        <main id="content" class="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100 lg:h-screen md:space-y-8">
            
            <header class="flex items-center justify-between h-20 px-6 bg-white border-b">
                <div class="relative flex items-center">
                    <router-link to="/">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    </router-link>
                    
                </div>

                <div class="flex items-center">
                    <div class="relative">
                        <button class="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100" >
                            <span class="sr-only">User Menu</span>
                            <div class="flex items-center md:-mx-2 ">
                                <div class="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight">
                                    <span class="font-semibold text-sm text-gray-800">Dhaiflaah</span>
                                    <span class="text-sm text-gray-600">Lecturer</span>
                                </div>
        
                                <img class="flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-100 rounded-full md:mx-2" src="https://randomuser.me/api/portraits/men/68.jpg" alt="user profile photo" >
                            </div>
                        </button>
                    </div>

                    <button @click="handleLogout" class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
                        <span class="sr-only">Deconnexion</span>
                        
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </header>

            <section class="flex flex-col w-full px-6 md:justify-between md:items-center md:flex-row">
                <div>
                    <h2 class="text-3xl font-medium text-gray-800">Dashboard</h2>
                    <p class="mt-2 text-sm text-gray-500">La page qui vous resume tout</p>
                </div>
            </section>

            <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">
                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 ">
                    <div class="flex items-center -mx-2">
                        <svg class="mx-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#713BDB" fill-opacity="0.05" />
                            <path d="M26 44C26 40.625 30.5 40.625 32.75 38.375C33.875 37.25 30.5 37.25 30.5 31.625C30.5 27.8754 31.9996 26 35 26C38.0004 26 39.5 27.8754 39.5 31.625C39.5 37.25 36.125 37.25 37.25 38.375C39.5 40.625 44 40.625 44 44" stroke="#6F52ED" stroke-width="2" stroke-linecap="square" />
                        </svg>
    
                        <div class="mx-2">
                            <h3 class="text-2xl font-medium text-gray-800">62</h3>
                            <p class="mt-1 text-sm text-gray-500">Projets</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 ">
                    <div class="flex items-center -mx-2">
                        <svg class="mx-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#33D69F" fill-opacity="0.07" />
                            <path d="M26 39L31 34" stroke="#21B8C7" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M32 34C32.5523 34 33 33.5523 33 33C33 32.4477 32.5523 32 32 32C31.4477 32 31 32.4477 31 33C31 33.5523 31.4477 34 32 34Z"
                                stroke="#21B8C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M37 39C37.5523 39 38 38.5523 38 38C38 37.4477 37.5523 37 37 37C36.4477 37 36 37.4477 36 38C36 38.5523 36.4477 39 37 39Z"
                                stroke="#21B8C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M38 37L44 31M33 34L36 37L33 34Z" stroke="#21B8C7" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
    
                        <div class="mx-2">
                            <h3 class="text-2xl font-medium text-gray-800">6.8</h3>
                            <p class="mt-1 text-sm text-gray-500">Average mark</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 ">
                    <div class="flex items-center -mx-2">
                        <svg class="mx-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#FF4C61" fill-opacity="0.05" />
                            <path d="M26 32L32 38L36 34L43.405 41.405" stroke="#FF4C61" stroke-width="2"
                                stroke-linecap="square" />
                            <path d="M43.405 41.405L44 42" stroke="#FF4C61" stroke-width="2" stroke-linecap="round" />
                            <path d="M44 39V42H41" stroke="#FF4C61" stroke-width="2" stroke-linecap="square" />
                        </svg>
    
                        <div class="mx-2">
                            <h3 class="text-2xl font-medium text-gray-800">9 <span class="text-xl text-gray-600">(14%)</span></h3>
                            <p class="mt-1 text-sm text-gray-500">Underperforming students</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 ">
                    <div class="flex items-center -mx-2">
                        <svg class="mx-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#4CB8FF" fill-opacity="0.07" />
                            <path
                                d="M42 26V44H31C30.2044 44 29.4413 43.6839 28.8787 43.1213C28.3161 42.5587 28 41.7956 28 41V29C28 28.2044 28.3161 27.4413 28.8787 26.8787C29.4413 26.3161 30.2044 26 31 26H42Z"
                                stroke="#4CB8FF" stroke-width="2" stroke-linecap="square" />
                            <path d="M28 41C28 40.2044 28.3161 39.4413 28.8787 38.8787C29.4413 38.3161 30.2044 38 31 38H42"
                                stroke="#4CB8FF" stroke-width="2" stroke-linecap="square" />
                        </svg>
    
                        <div class="mx-2">
                            <h3 class="text-2xl font-medium text-gray-800">92%</h3>
                            <p class="mt-1 text-sm text-gray-500">Blogs</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 xl:col-span-2 md:col-span-3 md:row-span-2 gap-y-4 gap-x-8 ">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <h2 class="font-medium text-gray-700">Ajouter un Blog </h2>
                    </div>

                    <!-- Formulaire d'ajout/édition -->
                    <form @submit.prevent="handleSubmit">
                        <!-- Indicateur de mode édition -->
                        <div v-if="isEditing" class="mb-4 px-2 w-full">
                            <div class="flex items-center justify-between bg-blue-50 border border-blue-200 rounded p-3">
                                <span class="text-blue-700 font-medium">Mode édition activé</span>
                                <button type="button" 
                                        @click="cancelEdit"
                                        class="text-blue-600 hover:text-blue-800 underline">
                                    Annuler
                                </button>
                            </div>
                        </div>

                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="category">Type ou Categories:</label>
                            <input id="category" 
                                v-model="formData.category"
                                class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" 
                                type="text" 
                                autofocus 
                                placeholder="Domaine concernés ..." />
                        </div>

                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="title">Titre du blog:</label>
                            <input id="title" 
                                v-model="formData.title" 
                                class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" 
                                type="text" 
                                placeholder="Full title..." />
                        </div>

                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="content">Contenu</label>
                            <textarea id="content" 
                                    v-model="formData.content" 
                                    class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" 
                                    rows="5" 
                                    placeholder="Le corps du blog..."></textarea>
                        </div>

                        <!--Primary-->
                        <div class="mb-4 flex gap-2">
                            <button type="submit" 
                                    class="mx-2 my-2 px-8 py-4 text rounded text-white bg-blue-500 focus:outline-none hover:bg-blue-400">
                                {{ isEditing ? 'Mettre à jour' : 'Soumettre' }}
                            </button>
                            
                            <button v-if="isEditing" 
                                    type="button" 
                                    @click="cancelEdit"
                                    class="mx-2 my-2 px-8 py-4 text rounded text-gray-700 bg-gray-200 focus:outline-none hover:bg-gray-300">
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>

                <div class="bg-white rounded-lg shadow-md shadow-gray-200 p-4
                        w-full
                        md:col-span-3 <!-- md mobile -->
                        lg:col-span-3 <!-- lg ecran tablette  -->
                        xl:col-span-2"> <!-- xl pour grand ecran [ecran PC]-->

                    <div class="px-6 py-5 border-b border-gray-100 sm:flex sm:items-center sm:justify-between">
                        <h2 class="font-medium text-gray-700">Listes de blogs</h2>

                        <button type="button" class="inline-flex focus:outline-none justify-center mt-2 text-sm font-medium leading-5 text-gray-500 bg-white rounded-lg sm:mt-0 hover:text-gray-600">
                            <span>Date</span>
                        </button>
                    </div>
                    
                    <div class="p-6 space-y-6">
                        <div v-for="blog in blogs" :key="blog.id" class="flex items-center justify-between ">
                            <div class="flex items-center">
                                <img class="w-10 h-10 overflow-hidden bg-gray-100 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                                <span class="mx-3 text-gray-600">{{blog.category}}</span>
                            </div>
                            <span class="font-semibold text-gray-600">{{blog.created_at?.toDate()?.toLocaleDateString('fr-FR', {day: '2-digit', month: 'short',year: 'numeric'}) ?? 'No date' }}</span>

                            <button @click="handleEdit(blog)"
                                    class="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                Éditer
                            </button>
                            
                            <button @click="handleDelete(blog.id)"
                                    class="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    </div>

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  getAuth, 
  signOut 
} from 'firebase/auth'
import { 
  addDoc, 
  collection, 
  doc, 
  getDocs, 
  updateDoc
} from 'firebase/firestore'
import { db } from '../firebase' // Assure-toi que c'est bien initialisé

const router = useRouter()
const auth = getAuth()

// Données réactives
const blogs = ref([]) 
const isEditing = ref(false)
const editingId = ref(null)

const formData = ref({
    id: null,
    category: '',
    title: '',
    content: ''
})

// Déconnexion
const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/')
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error)
  }
}

// Lecture des blogs
const fetchBlogs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'))
    blogs.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    .filter(blog => !blog.deleted_at) // Filtre les blogs supprimés
    console.log('Blogs chargés:', blogs.value)
  } catch (error) {
    console.error('Erreur de chargement:', error)
  }
}


// Création d'un blog
const handleSubmit = async () => {
  try {

    if (!formData.value.category || !formData.value.title || !formData.value.content) {
      alert('Tous les champs doivent être remplis')
      return
    }

    if(isEditing.value && formData.value.id){

        // 🔥 Mise à jour avec l'ID
        await updateDoc(doc(db, "blogs", formData.value.id), {
            category: formData.value.category,
            title: formData.value.title,
            content: formData.value.content,
            updated_at: new Date() // Optionnel : ajoute un timestamp de modification
        });
        alert('Blog mis à jour avec succès !');

    }else{

    const docRef = await addDoc(collection(db, 'blogs'), {
        id: null,
      ...formData.value,
      created_at: new Date()
    })

    console.log('Blog créé avec ID:', docRef.id)
    alert('Blog créé avec succès!')
        
    }

    // Réinitialisation et rechargement
    formData.value = { category: '', title: '', content: '' }
    await fetchBlogs() // Recharge la liste après ajout
    
  } catch (error) {
    console.error("Erreur:", error)
    alert("Une erreur est survenue")
  }
}

// Edition de blog
const handleEdit = (blog) => {
    console.log("Objet blog reçu :", blog);
    // Vérifiez que blog contient category/title/content
    if (!blog.category || !blog.title || !blog.content) {
        console.error("Champs manquants dans l'objet blog !");
        return;
    }
    
     formData.value = {
        id: blog.id,
        category: blog.category,
        title: blog.title,
        content: blog.content
    };
    isEditing.value = true;
    editingId.value = blog.id;
};

// Suppression de Blog
const handleDelete = async (id) => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer ce blog ?'))
    return;

  try {
    await updateDoc(doc(db, 'blogs', id), {
      deleted_at: new Date() // Marque le blog comme supprimé
    })
    formData.value = { category: '', title: '', content: '' }
    alert('Blog supprimé avec succès !')
    await fetchBlogs() // Recharge la liste après suppression
  } catch (error) {
    console.error('Erreur de suppression:', error)
    alert('Une erreur est survenue lors de la suppression du blog')
  }
}

// Charge les blogs au montage du composant
onMounted(() => {
  fetchBlogs()
})
</script>