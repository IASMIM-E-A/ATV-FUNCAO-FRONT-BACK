// QUESTÃO 1
function calcularDesconto() {
    var preco = parseFloat(document.getElementById("preco1").value);
    var desconto = parseFloat(document.getElementById("desconto1").value);
    var valorDesconto = (preco * desconto) / 100;
    var precoFinal = preco - valorDesconto;
    document.getElementById("resultado1").innerText = "Preço com desconto: R$ " + precoFinal.toFixed(2);
}

// QUESTÃO 2
function calcularSalario() {
    var salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    var desconto = parseFloat(document.getElementById("descontoPercentual").value);
    var salarioLiquido = salarioBruto - (salarioBruto * desconto / 100);
    document.getElementById("resultado2").innerText = "Salário líquido: R$ " + salarioLiquido.toFixed(2);
}

// QUESTÃO 3
function verificarIdade() {
    var idade = parseInt(document.getElementById("idade").value);
    let resposta;
    if (idade >= 100) resposta = "dos tempos dinossáuricos";
    else if (idade >= 18) resposta = "maior de idade";
    else resposta = "menor de idade";
    document.getElementById("resultado3").innerText = "Você é: " + resposta;
}

// QUESTÃO 4
function categorizarPreco() {
    var preco = parseFloat(document.getElementById("precoProduto").value);
    let categoria;
    if (preco < 50) categoria = "Econômico";
    else if (preco <= 100) categoria = "Intermediário";
    else categoria = "Premium";
    document.getElementById("resultado4").innerText = "Categoria do produto: " + categoria;
}

// QUESTÃO 5
function converterTemperatura() {
    var temp = parseFloat(document.getElementById("temperatura").value);
    var tipo = document.getElementById("conversao").value;
    var resultado, unidade;
    if (tipo === "CEPAFA") {
        resultado = (temp * 9 / 5) + 32;
        unidade = "°F";
    } else {
        resultado = (temp - 32) * 5 / 9;
        unidade = "°C";
    }
    document.getElementById("resultado5").innerText = "Temperatura convertida: " + resultado.toFixed(2) + unidade;
}

// QUESTÃO 6
function numeroPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
}
function verificarPrimo() {
    var num = parseInt(document.getElementById("numero").value);
    var ehPrimo = numeroPrimo(num);
    document.getElementById("resultado6").innerText = num + (ehPrimo ? " é primo." : " não é primo.");
}

// QUESTÃO 7
function contarVogais() {
    var texto = document.getElementById("textoVogais").value.toLowerCase();
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (let letra of texto) if (vogais.includes(letra)) count++;
    document.getElementById("resultado7").innerText = "Número de vogais: " + count;
}

// QUESTÃO 8
function filtrarPalavras() {
    var texto = document.getElementById("textoFiltrar").value;
    var palavras = texto.split(' ').filter(p => p.trim().length >= 5);
    document.getElementById("resultado8").innerText = "Palavras com 5+ letras: " + palavras.join(', ');
}

// QUESTÃO 9
function gerarSenha() {
    const comprimento = parseInt(document.getElementById("comprimento").value);
    if (isNaN(comprimento) || comprimento < 4) {
        document.getElementById("senhaResultado").innerText = "Informe um número válido (mínimo 4).";
        return;
    }
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        senha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("senhaResultado").innerText = "Senha gerada: " + senha;
}

// QUESTÃO 10
function exibirMedia() {
    var input = document.getElementById("numerosInput").value;
    var numeros = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (numeros.length === 0) {
        document.getElementById("resultado10").innerText = "Nenhum número válido inserido.";
        return;
    }
    var soma = numeros.reduce((acc, val) => acc + val, 0);
    var media = (soma / numeros.length).toFixed(2);
    document.getElementById("resultado10").innerText = "Média calculada: " + media;
}