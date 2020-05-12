<template>
    <div v-if="store.authenticated">
        
        <div @click="gotoDetails(card)" :key="card.id" v-for="card in cards">
            <ReceptCard :info="card" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import { Recepti } from '@/services';
import ReceptCard from '@/components/ReceptCard.vue';
import store from '@/store.js';
export default {
    data() {
        return {
            store,
            cards: [],
            
        };
    },
    watch: {
        'store.searchTerm': _.debounce(function(val) {
            this.fetchRecepti(val);
        }, 500)
    },
    created() {
        this.fetchRecepti();
    },
    name: 'Recepti',
    methods: {
        async fetchRecepti() {
           // term = term || store.searchTerm;
            this.cards = await Recepti.getAll();
            
        },
        gotoDetails(card) {
            console.log("push")
            this.$router.push({ path: `recepti/${card.id}` });
        }
    },
    components: {
        ReceptCard
    }
};
</script>

<style scoped>
button {
    margin-bottom: 20px;
}
.najpost {
    border-style: dashed
}
</style>