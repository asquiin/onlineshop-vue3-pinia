<template>
  <div class="for-header">
    <div class="title">
      <p>My restaurant</p>
    </div>

    <div>
        <router-link class="router-link" to="/Shop"> Shop</router-link>
      </div>




      <div class="for-cart">

       <div class="for-quan"> <p>{{ cartItemCount }}</p> </div> 
        <router-link class="router-link" to="/Cart"> Cart</router-link>
      </div>

  </div>
  <router-view></router-view>
</template>
<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

const store = useCartStore();
const cartItemCount = computed(() => store.cartItems.length);
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.for-header {
  width: 100%;
  height: 70px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  margin-bottom: 50px;
}

.router-link {
  text-decoration: none;
  color: white;
  font-size: 30px;
  margin: 30px;
}

.title {
  color: white;
  font-size: 30px;
}

.for-2 {
  /* display: flex; */
  border:1px solid black;
  width: max-content;
  height: 70px;
}

.for-cart{
  display: flex;
}

.for-quan{
  margin-top: 30px;
  margin-right: -32px;
  border-radius: 50%;
  width:20px;
  height: 20px;
  text-align: center;
  background: #d07482;
  color:white;
  border: 1px solid #d07482;
}
</style>
