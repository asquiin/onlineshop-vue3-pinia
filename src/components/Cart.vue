<template>
  <div class="main-wrapper">

    <div class="cart">

      <div v-for="(cartItem, index) in cartItems" :key="index" class="cart-item">

        <div class="item">
          <div class="pic-div"> <img :src="cartItem.image" class="for-img" :alt="cartItem.name" /></div>

          <ul class="item-content">

            <li> {{ cartItem.name }} </li>
            <li> {{ cartItem.price }}$ </li>
            <li>
              <div class="quantity">
                <button @click="increaseQuantity(index)">+</button>
                <p>{{ cartItem.quantity }}</p>
                <button @click="decreaseQuantity(index)">-</button>
              </div>
            </li>
            <div class="for-btn"><button class="btn" @click="removeFromCart(index)">Remove</button></div>

          </ul>

        </div>
      </div>

      <div class="for-total">
        <h1>Total:</h1>
        <p>{{ calculateTotal(cartItems) }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

const cartItems = computed(() => useCartStore().cartItems);

const removeFromCart = (index) => {
  const cartStore = useCartStore();
  cartStore.removeFromCart(index);
};

const increaseQuantity = (index) => {
  const cartStore = useCartStore();
  cartStore.increaseQuantity(index);
};

const decreaseQuantity = (index) => {
  const cartStore = useCartStore();
  cartStore.decreaseQuantity(index);
};

const calculateTotal = (cartItems) => {
  let total = 0;
  for (const cartItem of cartItems) {
    total += cartItem.price * cartItem.quantity;
  }
  return total;
};
</script>

<style scoped>
*{
 font-family:Inter;
}
.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart {
  width: max-content;
  padding-left: 100px;
  padding-right: 100px;
  border: 1px solid #ccc;
  justify-content: center;
}

.item {
  border: 1px solid #ddd;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  width: 300px;
}

.quantity {
  display: flex;
  align-items: center;
  width: max-content;
}

.for-total {
  text-align: center;
}

.for-img {
  width: 130px;
  height: 150px;
}

.btn {
  margin-top: 10px;
  padding: 8px 16px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #ff8396;
}

.btn:hover {
  background-color: #FFB6C1;
}

.item-content{
  list-style: none;
  padding: 10px;
}

.item-content li:first-child{
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}

.item-content li:nth-child(2){
  text-align: center;
  color:grey;
  margin: 10px;
}

.item-content li:nth-child(3){
  margin-left: 10px;
}

.for-btn{
  display: flex;
  justify-content: center;
}

</style>
