class heroi{
    constructor(nome, idade, tipo = "Guerreiro"){
        this.nome = nome
        this.idade = idade
        this.tipo = this.capitalize(tipo)
        this.ataque = this.definirTipoAtaque()
    }
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    definirTipoAtaque(){
        switch (this.tipo) {
            case "Guerreiro":
                return "Espada";
            case "Mago":
                return "Magia";
            case "Monge":
                return "Artes Marciais";
            case "Ninja":
                return "Shuriken";
            default:
                console.log("A classe escolhida não existe, tente novamente!");
                return "Ataque indefinido";
        }
    }
    atacar(){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let garen = new heroi("Garen", 18)
garen.atacar()
let ahri = new heroi("Ahri", 21, "MAGO")
ahri.atacar()
let leeSin = new heroi("Lee Sin", 30, "MoNgE")
leeSin.atacar()
let zed = new heroi("Zed", 25, "ninja")
zed.atacar()
let matheus = new heroi("Matheus", 20, "Atirador")
matheus.atacar()