const loginTab = document.getElementById('login-tab')
const signTab = document.getElementById('signUp-tab')
let activatedTab = loginTab

const btnReturnLogin = document.getElementById('btn-return-login')
const forgotPassword = document.getElementById('forgotPassword')

const loginForms = document.getElementById('login-forms')
const signUpForms = document.getElementById('signUp-forms')
const forgotPasswordForms = document.getElementById('forgotPassword-forms')
let activatedForms = loginForms

loginTab.addEventListener('click', function() {
    changeSelectedTab(loginTab)
    changeForms(loginForms)
})

signTab.addEventListener('click', function() {
    changeSelectedTab(signTab)
    changeForms(signUpForms)
})

btnReturnLogin.addEventListener('click', function() {
    changeForms(loginForms)
})

forgotPassword.addEventListener('click', function() {
    changeForms(forgotPasswordForms)
})

function changeSelectedTab(tab) {
    activatedTab.classList.remove('activated')
    activatedTab = tab
    activatedTab.classList.add('activated')
}

function changeForms(forms) {
    activatedForms.classList.add('hidden')
    activatedForms = forms
    activatedForms.classList.remove('hidden')
}
