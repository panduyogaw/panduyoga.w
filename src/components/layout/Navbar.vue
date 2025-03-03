<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
      <img src="@/assets/p2.png" alt="Logo" class="h-20 w-auto" />



      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen">
            <Icon icon="material-symbols:close-rounded" />
          </span>
          <span
            v-else
            class="text-5xl md:text-primary text-white dark:text-white"
          >
            <Icon icon="duo-icons:menu" />
          </span>
        </button>
      </div>

      <!-- Navigation Menu -->
      <nav
        :class="[
          'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
          isMenuOpen ? 'flex' : 'hidden'
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
        >
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="block transition ease-linear md:text-lg lg:text-xl font-bold text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
              @click="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="ml-10 hidden md:block">
          <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-4xl text-dark"/>
          <Icon v-else icon="line-md:sunny-outline" class="text-4xl text-yellow-400"/>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Mobile menu state
const isMenuOpen = ref(false);

// Navigation items
const Menu = ref([
  { name: "Service", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Why Me", href: "#whyme" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

// Scroll behavior for smooth navigation
const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Dark mode state
const isDarkMode = ref(localStorage.getItem("theme") === "dark");

// Function to toggle dark mode
const toggleDarkMode = () => {
  const html = document.documentElement;
  
  if (isDarkMode.value) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  isDarkMode.value = !isDarkMode.value;
};

// Apply saved theme on component mount
onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>
