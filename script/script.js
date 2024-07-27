const bloquearInput = document.querySelector("#texto");

bloquearInput.addEventListener("keypress", function(e){
    if (!checarChar(e)) {
        e.preventDefault();
    }
})

function checarChar(e){
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z\13-32]';
    if (char.match(pattern)) {
        return true;
    }
}

function pegarValor(){
    if (document.getElementById("texto").value === "") {
        document.getElementById("imagem").style.visibility = "visible";
        document.getElementById("caixa__mensagem").style.visibility = "visible";
        document.getElementById("mensagem").style.visibility = "hidden";
        document.getElementById("mensagem").innerHTML = "";
        document.getElementById("botao").style.visibility = "hidden";
        document.getElementById("caixa__mensagem").style.height = "133px";
    } else {
        document.getElementById("imagem").style.visibility = "hidden";
        document.getElementById("caixa__mensagem").style.visibility = "hidden";
        document.getElementById("mensagem").style.visibility = "visible";
        document.getElementById("mensagem").innerHTML = document.getElementById("texto").value;
        document.getElementById("botao").style.visibility = "visible";
        document.getElementById("caixa__mensagem").style.height = "343px";
    }
}

function criptografar(){
    let texto = document.getElementById("texto").value;
    let cifrado = texto.replace(/a/g,"ai")
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
    document.getElementById("mensagem").innerHTML = cifrado;
}

function descriptografar(){
    let texto = document.getElementById("texto").value;
    let cifrado = texto.replace(/ai/g,"a")
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
    document.getElementById("mensagem").innerHTML = cifrado;
}

function copiar(){
    if (document.querySelector("#mensagem").value === "") {
        alert("Não há texto para copiar!")
    } else {
        let conteudo = document.querySelector("#mensagem");
        conteudo.select();
        document.execCommand("copy");
        alert("Texto copiado com sucesso!");
    }  
    
}

