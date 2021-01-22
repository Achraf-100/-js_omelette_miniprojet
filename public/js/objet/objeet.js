export let lieu = {
    nom: 'maison',
    personnes : [],

}

export let outil = {
    nom: 'couteau',
    action: 'coupé'
}

export let oignon = {
        nom : 'oignon',
        etats : 'entier',
        prix : 2,
    }
export let oeuf = {
        nom: 'oeuf',
        etats : 'entier',
        prix : 3,
    }
export let epice = {
        nom : 'epice',
        etats : 'moulu',
        prix: 4,
    }
export let fromage = {
        nom: 'fromage',
        etats : 'entier',
        prix : 5,
    }


export let lieu2 = {
    nom: 'epicerie',
    personne: [],
    panier : {
        nom: 'Panier',
        contenu: [],
    },
    ingredient : [
        oignon,oeuf,epice,fromage
    ]
    
}

export let poele = {
    nom : 'Poele',
    contenu : [],
    cuir(){
        setTimeout(()=> {
            this.contenu
            alert('Votre omelette est cuite !')  
        }, 4000)
    }
}

export let bol = {
    etat : 'pas melanger',
    contenu : [],
    melanger(a){
        let newMelange = {
            nom: a,
            etat : 'melanger'
        }
        this.contenu = newMelange
    }
}