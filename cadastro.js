document.getElementById("LoginF").addEventListener("submit", function(cadastro) {
    login.preventDefault();// Não deixa a página recarregar
    window.location.href = "login.html"; // Redireciona
})


function cadastro(){
    let usuario = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (usuario =="ketlyn@gmail.com" && senha == "123") {
        localStorage.setItem("logou",true)
        alert("Sua senha está correta")
    } else {
        alert("Sua senha está errada")
    }

}