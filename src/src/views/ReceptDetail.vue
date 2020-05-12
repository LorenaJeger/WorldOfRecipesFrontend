<template>
  <div v-if="card">
    <ReceptCard :info="card" :showcomments="true"/>
  </div>
</template>

<script>
import ReceptCard from "@/components/ReceptCard.vue";
import store from "@/store.js";
import {Recepti} from '@/services';

export default {
  props: ['id'],
  data() {
    return {
      card: null
    }
  },
  async mounted() {
    console.log(this.id);
   this.card= await Recepti.getOne(this.id); 
  },
  name: "recept-detail",
  components: {
    ReceptCard
  },
};
</script>

<style scoped>
  button {
    margin-bottom: 20px
  }
</style>