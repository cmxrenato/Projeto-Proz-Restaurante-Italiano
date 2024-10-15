

let usernameEmail = document.getElementById("email")
let labelEmail = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById('email-helper')



usernameEmail.addEventListener("change", (e)=>{
    let valor = e.target.value
    if (valor.includes("@") && valor.includes(".com")){
        usernameEmail.classList.add('correct')
        usernameEmail.classList.remove('error')
        emailHelper.classList.remove('visible')
       
    } else{
        usernameEmail.classList.remove('correct')
        usernameEmail.classList.add('error')
        emailHelper.innerText = "O email dever ter @ e .com"
        emailHelper.classList.add('visible')
       
    }



})

function mostrarPopup(input,label){
    input.addEventListener("focus",()=>{
        label.classList.add('required-popup')
    })
    input.addEventListener("blur",()=>{
        label.classList.remove('required-popup')
    })
}
// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel)

function temCaractereEspecial(senha) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(senha)
}

senhaInput.addEventListener('change', (e) =>{
    let valor = e.target.value
    let temCaractere = temCaractereEspecial(valor)
if (valor.length > 2 && temCaractere){
    senhaInput.classList.add('correct')
    senhaInput.classList.remove('error')
    senhaHelper.classList.remove('visible')
} else {
    senhaInput.classList.add('error')
    senhaInput.classList.remove('correct')
    senhaHelper.classList.add('visible')
    senhaHelper.innerText = " A senha precisa ter pelo menos 3 caracteres e um caractere especial"
}
})



function togglePassword(btn, inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        btn.innerText = "🚫"; // Altera o ícone para mostrar que a senha está visível
    } else {
        input.type = "password";
        btn.innerText = "👁️‍🗨️"; // Altera o ícone para mostrar que a senha está oculta
    }
}

let form = document.getElementById("form-login"); 

form.addEventListener("submit", (e) => {
    let senhaValida = senhaInput.classList.contains('correct');
    let emailValido = usernameEmail.classList.contains('correct');
   

    if (!senhaValida || !emailValido) {
        e.preventDefault(); // Impede o envio do formulário
        alert("Por favor, corrija os erros antes de enviar."); // Mensagem de alerta
    }
});




mostrarPopup(usernameEmail, labelEmail)
mostrarPopup(senhaInput, senhaLabel)
