<template>
  <header class="w-full bg-white">

    <div class="flex items-center justify-between px-4 py-4 border-b md:hidden">
      <!-- Logo (text olarak bırakıldı) -->
      <NuxtLink to="/" class="text-2xl font-bold text-green-600">
        Logo
      </NuxtLink>

      <div class="flex items-center gap-12">
        <button
          class="text-2xl text-gray-600"
          @click="mobileSearchOpen = !mobileSearchOpen"
        >
          🔍
        </button>

        <NuxtLink to="/checkout" class="relative text-2xl text-gray-700">
          🛒
          <span
            class="absolute -top-1 -right-2 text-[10px] bg-red-600 text-white rounded-full px-[6px] py-[1px]"
          >
            {{ cart.items.length }}
          </span>
        </NuxtLink>

        <button @click="menuOpen = true" class="text-3xl text-gray-700 leading-none">
          ☰
        </button>
      </div>
    </div>

    <div v-if="mobileSearchOpen" class="px-4 py-2 border-b md:hidden bg-gray-50">
      <div class="relative">
        <input
          type="text"
          placeholder="Write the product or category you are looking for"
          class="w-full h-10 bg-white border border-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-blue-400"
        />
        <span
          class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
        >
          🔍
        </span>
      </div>
    </div>

    <div
      v-if="menuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
      @click.self="menuOpen = false"
    >
      <div class="w-64 h-full bg-white shadow-xl p-4 absolute right-0 top-0 animate-slideRight">
        <button @click="menuOpen = false" class="text-3xl text-gray-700 mb-4">
          ✕
        </button>

        <h2 class="text-xl font-semibold text-gray-700 mb-4">Menu</h2>

        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <span>Campaigns</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Personal Care</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Skin Care</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Make - Up</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Mother & Baby</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Men Care</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Healthy Life</span> <span class="text-xl">‹</span>
          </div>
          <div class="flex justify-between items-center border-b pb-3">
            <span>Brands</span> <span class="text-xl">‹</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:block">
      <div
        class="max-w-[1250px] mx-auto grid grid-cols-[200px_1fr_250px] items-center py-4 px-4 gap-6"
      >
        <NuxtLink to="/" class="text-2xl font-bold text-green-600">
          Logo
        </NuxtLink>

        <div class="relative">
          <input
            type="text"
            placeholder="Write the product or category you are looking for"
            class="w-full h-11 bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-blue-400"
          />
          <span
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
          >
            🔍
          </span>
        </div>

        <div class="flex items-center justify-end space-x-4 text-sm">
          <span class="text-gray-500">
            Hello, <span class="font-medium text-gray-700">User User</span>
          </span>

          <div
            class="w-9 h-9 rounded-full bg-gray-200 border flex items-center justify-center text-xs font-semibold text-gray-700"
          >
            PP
          </div>

          <NuxtLink
            to="/checkout"
            class="relative px-3 py-1 bg-gray-50 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
          >
            🛒
            <span
              class="absolute -top-2 -right-[2px] text-[10px] bg-red-600 text-white rounded-full px-[6px] py-[1px] shadow"
            >
              {{ cart?.items?.length || 0 }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <nav>
        <div class="max-w-[1250px] mx-auto px-4 py-3">
          <div
            class="flex justify-between text-[14px] font-semibold text-gray-800 tracking-wide uppercase"
          >
            <a href="#" class="hover:text-teal-600 transition">Campaigns</a>
            <a href="#" class="hover:text-teal-600 transition">Personal Care</a>
            <a href="#" class="hover:text-teal-600 transition">Skin Care</a>
            <a href="#" class="hover:text-teal-600 transition">Make - Up</a>
            <a href="#" class="hover:text-teal-600 transition">Mother & Baby</a>
            <a href="#" class="hover:text-teal-600 transition">Men Care</a>
            <a href="#" class="hover:text-teal-600 transition">Healthy Life</a>
            <a href="#" class="hover:text-teal-600 transition">Brands</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();
const menuOpen = ref(false);
const mobileSearchOpen = ref(false);
</script>

<style>
@keyframes slideRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slideRight {
  animation: slideRight .25s ease-out;
}
</style>