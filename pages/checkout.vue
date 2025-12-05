<template>
  <div class="max-w-7xl mx-auto py-10 px-4">

    <!-- Title -->
    <h1 class="text-3xl font-semibold mb-10">Checkout</h1>

    <!-- GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

      <!-- ⭐ MOBİLDE ÜSTE, DESKTOP'TA SAĞA -->
      <div class="order-1 lg:order-3">
        <div class="border rounded-lg p-6 bg-white shadow">

          <h3 class="text-lg font-semibold mb-4">Shopping cart summary</h3>

          <div
            v-for="(item, index) in cart.items"
            :key="item.id"
            class="flex items-center gap-4 py-4 border-b"
          >
            <img :src="item.thumbnail" class="w-14 h-14 object-contain" />

            <div class="flex-1 text-sm">
              <p class="font-semibold">{{ item.title }}</p>
              <p>{{ item.price }} TL</p>
            </div>

            <div class="flex items-center gap-2">
              <button class="border px-2" @click="cart.decrement(index)">-</button>
              <span>{{ item.quantity }}</span>
              <button class="border px-2" @click="cart.increment(index)">+</button>
            </div>

            <div class="text-sm font-semibold min-w-[70px] text-right">
              {{ (item.price * item.quantity).toFixed(2) }} TL
            </div>
          </div>

          <!-- Subtotal -->
          <div class="flex justify-between mt-4 text-sm">
            <span>Subtotal</span>
            <span>{{ cart.totalPrice.toFixed(2) }} TL</span>
          </div>

          <!-- Shipping -->
          <div class="flex justify-between mt-2 text-sm">
            <span>Shipping</span>
            <span>{{ shippingFee.toFixed(2) }} TL</span>
          </div>

          <!-- Total -->
          <div class="flex justify-between mt-2 text-lg font-semibold">
            <span>Total</span>
            <span>{{ (cart.totalPrice + shippingFee).toFixed(2) }} TL</span>
          </div>
        </div>
      </div>

      <!-- ⭐ SHIPPING + PAYMENT (DESKTOP'TA ORİJİNAL GÖRÜNÜM) -->
      <div class="order-2 lg:order-1 lg:col-span-2 space-y-10">

        <!-- Shipping -->
        <div class="border rounded-lg p-6 bg-white shadow">
          <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
            <span>📦</span> Shipping details
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label class="text-sm font-semibold">First Name *</label>
              <input class="mt-1 w-full border rounded p-2" />
            </div>

            <div>
              <label class="text-sm font-semibold">Last Name *</label>
              <input class="mt-1 w-full border rounded p-2" />
            </div>

            <div class="md:col-span-2">
              <label class="text-sm font-semibold">Email Address *</label>
              <input type="email" class="mt-1 w-full border rounded p-2" />
            </div>

            <div>
              <label class="text-sm font-semibold">Phone Number *</label>
              <input class="mt-1 w-full border rounded p-2" />
            </div>

            <div>
              <label class="text-sm font-semibold">City *</label>
              <select class="mt-1 w-full border rounded p-2">
                <option>Please select</option>
              </select>
            </div>

            <div>
              <label class="text-sm font-semibold">District *</label>
              <select class="mt-1 w-full border rounded p-2">
                <option>Please select</option>
              </select>
            </div>

            <div class="md:col-span-2">
              <label class="text-sm font-semibold">Address *</label>
              <input class="mt-1 w-full border rounded p-2" />
            </div>

          </div>
        </div>

        <!-- Payment -->
        <div class="border rounded-lg p-6 bg-white shadow">
          <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
            <span>💳</span> Payment details
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div class="md:col-span-2">
              <label class="text-sm font-semibold">Card Holder Name *</label>
              <input class="mt-1 w-full border rounded p-2" />
            </div>

            <div class="md:col-span-2">
              <label class="text-sm font-semibold">Card Number *</label>
              <input class="mt-1 w-full border rounded p-2" placeholder="0000 0000 0000 0000" />
            </div>

            <div>
              <label class="text-sm font-semibold">Expiry Date *</label>
              <input class="mt-1 w-full border rounded p-2" placeholder="MM / YY" />
            </div>

            <div>
              <label class="text-sm font-semibold">CVV *</label>
              <input class="mt-1 w-full border rounded p-2" placeholder="XXX" />
            </div>

          </div>

          <button
            class="w-full mt-6 bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
          >
            PAY NOW
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

// SHIPPING FEE — total içinde hesaba katılır 🎉
const shippingFee = 10.50;
</script>