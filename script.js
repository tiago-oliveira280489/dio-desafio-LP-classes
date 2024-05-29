// Declarando a classe herói
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""

        if (this.tipo == "mago"){
            ataque = "magia"
        }else if (this.tipo == "guerreiro"){
            ataque = "espada"
        }else if (this.tipo == "monge"){
            ataque = "artes marciais"
        }else if (this.tipo == "ninja"){
            ataque = "shuriken"
        }else{
            return "erro/inválido"
        }

        return `O ${this.tipo} atacou usando ${ataque}`
    }
}

let heroi1 = new Heroi("Mago da montanha", 100, "mago")
let heroi2 = new Heroi("Monge sonolento", 90, "monge")
let heroi3 = new Heroi("Guerreiro estrelar", 50, "lutador")

console.log(heroi1.atacar())
console.log(heroi2.atacar())
console.log(heroi3.atacar())