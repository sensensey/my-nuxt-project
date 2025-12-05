<template>
  <section class="w-full">

    <!-- HERO WRAPPER -->
    <div
      class="relative max-w-[1250px] mx-auto px-0 md:px-4 py-0 md:py-16
             min-h-[340px] md:h-[500px] flex items-center overflow-hidden swipe-area"
    >

      <!-- BACKGROUND IMAGE -->
      <img
        :src="slides[current].image"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- OPTIONAL OVERLAY -->
      <div class="absolute inset-0 bg-white/10"></div>

      <!-- 📱 MOBILE CONTENT -->
      <div
        class="absolute bottom-6 px-4 w-full text-center md:hidden"
      >
        <p class="text-xs text-gray-800 uppercase tracking-wide">
          {{ slides[current].subtitle }}
        </p>

        <h1 class="text-2xl font-bold mt-1 text-gray-900">
          {{ slides[current].title }}
        </h1>

        <p class="text-gray-800 text-sm mt-2 leading-relaxed">
          {{ slides[current].description }}
        </p>

        <button
          class="mt-4 bg-pink-600 text-white px-6 py-2 rounded-md text-sm"
        >
          SHOP NOW
        </button>

        <!-- DOTS -->
        <div class="flex justify-center space-x-2 mt-4">
          <span
            v-for="(dot, i) in slides.length"
            :key="i"
            class="w-2 h-2 rounded-full"
            :class="i === current ? 'bg-gray-900' : 'bg-gray-300'"
          ></span>
        </div>
      </div>

      <!-- 🖥 DESKTOP CONTENT (AYNI KALDI) -->
      <div
        class="relative z-20 hidden md:flex flex-row items-center justify-between w-full px-8"
      >
        <div class="max-w-lg ml-10">
          <p class="text-sm text-gray-800 uppercase tracking-wide">
            {{ slides[current].subtitle }}
          </p>

          <h1 class="text-4xl font-bold mt-2 text-gray-900">
            {{ slides[current].title }}
          </h1>

          <p class="mt-4 text-gray-800 leading-relaxed">
            {{ slides[current].description }}
          </p>

          <button class="mt-6 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700">
            SHOP NOW
          </button>

          <div class="flex space-x-2 mt-6">
            <span
              v-for="(dot, i) in slides.length"
              :key="i"
              class="w-3 h-3 rounded-full transition-all"
              :class="i === current ? 'bg-gray-900' : 'bg-gray-300'"
            ></span>
          </div>
        </div>

        <div class="hidden md:block w-[300px]"></div>
      </div>

      <!-- LEFT ARROW (ONLY DESKTOP) -->
      <button
        @click="prevSlide"
        :disabled="isFirst"
        class="absolute left-0 top-1/2 -translate-y-1/2
               text-gray-700 text-6xl font-light
               hover:text-black transition
               disabled:opacity-30 disabled:cursor-not-allowed z-30
               hidden md:block"
      >
        ‹
      </button>

      <!-- RIGHT ARROW (ONLY DESKTOP) -->
      <button
        @click="nextSlide"
        :disabled="isLast"
        class="absolute right-0 top-1/2 -translate-y-1/2
               text-gray-700 text-6xl font-light
               hover:text-black transition
               disabled:opacity-30 disabled:cursor-not-allowed z-30
               hidden md:block"
      >
        ›
      </button>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const slides = [
  {
    subtitle: "Naturals by Watsons",
    title: "The new 2021 collection",
    description:
      "Known as “the miracle plant”, Aloe Vera helps to nourish, moisturize and keep the hair looking smooth.",
    image: "banner-1.jpg",
  },
  {
    subtitle: "",
    title: "",
    description: "",
    image: "banner-2.jpg",
  },
  {
    subtitle: "",
    title: "",
    description: "",
    image: "banner-3.jpg",
  },
];

const current = ref(0);

const isFirst = computed(() => current.value === 0);
const isLast = computed(() => current.value === slides.length - 1);

function nextSlide() {
  if (!isLast.value) current.value++;
}

function prevSlide() {
  if (!isFirst.value) current.value--;
}

// 📱 Swipe (kaydırarak geçme)
onMounted(() => {
  const slider = document.querySelector(".swipe-area");

  if (!slider) return;

  let startX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff < -50) {
      // sola kaydır → sonraki slide
      nextSlide();
    } else if (diff > 50) {
      // sağa kaydır → önceki slide
      prevSlide();
    }
  });
});
</script>