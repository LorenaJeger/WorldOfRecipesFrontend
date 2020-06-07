<template>
  <div class="dodajrecept">
    <div class="row">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
        <div class="card border-info mb-3">
            <h1 class=" card-header text-info text-center mb-5">Dodaj novi recept</h1>  <!--ovo se ne vidi???? -->
            <div class="card-body">
               
                <form @submit.prevent="PostRecipes">
                    <div class="form-group col-md-12">
                        <label for="inputRecipes">Naziv recepta:</label>
                        <input v-model="naziv" type="text" class="form-control" id="inputIme" placeholder="Upišite naziv recepta" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputSastojci">Sastojci:</label>
                        <textarea v-model="sastojci" class="form-control" id="inputSastojci" rows="6" placeholder="Upišite sastojke potrebne za pripremu" required></textarea>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPriprema">Priprema:</label>
                        <textarea v-model="priprema" class="form-control" id="inputPriprema" rows="10" placeholder="Upišite pripremu recepta" required></textarea>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputvrijeme">Vrijeme pripreme:</label>
                        <input v-model="vrijeme" type="text" class="form-control" id="inputvrijeme" placeholder="Upišite vrijeme pripreme recepta">  
                    </div>
                  <div class="form-group col-md-12">
                        <label for="inputvrijeme">Kategorija:</label>
                        <input v-model="kategorija" type="text" class="form-control" id="inputkategorija" placeholder="Upišite kategoriju recepta">  
                    </div>
                      <div class="form-group col-md-12">
                        <label for="inputvrijeme">Slika:</label>
                        <input v-model="slika" type="url" class="form-control" id="inputslika" placeholder="Unesite url slike">  
                    </div>
                    <div class="text-center">
                        <button type="submit" class="button">Postavi recept</button>
                    </div> 
                </form>                              
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
  </div>
</template>

<script>
import store from '@/store.js'
import { Recepti } from '@/services'
export default {
  name: 'DodajRecept',
    data() {
        return {
            e: '',
           naziv: '',
            sastojci: '',
            priprema: '',
            vrijeme: '',
            kategorija: '',
            slika: ''
        }
    },
    methods: {
    async PostRecipes(){

            
        let novi_recept= {
            naziv: this.ime,
            kategorija: this.kategorija,
            sastojci: this.sastojci,
            priprema: this.priprema,
            vrijeme: this.vrijeme_priprema,
            slika: this.slika

      };
       try {
          await Recepti.add(novi_recept);  //pozivamo gore definiranu metodu
        } catch (e) {
          console.error('Greška prilikom snimanja posta', e);
        } finally {
          alert("Uspjesno dodan recept");
        }
      }
}
}
</script>




<style lang ="scss">
.dodajrecept{
    padding-top: 70px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button {
  background-color: rgb(71, 170, 216);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(30, 122, 165);
}
</style>