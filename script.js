const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const botaoso = document.getElementById("botaoso")
const botaosu = document.getElementById("botaosu")
const botaomu = document.getElementById("botaomu")
const botaodi = document.getElementById("botaodi")
const resultado = document.getElementById("resultado")

function calcularSoma(){
    
    let caixamud1 = Number(caixa1.value)    
    let caixamud2 = Number(caixa2.value) 
    let resultado = caixamud1 + caixamud2   
    let resultadoFinal = document.getElementById("resultado")
    
    resultadoFinal.innerHTML = `O resultado é ${resultado}`

    console.log(resultado)    
}
function calcularSub(){
    
    let caixamud1 = Number(caixa1.value)    
    let caixamud2 = Number(caixa2.value) 
    let resultado = caixamud1 - caixamud2   
    let resultadoFinal = document.getElementById("resultado")
    
    resultadoFinal.innerHTML = `O resultado é ${resultado}`

    console.log(resultado)    
}
function calcularMult(){
    
    let caixamud1 = Number(caixa1.value)    
    let caixamud2 = Number(caixa2.value) 
    let resultado = caixamud1 * caixamud2   
    let resultadoFinal = document.getElementById("resultado")
    
    resultadoFinal.innerHTML = `O resultado é ${resultado}`

    console.log(resultado)    
    
}
function calcularDiv(){
    
    let caixamud1 = Number(caixa1.value)    
    let caixamud2 = Number(caixa2.value) 
    let resultado = caixamud1 / caixamud2   
    let resultadoFinal = document.getElementById("resultado")
    
    resultadoFinal.innerHTML = `O resultado é ${resultado}`

    console.log(resultado)    
}


botaoso.addEventListener('click', calcularSoma)
botaosu.addEventListener('click', calcularSub)
botaomu.addEventListener('click', calcularMult)
botaodi.addEventListener('click', calcularDiv)

