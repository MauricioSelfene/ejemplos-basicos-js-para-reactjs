//creacion de objetos y objetos literales 

const persona = {
    nombre: 'Tony',
    apeliido: 'Stack',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 6546245,
        lat: 15.46646,
        lng: 36.25144
    }
}

//console.log( persona.nombre );

const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );