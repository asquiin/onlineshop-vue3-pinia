import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  function addToCart(item) {
    const existingItem = cartItems.value.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({ ...item, quantity: 1 });
    }
  }

  function removeFromCart(index) {
    cartItems.value.splice(index, 1);
  }

  function increaseQuantity(index) {
    cartItems.value[index].quantity++;
  }

  function decreaseQuantity(index) {
    if (cartItems.value[index].quantity > 1) {
      cartItems.value[index].quantity--;
    }
  }

  return { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems };
});
