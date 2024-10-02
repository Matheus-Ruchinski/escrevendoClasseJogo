class heroi{
    // método cronstrutor a qual recebe os parâmetros e tem como padrão a tipo Guerreio, caso o usuário não infornme
    constructor(nome, idade, tipo = "Guerreiro"){
        // Declarando variáveis e atribuido valor a elas 
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ""
        // O método construtor chama a função tipo de ataque para atribuir o ataque que pode ser realizado pela classe(Guerreiro, Mago, Monge, Ninja)
        this.tipoAtaque(tipo)
    }
    tipoAtaque(tipo){
        // Estrutura de decisão, irá verificar a classe do herói
            if (tipo == "Guerreiro"){
                this.ataque = "Espada"
                // quando entrar em um dos if, será atribuido o valor na variável ataque
                } else if (tipo == "Mago"){
                    this.ataque = "Magia"
                    } else if (tipo == "Monge"){
                        this.ataque = "Artes Marciais"
                        } else if (tipo == "Ninja"){
                            this.ataque = "Shuriken"
                            } else {
                                // Caso o usuário digite uma classe errado, entrara no else e informará ao usuário sobre o erro
                                console.log("A classe escolhida não existe, Tente novamente!")
                                this.ataque = "Ataque indefinido"
                                }
        return this.ataque
    }
    atacar(){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
// Instanciando objetos na classe heroi
let garen = new heroi("Garen", 18)
garen.atacar()
let ahri = new heroi("Ahri", 21, "Mago")
ahri.atacar()
let leeSin = new heroi("Lee Sin", 30, "Monge")
leeSin.atacar()
let zed = new heroi("Zed", 25, "ninja")
zed.atacar()
let matheus = new heroi("Matheus", 20, "Atirador")
matheus.atacar()