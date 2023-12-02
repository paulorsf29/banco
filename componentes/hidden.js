export default class Hidden{
    constructor(palpite){
        this.palpite = palpite
    }
    sorteio(){
        let x = Math.floor(Math.random()*10+1)
        return x
    }
    verificacao(){
        let palpit = this.palpite
        let sera = ""
        let ponto = 0
        if (palpit>this.sorteio) {
            sera = "tente um numero menor"
        } else if (palpit< this.sorteio) {
            sera = "tente um numero maior"
        } else if (palpit == this.sorteio) {
            sera = "voce acertou"
            ponto += 1
        }

        return sera +""+ponto
    }
}