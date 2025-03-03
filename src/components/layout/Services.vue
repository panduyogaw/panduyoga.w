<template>
  <section id="services" class="relative text-white mt-32">
    <SectionHeader title="My Services" />
    <div
      class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article
        class="px-3 mb-6"
        v-for="element in services"
        :key="element.id"
      >
        <div
          class="mt-8 relative flex flex-col justify-center text-center rounded-3xl border border-secondary dark:bg-[#ffffff29] bg-primary p-6"
          data-aos="fade-up"
          :data-aos-delay="element.id * 100"
        >
          <div class="-mt-8 flex justify-center relative">
            <div class="p-5 bg-primary rounded-full relative shadow-lg">
              <span class="h-[60px] w-[60px] border-2 border-secondary absolute top-2 left-2 rounded-full inline-block z-[5]"></span>
              <img :src="element.icon" alt="services" class="h-10 w-10 relative z-[1]" />
            </div>
          </div>
          <div class="p-6">
            <h3 class="uppercase font-semibold text-secondary text-lg">{{ element.name }}</h3>
            <p class="text-sm leading-5 text-white tracking-wide">{{ element.description }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionHeader from "../UI/SectionHeader.vue";

const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/100/dead1a/google-code.png",
    name: "Web Development",
    description: "Building responsive and high-performance websites using modern technologies like HTML, CSS, JavaScript, and frameworks such as Vue.js and React.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/ios-filled/100/dead1a/content.png",
    name: "Technical Writing",
    description: "Crafting clear and concise technical documentation, tutorials, and blogs to make complex topics easier to understand.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/ios-filled/100/dead1a/smartphone.png",
    name: "Mobile App Development",
    description: "Developing cross-platform mobile applications using technologies like Flutter and React Native for seamless user experiences.",
  },
]);
</script>
