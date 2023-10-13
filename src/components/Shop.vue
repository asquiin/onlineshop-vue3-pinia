<template>
  <div class="shop">
    <div class="for-btns">
      <button class="btn category" @click="filterItems('Drinks')"> Drinks </button>
      <button class="btn category" @click="filterItems('Salads')"> Salads</button>
      <button class="btn category" @click="filterItems('Dishes')"> Dishes </button>
    </div>

    <div class="center-div">
      <div class="main-wrapper">
        <div v-for="(item, index) in filteredItems" :key="index" class="item">
          <img :src="item.image" class="for-img" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}$</p>
          <button class="btn" @click="addToCart(item)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
import { items } from "./Data/items.js";

const filteredItems = ref(items);

const addToCart = (item) => {
  cartStore.addToCart(item);
};

const filterItems = (category) => {
  if (category === 'Drinks') {
    filteredItems.value = items.filter((item, index) => index >= 0 && index <= 4);
  } else if (category === 'Salads') {
    filteredItems.value = items.filter((item, index) => index >= 5 && index <= 9);
  } else if (category === 'Dishes') {
    filteredItems.value = items.filter((item, index) => index >= 10 && index <= 14);
  }
};
</script>


<style scoped>
.center-div {
  display: flex;
  justify-content: center;
  width: 100%;
}

.main-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  padding: 30px;
  margin: 0 auto;
}

.shop {
  padding: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.for-img {
  width: 160px;
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

.btn:hover{
  background-color: #FFB6C1;
}

.for-btns{
  display: flex;

  justify-content: center;
  align-items: center;
}

.category{
  margin: 10px;
}

</style>
