<template>
    <article
      class="w-full sm:max-w-sm overflow-hidden shadow-lg rounded border-secondary dark:bg-[#ffffff29] bg-primary hover:scale-105 transition-transform duration-300"
    >
      <!-- Image Section -->
      <figure>
        <img :src="image || '/src/assets/images/placeholder.png'" :alt="title" class="w-full h-48 object-cover" />
      </figure>
  
      <section class="px-6 py-4">
        <header>
          <h3 class="font-bold text-xl mn-2 text-white">{{ title }}</h3>
        </header>
        <p class="text-gray-300 text-sm">
          {{ description }}
        </p>
      </section>
  
      <!-- Tags Section -->
      <footer class="px-6 pt-4 pb-2">
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="(tag, index) in tags"
            :key="index"
            class="inline-block dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
          >
            # {{ tag }}
          </li>
        </ul>
      </footer>
  
      <!-- Links Section -->
      <div class="px-6 pb-4 flex justify-between items-center">
        <a v-if="liveLink" :href="liveLink" aria-label="View live project" class="text-secondary font-semibold hover:underline text-sm">See Project</a>
        <a v-if="codeLink" :href="codeLink" aria-label="View project code" class="text-secondary font-semibold hover:underline text-sm">See Design</a>
      </div>
    </article>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true,
      default: "Project Title",
    },
    description: {
      type: String,
      required: true,
      default: "A brief description of the project.",
    },
    image: {
      type: String,
      required: true,
      default: "/src/assets/images/placeholder.png",
    },
    tags: {
      type: Array,
      required: false,
      default: () => ["Vue.js", "Tailwind.css"],
    },
    liveLink: {
      type: String,
      required: false,
      default: null,
    },
    codeLink: {
      type: String,
      required: false,
      default: null,
    },
  });
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>