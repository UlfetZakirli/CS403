const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const checkbox = document.querySelector('input[type=checkbox]')
const btn = document.querySelector('#btn')
const form = document.querySelector('form')


// DOM - Document Object Model
// . - class
// # - id
const users = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (password.value !== confirmPassword.value) {
        alert('Confirm Password doesnt match Password !')
    } else {
        const user = {
            username: username.value
        }
        users.push(user)
        console.log(user);
    }
})

username.addEventListener('input', triggerInput)
email.addEventListener('input', triggerInput)
password.addEventListener('input', triggerInput)
checkbox.addEventListener('input', triggerInput)


function triggerInput() {
    if (username.value.length >= 5 && email.value && password.value && checkbox.checked) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}