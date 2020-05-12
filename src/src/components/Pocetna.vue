<template>
  <div v-if="!authenticated">
    <div class="container">
      <router-link to="/prijava">
        <button class="btn">Zaronite u svijet recepata</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data () {
    return store;  
  }
}
</script>

<style lang="scss">
body {
    background: url("C:/Users/Lorena/WorldOfRecipes/public/pocetna.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}
.container .btn {
  position: absolute;
  top: 65%;
  left: 49%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(248, 244, 244);
  color: black;
  font-size: 19px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
.container .btn:hover {
  background-color: rgb(66, 198, 250);
  color: white;
}
</style>
     