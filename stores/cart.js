import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  // Add Product to Cart
  function addToCart(product) {
    const found = items.value.find((i) => i.id === product.id);

    if (found) {
      found.quantity++;
    } else {
      items.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail, // image field
        quantity: 1,
      });
    }
  }

  // Increase Quantity
  function increment(index) {
    items.value[index].quantity++;
  }

  // Decrease Quantity — remove item if quantity becomes 1
  function decrement(index) {
    if (items.value[index].quantity > 1) {
      items.value[index].quantity--;
    } else {
      // quantity = 1 → remove from cart
      items.value.splice(index, 1);
    }
  }

  // Total price of all cart items
  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
  );

  return {
    items,
    addToCart,
    increment,
    decrement,
    totalPrice,
  };
});