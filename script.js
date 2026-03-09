document.addEventListener("DOMContentLoaded", function(){

// ALERTA DE BOAS-VINDAS
alert("Bem-vindo ao site CineShop!");


// BOTÃO DE BOAS-VINDAS
const btnBoasVindas = document.getElementById("btnBoasVindas");
const mensagem = document.getElementById("mensagem");

if(btnBoasVindas){
btnBoasVindas.addEventListener("click", function(){
    mensagem.textContent = "Bem-vindo ao meu site desenvolvido com HTML, CSS e JavaScript!";
});
}


// ALTERAR TEXTO
const btnAlterarTexto = document.getElementById("btnAlterarTexto");
const textoSite = document.getElementById("textoSite");

if(btnAlterarTexto){
btnAlterarTexto.addEventListener("click", function(){
    textoSite.innerHTML = "Este site agora possui interatividade com JavaScript!";
});
}


// ALTERAR COR
const btnCor = document.getElementById("btnCor");

if(btnCor){
btnCor.addEventListener("click", function(){
    document.querySelector("section").style.backgroundColor = "#cce5ff";
});
}


// MOSTRAR / ESCONDER
const btnMostrar = document.getElementById("btnMostrar");
const infoExtra = document.getElementById("infoExtra");

if(btnMostrar){
btnMostrar.addEventListener("click", function(){

    if(infoExtra.style.display === "none"){
        infoExtra.style.display = "block";
    } else {
        infoExtra.style.display = "none";
    }

});
}


// TROCAR IMAGEM
const imagem = document.getElementById("imagemCinema");

if(imagem){

imagem.addEventListener("mouseover", function(){
    imagem.src = "cineshop2.png";
});

imagem.addEventListener("mouseout", function(){
    imagem.src = "cineshop.png";
});

}


// CONTADOR
let contador = 0;

const contadorBtn = document.getElementById("contadorBtn");
const contadorTexto = document.getElementById("contador");

if(contadorBtn){
contadorBtn.addEventListener("click", function(){

    contador++;
    contadorTexto.textContent = contador;

});
}


// DARK MODE
const btnDarkMode = document.getElementById("btnDarkMode");

if(btnDarkMode){
btnDarkMode.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});
}


// FORMULÁRIO
const form = document.querySelector("form");
const nome = document.getElementById("nome");

if(form){
form.addEventListener("submit", function(event){

    if(nome.value.trim() === ""){
        alert("O campo nome não pode estar vazio!");
        event.preventDefault();
    }

});
}

});