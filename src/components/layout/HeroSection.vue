<template>
  <section
    data-aos="zoom-in"
    class="flex justify-center items-center dark:text-white min-h-screen mt-15 lg:mt-15"
  >
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>
    <main
      class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8"
    >
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋 Hi, I'm
          <span
            class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
            >Pandu</span
          >
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          I am a recent graduate in Information Systems from Universitas
          Pembangunan Jaya with experience in software development and quality
          assurance. I previously worked as a Junior Mobile Developer at PT
          Quetra Asia Kladestin, where I was involved in developing
          Android/iOS-based applications. Additionally, I gained experience as a
          Quality Assurance Specialist at PT Amarta Media Riset Teknologis,
          ensuring software quality through thorough testing. My educational
          background and professional experience have equipped me with strong
          analytical skills, an understanding of system workflows, and the
          ability to bridge technical requirements with business goals. I am
          open to various opportunities in the tech industry—let’s connect and
          discuss how I can contribute to your team!
        </p>
        <div class="mt-6 flex justify-center lg:justify-start">
          <Button label="Hire me" />
          <a
            href="/public/cvme.pdf" download="cvme.pdf"
            class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border-secondary hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary"
          >
            <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>
      <aside
        class="container flex justify-center lg:justify-end mt-20 lg:mt-0 items-center flex-wrap"
      >
        <figure
          class="card relative m-[30px] md:w-[420px] md:h-[420px] md:before:w-[450px] md:before:h-[450px] w-[280px] h-[350px] before:w-[350px] before:h-[350px] before:border-[25px] before:border-primary before:shadow-[7px_7px_21px_primary,_-7px_-7px_21px_primary] dark:before:border-secondary dark:before:shadow-[7px_7px_21px_secondary,_-7px_-7px_21px_secondary]"
        >
          <div
            class="relative w-full h-full bg-cover transform translate-x-[10px] translate-y-[10px]"
          >
            <img
              src="@/assets/images/me.png"
              alt="Hero picture"
              class="max-w-1/2"
              loading="lazy"
            />
          </div>
        </figure>
      </aside>
    </main>
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.2"
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
  </section>
</template>
<script setup>
import Button from "@/components/UI/Button.vue";
</script>
<style scoped>
.container .card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
}
.container .card:nth-of-type(1)::before {
  filter: url(#wavy1);
}
</style>
