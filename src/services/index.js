import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3200/',
    timeout: 1000
});

// naš objekt za sve pozive koji se dotiču `Post`ova
let Recepti = {
    Comments: {
        async add(receptId, comment) {       //za dodavanje komentara
            await Service.Recepti(`/recepti/${receptId}/comments/`, comment);
        },
        async delete(receptId, commentId) {       //metoda za brisanje komentara
            await Service.delete(`/recepti/${receptId}/comments/${commentId}`);
        },
    },
    add(recept) {
        return Service.post('/recepti', recept);
    },
     async getOne(id) {
        let response = await Service.get(`/recepti/${id}`);
        let doc = response.data;
        return {
            id: doc.id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
            comments: (doc.comments || []).map((c) => {      //dodajemo da čita i 'comments' te _id pretvara u id
                c.id = c._id;
                delete c._id;
                return c;
            }),
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
                id: doc.id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
                
            };
        });
    },
     async getNajRecept() {
        let response = await Service.get('/posts_rand');
        let doc = response.data;
        return {
            id: doc.id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
        };
    }, 

async getC(receptId) {
    let options = {};

    if (receptId) {
        options.params = {
            _any: postId,
        };
    }

    let response = await Service.get(`/recepti/${receptId}/comments/`, options);
    return response.data.map((doc) => {
        return {
            comment: doc.comment,
            email: doc.email,
       
        };
    });
},
}

export { Service, Recepti }; // exportamo Service za ručne pozive ili Posts za metode.