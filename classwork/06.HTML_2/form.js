const username = document.querySelector('#username')
const email = document.querySelector('#email')
const btn = document.querySelector('#btn')
const form = document.querySelector('form')


// DOM - Document Object Model
// . - class
// # - id
const users = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value
    }
    users.push(user)
    console.log(user);
})

username.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

email.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})