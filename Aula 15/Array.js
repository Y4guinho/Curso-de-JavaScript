let num = [9,5,3]
num[3]=7
num.push(8)
console.log(`Nosso vetor é o ${num} e temos ${num.length} elementos.`)
console.log(`Os em ordem são ${num.sort()}`)
num.indexOf(9)
console.log(`O número está na vaga ${num.indexOf(9)}`)

/*for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}//mais complicado
for (let pos in num) {
    console.log(num[pos])
}//mais simplificado */