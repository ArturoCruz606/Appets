const agregar_mascota = document.getElementById('confirmar')
const btnAnimalPerro = document.getElementById('perro')
const btnAnimalGato = document.getElementById('gato')
const nombremascota = document.getElementById('nombre')
const razaMascota = document.getElementById('raza')
const edadMascota = document.getElementById('edad')
const pesoMascota = document.getElementById('peso')
const generoMascota = document.getElementById('genero')

var mascotaNueva = {
    tipo: true,
    nombre: "",
    raza: "",
    edad: 0,
    peso: 0,
    genero: true
}


agregar_mascota.addEventListener('click', () => {

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