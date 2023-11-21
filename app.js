function validaFormulario(){
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Validação dos campos
    if(nome === '' || email === '' || senha === ''){
        alert("Por favor, preencha os espaços")
    }if(senha.length < 8){
        alert("Senha muito pequena! Mínimo de 8 dígitos!")
    }
}