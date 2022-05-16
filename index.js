const agregar_mascota = document.getElementById('siguiente')

const nombre_mascota = document.getElementById('nombre')
const raza_mascota = document.getElementById('raza')
const edad_mascota = document.getElementById('edad')
const peso_mascota = document.getElementById('peso')
const genero_mascota = document.getElementById('genero')

agregar_mascota.addEventListener('click', () => {
    const mascota = {
        nombre: nombre_mascota.value,
        raza: raza_mascota.value,
        edad: edad_mascota.value,
        peso: peso_mascota.value,
        genero: genero_mascota
    }
    console.table(mascota)
})