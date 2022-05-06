const calcular = document.querySelector('#calcular');

function imc(){
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado');

    if (nome !== '' && altura != '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }

        resultado.textContent = (`${nome} seu IMC é ${valorIMC} e você está ${classificacao}`);

    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);