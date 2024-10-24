function calcularSaldos(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro"
    } else if (vitorias <= 20) {
        return "Bronze"
    } else if (vitorias <= 50) {
       return "Prata" 
    } else if (vitorias <= 80) {
        return "Ouro"
    } else if (vitorias <= 90) {
        return "Diamante"
    } else if (vitorias <= 100) {
        return "lendário"
    } else {
        return "imortal"
    }
}        
saldoVitorias = calcularSaldos(25, 10)
let nivel = calcularNivel(10)
console.log("O héroi tem saldo de",saldoVitorias, "e está no nível de", nivel)

//repo clonado