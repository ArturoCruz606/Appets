const agregar_mascota = document.getElementById('confirmar')

var tipoAnimal = ''

const btnAnimalPerro = document.getElementById('perro')
const btnAnimalGato = document.getElementById('gato')
btnAnimalPerro.addEventListener('click', () => {
    tipoAnimal = 'perro'
    console.log(tipoAnimal)
})
btnAnimalGato.addEventListener('click', () => {
    tipoAnimal = 'gato'
    console.log(tipoAnimal)
})
const nombre_mascota = document.getElementById('nombre')
const raza_mascota = document.getElementById('raza')
const edad_mascota = document.getElementById('edad')
const peso_mascota = document.getElementById('peso')

let tipoGenero = ''

const impGeneroMacho = document.getElementById('macho')
const impGeneroHembra = document.getElementById('hembra')

agregar_mascota.addEventListener('click', () => {
    if (impGeneroHembra.checked == true)
        tipoGenero = 'hembra'
    console.log(tipoGenero)
    
    if(impGeneroMacho.checked == true)
        tipoGenero = 'macho'
    console.log(tipoGenero)
    const mascota = {
        nombre: nombre_mascota.value,
        animal: tipoAnimal,
        raza: raza_mascota.value,
        edad: edad_mascota.value,
        peso: peso_mascota.value,
        genero: tipoGenero
    }
    

    console.log(mascota)

    const url = 'https://localhost:3000/animales'

    axios.post(url, {
        nombre: nombre_mascota,
        animal: tipoAnimal,
        raza: raza_mascota,
        edad: edad_mascota,
        peso: peso_mascota,
        genero: tipoGenero
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
})