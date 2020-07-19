import { getHeroById } from './bases/08-imp-exp'

/*
const Promesa = new Promise( (resolve, reject) =>{

    setTimeout( ()=>{
        //resolve();
        //tarea importa el 

        const p1 = getHeroById(2);
        resolve( p1 );
    }, 2000 )

});

Promesa.then( ( heroe )=> {

    console.log('heroe', heroe);

})

*/

const getHerobyIdAsysnc = ( id ) => {

    return new Promise( (resolve, reject) =>{

        setTimeout( ()=> {
            const p1 = getHeroById( id );
            if ( p1 ){
                resolve( p1 );
            }else{
                reject('no se a enconetrado un heroe');
            }
        }, 2000 )
    
    });


}

getHerobyIdAsysnc(10)
    .then( heroe => console.log('heroe', heroe) )
    .catch( err => console.warn( err ) )
