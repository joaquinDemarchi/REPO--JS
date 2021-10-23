//utilizare emascrotp 6

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey se pudo realizar la promesa!');
        } else {
            reject ('Upss, no se pudo realizar la promesa');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            },2000)
        } else {
            const error = new Error ('UPSSS');
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    })


Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Array of results',response)
    })
    .catch(err => console.error(err));




    const pruebaLibreDePromise = () => {
        return new Promise ((resolve,reject) => {
            if (true){
                resolve('BIEN');
            } else {
                reject('MAL');
            }
        });
    }

    pruebaLibreDePromise()
    .then(response => console.log(response))
    .catch(reject => console.log(reject))