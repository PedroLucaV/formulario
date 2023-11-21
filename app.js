function validaFormulario(){
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Validação dos campos
    if(nome === '' || email === '' || senha === ''){
        alert("Por favor, preencha os espaços")
    }else{
        if(senha.length < 8){
            alert("Senha muito pequena! Mínimo de 8 dígitos!")
        }else if(!emailRegex.test(email)){
            alert("Digite um e-mail valido!")
        }else{
            alert("Obrigado!")
        }
    }
}

function showPass() { 
    if(document.getElementById("senha").type == "password"){
        document.getElementById("senha").type = "text"
    }else{
        document.getElementById("senha").type = "password"
    }
} 

var inputs = document.querySelectorAll('input[type="radio"]');
for (var i = 0, l = inputs.length; i < l; i++){
    inputs[i].checked = false;
}