let usuario = document.getElementById("username").value;
let senha = document.getElementById("password").value;

localStorage.setItem("logou", false);
function Login(){
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;
    if(usuario == "ETS" && senha == "123"){
       alert("Sua senha esta correta")
       localStorage.setItem("logou", true)
    } else{
        alert("Sua senha esta errada");
    }
}


