const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");

const mostrarUsuario = document.querySelector("#mostrarUsuario");
const mostrarSenha = document.querySelector("#mostrarSenha");

const botao = document.querySelector("#botao");
const botaoApagar = document.querySelector("#botaoApagar");

function apagarInfo() {
    mostrarUsuario.innerHTML = "";
    mostrarSenha.innerHTML = "";
    usuario.value = "";
    senha.value = "";
}

function mostrarResultados() {

    if (usuario.value.length > 3 && senha.value.length >= 7) {
        mostrarUsuario.innerHTML = usuario.value;
        mostrarSenha.innerHTML = senha.value;
        let nomeFormatado = usuario.value;
        alert("Seja bem vindo(a) " + nomeFormatado[0].toUpperCase() + nomeFormatado.substring(1));
    } else {
        const mostrarUsuario = document.querySelector("#mostrarUsuario");
        mostrarUsuario.innerHTML = "Usuario precisa ter mais de 3 digitos";
        const mostrarSenha = document.querySelector("#mostrarSenha");
        mostrarSenha.innerHTML = "Senha precisa ter mais de 7 digitos"
        alert("Siga as instruções, que serão informadas");
    }
}


botao.addEventListener("click", mostrarResultados);
botaoApagar.addEventListener("click", apagarInfo);

