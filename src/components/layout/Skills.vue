<template>
    <section class="mt-32" id="skills">
      <SectionHeader title="My Skills" />
      <div class="mt-20 flex justify-center">
        <ul class="flex flex-wrap justify-center items-center">
          <li
            v-for="(element, index) in skills"
            :key="index"
            ref="skillRefs"
            :class="[
              'mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t p-1',
              element.bgGradient
            ]"
          >
            <div class="rounded-[12px] bg-primary p-12 md:p-5 text-center">
              <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
                <Countup v-if="visibleItems[index]" :endVal="element.precentage" :startVal="0" :duration="2" />
                %
              </h3>
              <p class="font-normal text-[16px]" :style="{ color: element.textColor }">
                {{ element.title }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from "vue";
  import SectionHeader from "../UI/SectionHeader.vue";
  
  // Data skills
  const skills = ref([
  
  {
    "precentage": 85,
    "title": "Figma",
    "bgGradient": "to-[#1a1a1a] from-[#76c893]",
    "textColor": "#FFE600"
  },
  {
    "precentage": 87,
    "title": "Flutter",
    "bgGradient": "to-[#1a1a1a] from-[#ff758f]",
    "textColor": "#59c378"
  },
  {
    "precentage": 88,
    "title": "SQL",
    "bgGradient": "to-[#1a1a1a] from-[#5e60ce]",
    "textColor": "#59c378"
  },
  {
    "precentage": 90,
    "title": "PHP",
    "bgGradient": "to-[#1a1a1a] from-[#ff9f1c]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 90,
    "title": "UML",
    "bgGradient": "to-[#1a1a1a] from-[#e63946]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 82,
    "title": "Javascript",
    "bgGradient": "to-[#1a1a1a] from-[#f7df1e]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 85,
    "title": "Vue js",
    "bgGradient": "to-[#1a1a1a] from-[#42b883]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 87,
    "title": "SIT & UAT",
    "bgGradient": "to-[#1a1a1a] from-[#6a4c93]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 85,
    "title": "BRD FSD",
    "bgGradient": "to-[#1a1a1a] from-[#f4a261]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 85,
    "title": "MANUAL TESTING",
    "bgGradient": "to-[#1a1a1a] from-[#264653]",
    "textColor": "#ff9a00"
  },
  {
    "precentage": 80,
    "title": "PROJECT MANAGEMENT",
    "bgGradient": "to-[#1a1a1a] from-[#2a9d8f]",
    "textColor": "#ff9a00"
  }


  ]);
  
  // Refs untuk animasi Countup
  const visibleItems = ref(skills.value.map(() => false));
  const skillRefs = ref([]);
  
  // Fungsi untuk memantau elemen dengan IntersectionObserver
  onMounted(async () => {
    await nextTick(); // Pastikan elemen sudah ter-render sebelum diobservasi
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skillRefs.value.indexOf(entry.target);
            if (index !== -1) {
              visibleItems.value[index] = true;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
  
    skillRefs.value.forEach((el) => {
      if (el) observer.observe(el);
    });
  });
  </script>
  