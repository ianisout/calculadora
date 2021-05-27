function somarFelipe(a, b){

    return a + b
};

function subtracaoAdriano(a, b){
    return a - b;
}

function multiplicarNathalia(a, b) {
	return a * b;
}

function exponentiate(num, pwr) {
    return num ** pwr;
}

// function responsavel por chamar a operacao passada como parametro
function calculadora(a, b, operacao) {
	return operacao(a, b);
};

// definir nome da operação a ser testada e sua respectiva function
const operacaoNome = "multiplicação";
const operacaoFunc = multiplicarNathalia;

const numA = 5;
const numB = 8;

console.log(`O resultado da ${operacaoNome} é ${calculadora(numA, numB, operacaoFunc)}`);

// console.log(somarFelipe(5,8));
// console.log(subtracaoAdriano(25, 17));