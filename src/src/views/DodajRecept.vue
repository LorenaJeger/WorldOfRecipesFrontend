<template>
  <div class="dodajrecept">
    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="card border-danger mb-3">
            <h1 class=" card-header text-danger text-center mb-5">Dodaj novi recept</h1>  <!--ovo se ne vidi???? -->
            <div class="card-body">

              <div class="col-xs col-md-4">
              <div class="form-group">
            <croppa :width="350" :height="350" v-model="imageData"></croppa>
        <!--  <input v-model="postImageUrl" type="text" id="imageUrl" class="form-control" placeholder="Paste the image URL"/> -->
          </div>
          </div>
               
              <form @submit.prevent="PostRecipes">

                <div class="form-group col-md-12">
                  <label for="inputRecipes">Naziv recepta:</label>
                  <input v-model="ime" type="text" class="form-control" id="inputIme" placeholder="Upišite naziv recepta">
                </div>
              
              
                 <div class="form-group col-md-12">
                  <label for="inputSastojci">Sastojci:</label>
                  <input v-model="sastojci" type="text" class="form-control" id="inputSastojci" placeholder="Upišite sastojke potrebne za pripremu">
                </div>
                 <div class="form-group col-md-12">
                  <label for="inputPriprema">Priprema:</label>
                  <input v-model="priprema" type="text" class="form-control" id="inputPriprema" placeholder="Upišite pripremu recepta">  
                  </div>

                  <div class="form-group col-md-12">
                  <label for="inputvrijeme">Vrijeme pripreme:</label>
                  <input v-model="vrijeme_priprema" type="text" class="form-control" id="inputvrijeme" placeholder="Upišite vrijeme pripreme recepta">  
                  </div>
               
                     
                <div class="text-center">
                  <button type="submit" class="btn btn-danger mt-5">Postavi recept</button>
                </div> 
                </form>                              
             
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DodajRecept',
    data() {
        return {
            errorMessage: '',
            ime: '',
            sastojci: '',
            priprema: '',
            vrijeme_priprema: '',
            autor: '',
            imageData: null
        }
    },
    methods: {
  
    PostRecipes() {
         
        
         var user = firebase.auth().currentUser;
            this.imageData.generateBlob(blobData => {
                if (blobData != null) {
                    let imageName = user.email + "/" + Date.now() + ".png";  
                    
                    storage
                      .ref(imageName)
                      .put(blobData)
                      .then(result => {
                          result.ref.getDownloadURL()
                           .then(url => {
                      if (user) {
                      db.collection("Recepti")
              
              .add({

                 inputIme: this.ime,
                inputSastojci: this.sastojci,
                inputPriprema: this.priprema,
                inputvrijeme: this.vrijeme_priprema,
                autor: user.email,
                url:url

              })
              
             .then(() => {
                                    alert("Uspješno dodan recept!");
                                    if (this.$route.name !== "home")
                                        this.$router.push({ name: "home" }).catch(err => console.log(err))
                                })
                               }else{
                                   //.catch(e => {
                                    console.error("Error adding document: ", error);
                                //});
                               }   
                           })
                           .catch(e => {
                               console.error(e)
                           })
                      })
                      .catch(e => {
                          console.error(e)
                      })
                }
            });
        }
    }
}
</script>




<style lang ="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>