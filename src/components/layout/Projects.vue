<template>
    <section id="projects" class="relative w-11/12 px-16 mx-auto">
        <SectionHeader title="My Projects" />
        <!-- Custom Nav Buttons -->
        <button class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-left" class="font-bold text-3xl"/>
        </button>
        <button class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-right" class="font-bold text-3xl"/>
        </button>
        <!-- Swiper Component -->
        <swiper 
            :effect="'coverflow'"
            grabCursor
            centeredSlides
            :slidesPerView="'auto'"
            :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }"
            :navigation="navigationOptions"
            loop
            pagination
            :modules="[EffectCoverflow, Navigation]"
            class="max-w-full mt-32"
        >
            <swiper-slide class="max-w-[300px] md:max-w-[400px] lg:max-w-[500px]" v-for="(project, index) in projects" :key="index">
                <ProjectCard 
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                    :tags="project.tags"
                    :liveLink="project.liveLink"
                    :codeLink="project.codeLink"
                />
            </swiper-slide>
        </swiper>
    </section>
 </template>
 
 <script setup>
 import SectionHeader from "../UI/SectionHeader.vue";
 import ProjectCard from "../UI/ProjectCard.vue";
 import 'swiper/css';
 import 'swiper/css/effect-coverflow';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { EffectCoverflow, Navigation } from 'swiper/modules';
 import { ref } from 'vue';
 
 const navigationOptions = {
     prevEl: '.swiper-prev',
     nextEl: '.swiper-next',
 };
 
 const projects = ref([
     {
         title: 'E-Procurement Website',
         description: 'Building procurement website for company requirement and help it for digital transformations',
         image: '/src/assets/images/eproc.png',
         tags: ['HTML', 'Tailwind.css', 'PHP', 'Laravel'],
         liveLink: '/src/assets/images/eproc.png',
         codeLink: "https://www.canva.com/design/DAGX2DUUcjE/5VtwSEtcAWQv-KjARYHL8w/edit?utm_content=DAGX2DUUcjE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
     },
     {
         title: 'CRM Mobile App',
         description: 'Prototype project to Develop an Customer Relationship Management for barber bisnis',
         image: '/src/assets/images/crm.png',
         tags: ['FLUTTER', 'Dart'],
         liveLink: '/src/assets/images/crm.png',
         codeLink: "https://drive.google.com/drive/u/0/folders/1jobGZDhwkHJDsk4FSYrQ6Vejk-kajQ9U",
     },
     {
         title: 'Company Profile',
         description: 'Building company profile website using goddadysites',
         image: '/src/assets/images/compro.png',
         tags: ['Godadysites', 'Plug-ins'],
         liveLink: '/src/assets/images/compro.png',
         codeLink: "https://pandhutama.godaddysites.com/home",
     },
 ]);
 </script>
 
 <style>
 .swiper-button-prev,
 .swiper-button-next {
     cursor: pointer;
     background-color: rgba(0, 0, 0, 0.5);
     border-radius: 50%;
     width: 40px;
     height: 40px;
     display: flex;
     align-items: center;
     justify-content: center;
 }
 
 .swiper-button-prev::after,
 .swiper-button-next::after {
     color: white;
     font-size: 24px;
 }
 
 .swiper-slide {
     display: flex;
     justify-content: center;
     align-items: center;
 }
 </style>