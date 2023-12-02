export default class Funcionalidade{
    constructor(credito,debito,data){
        this.credito = credito
        this.debito = debito
    }
    
    lancaCredito(){
        let credit =parseFloat(this.credito)
        return credit;
    }
    lancarDebito(){
        let debit = parseFloat(this.debito)
        return debit;
    }
    
}