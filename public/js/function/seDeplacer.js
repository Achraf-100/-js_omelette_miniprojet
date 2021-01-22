import {lieu2,bol} from "../objet/objeet.js"

export let remplirPanier = (a) => {
    lieu2.ingredient.forEach(element => {
        a.mainDroite.contenu.push(element)
        console.log(`${a.nom} a pris un ${element.nom}`)
    });
}



export let remplirBol = (a) =>{
    a.mainDroite.contenu.forEach(element => {
        bol.contenu.push(element)
        console.log(`${element.nom} est mis dans le bol.`) 
    });
    a.mainDroite.contenu = []
} 
