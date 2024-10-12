

let vitorias = 1000
let derrotas = 250


function calcRank(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas

    if (saldoVitorias<=10){
        rank = "Ferro"
    }else if(saldoVitorias<=20){
        rank = "Bronze"
    }else if(saldoVitorias<=50){
        rank = "Prata"
    }else if(saldoVitorias<=80){
        rank = "Ouro"
    }else if(saldoVitorias<=90){
        rank = "Diamante"
    }else if(saldoVitorias<=100){
        rank = "Lendário"
    }else if(saldoVitorias>101){
        rank = "Imortal"
    }
    
    return [saldoVitorias, rank]
}

let [saldoVit, classificacao] = calcRank(vitorias, derrotas)

console.log(`O Herói tem um saldo de ${saldoVit} e está no nível de ${classificacao}`)
