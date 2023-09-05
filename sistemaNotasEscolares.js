/* criando sistema de notas de escolares*/

let score = 75

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota Inválida"
    }

    return scoreFinal
}

console.log(getScore(75))
console.log(getScore(-1))
console.log(getScore(45))
console.log(getScore(95))
console.log(getScore(82))
console.log(getScore(73))
