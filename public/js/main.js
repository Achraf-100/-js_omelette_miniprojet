import {Personne} from "./class/personne.js"
import {lieu, lieu2, outil,poele,bol} from "./objet/objeet.js"
import {remplirPanier,remplirBol} from "./function/seDeplacer.js"

export let personnage = new Personne('Achraf','',20,'','');

personnage.seDeplacer(lieu)

personnage.seDeplacer(lieu2)

personnage.mainDroite = lieu2.panier

delete lieu2.panier

console.log(personnage.mainDroite)

console.log(`${personnage.nom} a pris un ${personnage.mainDroite.nom}`);

remplirPanier(personnage)
personnage.payerArticle(personnage.mainDroite.contenu)

console.log(`${personnage.nom} lui reste ${personnage.argent} euros`)

personnage.seDeplacer(lieu)

remplirBol(personnage)

personnage.seDeplacer(lieu2)

personnage.mainDroite = ''
console.log("Le panier a été remis et désinfecter !")

personnage.seDeplacer(lieu)

console.log(`${personnage.nom} a la dalle, il arrive enfin devant sa cuisine et est pret a attaquer cette omelette`)

personnage.mainGauche = outil
console.log(`${personnage.nom} prend un ${personnage.mainGauche.nom} dans la boite a outil.`)

bol.contenu.forEach(element => {
    if (element.etats == 'entier') {
        personnage.couper(element,personnage.mainGauche)
    }
});

bol.melanger('omelette')

console.log(`le nouveau mélange : ${bol.contenu.nom}`)

console.log(`Cuissons l'${bol.contenu.nom} maintenant pendant 4 secondes dans la ${poele.nom}`);

poele.contenu.push(bol.contenu)
bol.contenu = []

poele.cuir()