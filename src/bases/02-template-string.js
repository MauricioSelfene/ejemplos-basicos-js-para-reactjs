//tamplate string

const nombre   = 'Mauricio';
const apellido = 'Selfene';

const nombreCompleto = ` ${ nombre + ' ' + apellido } `

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log( `Este es un texto de ${getSaludo(nombre)} `);