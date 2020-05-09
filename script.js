//UI Variables
const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input error message

function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

//Show success outline

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault()

    if(userName.value === ''){
        showError(userName,'Username is required')
    } else {
        showSuccess(userName)
    }

    if(email.value === ''){
        showError(email,'Email is required')
    } else if(!isValidEmail(email.input)) {
        showError(email, 'Email is not valid')
    } else {
        showSuccess(email)
    }
    
})