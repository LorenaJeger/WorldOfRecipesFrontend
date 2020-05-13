import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3200/',
    timeout: 1000
});

// naš objekt za sve pozive koji se dotiču `Post`ova
let Recepti = {

    add(recept) {
        return Service.post('/recepti', recept);
    },
     async getOne(id) {
         console.log("ulazim")
        let response = await Service.get(`/recepti/${id}`);
        let doc = response.data;
        return {
            id: doc._id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
           /*  comments: (doc.comments || []).map((c) => {      //dodajemo da čita i 'comments' te _id pretvara u id
                c.id = c._id;
                delete c._id;
                return c;
            }), */
        };
    }, 
    async getAll(searchTerm) {

        let response = await Service.get('/recepti');
        return response.data.map(doc => {
            return {
            id: doc._id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
                
            };
        });
    }
      
}

export { Service, Recepti }; // exportamo Service za ručne pozive ili Posts za metode.