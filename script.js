const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");

const botao = document.querySelector("#botao")

function mostrarResultados() {

    if (usuario.value.length > 3 && senha.value.length >= 7){
        const mostrarUsuario = document.querySelector("#mostrarUsuario");
        mostrarUsuario.innerHTML = usuario.value;
        const mostrarSenha = document.querySelector("#mostrarSenha");
        mostrarSenha.innerHTML = senha.value;
        let nomeFormatado = usuario.value;
        alert("Seja bem vindo(a) " + nomeFormatado[0].toUpperCase()+nomeFormatado.substring(1));
    }else{
        const mostrarUsuario = document.querySelector("#mostrarUsuario");
        mostrarUsuario.innerHTML = "Usuario precisa ter mais de 3 digitos";
        const mostrarSenha = document.querySelector("#mostrarSenha");
        mostrarSenha.innerHTML = "Senha precisa ter mais de 7 digitos"
        alert("Siga as instruções, que serão informadas");
    }
}

botao.addEventListener("click", mostrarResultados)