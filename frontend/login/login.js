const loginArea = document.getElementById("entrar")
const signArea = document.getElementById("cadastrar")
let areaAtivada = loginArea

loginArea.addEventListener("click", function(mouse) {
    changeSelectedArea(mouse)
    changeForms(loginForms)
})

signArea.addEventListener("click", function(mouse) {
    changeSelectedArea(mouse)
    changeForms(signUpForms)
})

function changeSelectedArea(area){

    areaAtivada.classList.remove("Ativado")
    areaAtivada = area.target

    console.log(areaAtivada)

    areaAtivada.classList.add("Ativado")
}

const loginForms = 
`
<div class="inputFields">
<div class="inputField">
    <div class="icon"><img src="images/account.png" alt="icone"></div>
    <input type="text" placeholder="Nome de usuário ou E-mail">
    </div>
    <div class="inputField">
    <div class="icon"><img src="images/lock.png" alt="icone"></div>
    <input type="password" placeholder="Senha">
    <span class="link">Esqueci a senha</span>
</div>
</div>     
<button class="btnfield">Entrar</button>
`
const signUpForms =
`
<div class="inputFields">
<div class="inputField">
    <div class="icon"><img src="images/account.png" alt="icone"></div>
    <input type="text" placeholder="Nome de usuário">
    </div>
    <div class="inputField">
    <div class="icon"><img src="images/mail.png" alt="icone"></div>
    <input type="email" placeholder="E-mail">
    </div>
    <div class="inputField">
    <div class="icon"><img src="images/lock.png" alt="icone"></div>
    <input type="password" placeholder="Senha">
    </div>
    <div class="inputField">
    <div class="icon"><img src="images/lock.png" alt="icone"></div>
    <input type="password" placeholder="Confirmar Senha">
</div>
</div>
<button class="btnfield">Cadastrar</button>
`



const forms = document.getElementById("loginForms")

function changeForms(currentForms){
    forms.innerHTML = currentForms
}

changeForms(loginForms)