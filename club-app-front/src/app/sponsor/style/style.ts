export class style {
    static colorcategorie(categorie: string) {
        if (categorie === 'Individuelle')
            return '#800000'
        if (categorie === 'Societé')
            return 'blue'
        if (categorie === 'Startup')
            return 'green'

        else return 'red'
    }
}