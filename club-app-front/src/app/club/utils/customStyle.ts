export class customStyle {
    static getTextcolorspecialite(s: string) {
        if (s === 'IT')
            return 'text-primary'
        if (s === 'Music')
            return 'text-danger'
        if (s === 'Sport')
            return 'text-success'
        if (s === 'Santé')
            return 'text-info'

        else return 'text-secondary'
    }
}