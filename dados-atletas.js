class Atleta {
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria(){

        let idade = this.idade

        if(idade >= 9 && this.idade <= 11){
            return "Infantil"
        }

        if (idade >= 12 && idade <= 12){
            return "Juvenil"
        }

        if (idade >= 14 && idade <= 15){
            return "Intermediário"
        }

        if (idade >= 16 && idade <= 30){
            return "Adulto"
        }

        return "Sem categoria"
    }

    calculaIMC(){

        let peso = this.peso
        let altura = this.altura
        let imc = peso / (altura * altura)

        return imc
    }

    calculaMediaValida(){

        let notas = this.notas.sort()
        let notasOrdenadas = []

        // todas as notas estao ordenadas aqui
        if (notas){
            notasOrdenadas = notas.sort(function(a, b){
                return b - a
            })
        }

        // Elimina a maior e a menor nota
        let notasValidas = notasOrdenadas.slice(1, 4)

        //soma das notas validas
        let soma = notasValidas.reduce(function(total, atual){
            return total + atual
        }, 0)

        //media das notas dos atletas
        let media = soma / notasValidas.length

        return media
    }

    obtemNomeAtleta(){
        return this.nome
    }

    obtemIdadeAtleta(){
        return this.idade
    }

    obtemPesoAtleta(){
        return this.peso
    }

    obtemNotasAtleta(){
        return this.notas
    }

    obtemCategoria(){
        return this.calculaCategoria()
    }

    obtemIMC(){
        return this.calculaIMC()
    }

    obtemMediaValida(){
        let media = this.calculaMediaValida()

        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`)
        console.log(`Peso: ${this.peso}`)
        console.log(`Altura: ${this.altura}`)
        console.log(`Notas: ${this.notas.join(',')}`);
        console.log(`Média Válida: ${media}`);
    }
}

const atletas = [
  { nome: "Batman", idade: 46, peso: 67, altura: 1.66, notas: [80, 95, 88, 100, 60] },
  { nome: "Homem de Ferro", idade: 14, peso: 102, altura: 1.85, notas: [90, 92, 85, 70, 100] },
  { nome: "Hulk", idade: 12, peso: 450, altura: 2.50, notas: [60, 80, 90, 95, 100] },
  { nome: "Flash", idade: 9, peso: 75, altura: 1.80, notas: [100, 98, 95, 97, 99] },
  { nome: "Homem-Aranha", idade: 26, peso: 80, altura: 1.70, notas: [10, 9.34, 8.42, 10, 7.88] },
];

let listaDeAtletas = []

// aqui crio cada atleta e armazeno dentro da lista de atletas
atletas.forEach(function(atleta){
    let atletaObjeto = new Atleta(atleta.nome, atleta.idade, atleta.peso, atleta.altura, atleta.notas)
    listaDeAtletas.push(atletaObjeto)
})


//                TESTES

//console.log(listaDeAtletas)
//console.log(listaDeAtletas[listaDeAtletas.length -1].calculaIMC())
//listaDeAtletas[listaDeAtletas.length -1].calculaMediaValida()
//console.log(listaDeAtletas[0].obtemNomeAtleta())
//console.log(listaDeAtletas[listaDeAtletas.length -1].obtemNotasAtleta())
//console.log(listaDeAtletas[4].obtemCategoria())
//console.log(listaDeAtletas[4].obtemIMC())
//listaDeAtletas[4].obtemMediaValida()