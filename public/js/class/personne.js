import {personnage} from "../main.js"

export class Personne{
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.mainDroite = mainDroite,
        this.mainGauche = mainGauche
    }
    seDeplacer(lieu){
        this.lieu = lieu
        console.log(`${this.nom} est actuellement à la ${this.lieu.nom}`)
    }
    payerArticle(panier){
        panier.forEach(element => {
            personnage.argent -= element.prix
        });    
    }
    couper(ingredient, outil){
        if (outil.nom == 'couteau') {
            ingredient.etats = 'couper'
        }
    }    
}