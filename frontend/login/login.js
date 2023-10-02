const loginArea = document.getElementById("entrar")
const signArea = document.getElementById("cadastrar")
let areaAtivada = loginArea

const loginForms = document.querySelector(".login-forms")
const signUpForms = document.querySelector(".signUp-forms")

loginArea.addEventListener("click", function(mouse) {
    changeSelectedArea(mouse)
    changeForms("login")
})

signArea.addEventListener("click", function(mouse) {
    changeSelectedArea(mouse)
    changeForms("signUp")
})

function changeSelectedArea(area){

    areaAtivada.classList.remove("Ativado")
    areaAtivada = area.target

    console.log(areaAtivada)

    areaAtivada.classList.add("Ativado")
}

const forms = document.getElementById("loginForms")

function changeForms(forms) {
    loginForms.classList.add("hidden")
    signUpForms.classList.add("hidden")

    if (forms === "login") loginForms.classList.remove("hidden")
    else if (forms === "signUp") signUpForms.classList.remove("hidden")
}

changeForms("signUp")