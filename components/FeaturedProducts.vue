<template>
  <div class="py-10">

    <div class="max-w-[1250px] mx-auto px-4">

      <!-- TITLE WITH LINES -->
      <div class="flex items-center justify-center mb-8">
        <div class="flex-1 border-t border-gray-300"></div>

        <h2 class="mx-4 text-xl font-semibold text-cyan-600">
          Featured products
        </h2>

        <div class="flex-1 border-t border-gray-300"></div>
      </div>

      <!-- PRODUCT GRID (MOBILE 2 SÜTUN / DESKTOP 4 SÜTUN) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        
        <!-- PRODUCT CARD -->
        <div
          v-for="product in products"
          :key="product.id"
          class="border rounded-xl shadow hover:shadow-lg transition p-3 md:p-4 relative group"
        >
          <!-- Image -->
          <img
            :src="product.thumbnail"
            class="w-full h-28 md:h-48 object-contain mx-auto"
          />

          <!-- Hover Action Bar (ONLY DESKTOP) -->
          <div
            class="absolute bottom-16 left-0 right-0 bg-black bg-opacity-80 text-white py-3 
                   opacity-0 group-hover:opacity-100 transition 
                   hidden md:flex items-center justify-around"
          >
            <!-- Quick View -->
            <button
              class="flex items-center gap-2 hover:text-purple-300"
              @click="openModal(product)"
            >
              👁 Quick View
            </button>

            <div class="border-r h-6 border-white"></div>

            <!-- Add -->
            <button
              class="flex items-center gap-2 hover:text-purple-300"
              @click="add(product)"
            >
              🛒 Add
            </button>
          </div>

          <!-- Product Info -->
          <div class="mt-3 md:mt-4">
            <p class="font-semibold text-sm md:text-lg">{{ product.price }} TL</p>
            <p class="text-gray-700 text-xs md:text-sm line-clamp-2">
              {{ product.title }}
            </p>
          </div>

          <!-- ADD BUTTON (ONLY MOBILE) -->
          <button
            @click="add(product)"
            class="mt-3 w-full bg-pink-600 text-white py-2 rounded-md text-xs md:hidden"
          >
            🛒 ADD
          </button>

        </div>
      </div>
    </div>

    <!-- MODAL (Aynen bıraktım, dokunulmadı) -->
    <div
      v-if="selectedProduct"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
    >
      <div class="relative bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">

        <div class="flex flex-col md:flex-row">
          
          <!-- Large Image -->
          <div class="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
            <img :src="selectedProduct.thumbnail" class="max-h-80 object-contain" />
          </div>

          <!-- Right side -->
          <div class="md:w-1/2 p-6">
            <h2 class="text-2xl font-semibold mb-2">{{ selectedProduct.title }}</h2>
            <p class="text-xl text-gray-700 font-bold mb-4">{{ selectedProduct.price }} TL</p>

            <p class="text-gray-600 mb-4">
              {{ selectedProduct.description }}
            </p>

            <button
              class="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
              @click="add(selectedProduct)"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <!-- Close Button -->
        <button
          @click="selectedProduct = null"
          class="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";

// Pinia Cart Store
const cart = useCartStore();

// Data
const products = ref([]);
const selectedProduct = ref(null);

// Open modal
function openModal(product) {
  selectedProduct.value = product;
}

// Add to cart
function add(product) {
  cart.addToCart(product);
}

// Fetch products from API
onMounted(async () => {
  const res = await fetch("https://dummyjson.com/products?limit=4");
  const data = await res.json();
  products.value = data.products;
});
</script>