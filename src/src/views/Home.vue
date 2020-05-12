<template>
     <div class="container">
        <Pocetna />
        <Recepti />
        

       
       <button type="button" class="btn btn-light">
            <router-link to="/dodajrecept"> Dodaj novi recept</router-link>
          </button>
          
    </div>
    
  
</template>

<script>
import Pocetna from '@/components/Pocetna.vue';
import Recepti from '@/components/Recepti.vue';
export default {
  
  name: 'home',
  components: {
    Pocetna,
    Recepti
  }
}
</script>

<style lang="scss">
.container {
  padding: 0px;
}
</style>