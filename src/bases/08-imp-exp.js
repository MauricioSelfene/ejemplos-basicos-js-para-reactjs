import { heroes } from '../data/heroes'



export const getHeroById = (id) => {
    return heroes.find( ( heroes ) => heroes.id === id);
}

//console.log( getHeroById(1) );

export const getheroesByOwner = ( owner ) => heroes.filter( ( heroes ) => heroes.owner === owner);
//console.log( getheroesByOwner('Marvel') ); 

