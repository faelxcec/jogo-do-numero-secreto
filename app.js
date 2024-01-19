let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){

exibirTextoNaTela("h1","Jogo Do Numero Secreto");
exibirTextoNaTela("p","escolha um numero entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

   if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","ACERTOU");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `você acertou o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        if ( chute > numeroSecreto ) {
            exibirTextoNaTela("p","o numero secreto é menor");
        } else {
            exibirTextoNaTela("p","O numero secreto é maior");
        }
        tentativas++;
        limparCampo();

   }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLIsta = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLIsta == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}