import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
});


let Recepti = {

   async add(novi_recept) {
       console.log("dosao sam");
        return Service.post('/recepti', novi_recept);
    },
    async getOne(id) {
        console.log("ulazim u backend")
        let response = await Service.get(`/recepti/${id}`);
        let doc = response.data;
        /* let rezultat = function (item) {
            var fullsastojak= [item.sastojak, ": ", item.kolicina].join("") ; 
            return fullsastojak;
           

        } */
        //let popisSastojaka= doc.sastojci.map(rezultat);
       // let string_popis_sastojaka= popisSastojaka.toString();
        return {
            id: doc._id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
            kategorija: doc.kategorija,
            sastojci: doc.sastojci,
            priprema: doc.priprema,
            vrijeme: doc.vrijeme,
            posted_at: Number(doc.postedAt)
           
        };
    }, 
    async getAll(searchTerm) {
        let options = {};

        if (searchTerm) {
            options.params = {
                _any: searchTerm
            };
        }

        let response = await Service.get('/recepti', options);
        return response.data.map(doc => {
            return {
            id: doc._id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
            };
        });
    },
      
}

export { Service, Recepti }; // exportamo Service za ručne pozive ili Posts za metode.