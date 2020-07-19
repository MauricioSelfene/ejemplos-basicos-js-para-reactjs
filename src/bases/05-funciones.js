//funciones JS


const saludar1 = function( nombre ){
    return `hola, ${ nombre }`
}

console.log( saludar1( 'mauricio' ) );

const saludar2 = ( nombre ) => {
    return `hola, ${ nombre } esto es una funciones de flecha =>`
}

console.log( saludar2( 'mauricio' ) );

const saludar3 = ( nombre ) => `hola, ${ nombre } `;

console.log( saludar3('Mauricio') );


const saludar4 = ()=>  `Hola mundo`;

console.log( saludar4() );


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi123'
})
     

const user = getUser();
console.log( user );


//tarea
//transformar a una funcion de flecha
//tiene que retornar un objeto implicito
//pruebas
/*
function getUsuarioActivo( nombre ){
    return{
        uid: 'ABC567',
        username: 'El_Papi567'
    }
};

const usuarioActivo = getUsuarioActivo('Mauricio');
console.log( usuarioActivo );
*/
//respuesta
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Mauricio');
console.log( usuarioActivo );
