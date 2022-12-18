class Utilisateur {
    constructor(prenom, nom, email) {
        this.prenom = prenom
        this.nom = nom
        this.email = email
    }
    get nomComplet() {
        return this.prenom + ' ' + this.nom
    }
    set nomComplet(value) {
        [this.prenom, this.nom] = value.split(' ')
    }
}

var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com')
console.log(mark.nomComplet);

mark.nomComplet = 'Bill Gates'
console.log(mark.nomComplet)