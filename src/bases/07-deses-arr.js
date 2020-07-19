//desestructuracion
//asignacion desestructurante
const personajes = ['Goku', 'Vegeta', 'trunks'];

const [, , p1 ] = personajes;

console.log( p1 );
 

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornarArreglo();
console.log( letras, numeros );

//tara

const useState = ( valor ) => {
    return [ valor, ()=> { console.log('Hola mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();