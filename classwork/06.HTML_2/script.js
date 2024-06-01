const username = document.querySelector('#username')

const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value
    }
    console.log(user);
})

console.log('sort', [11, 22, 12, 8, 1, 9].sort((a, b) => a - b));
console.log(typeof NaN);

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

'baNaNa'

console.log((+'elshen'));
let value = 2009; 

{
    let value = 24
}


// alert('Confirm password not match password !')
// const password = document.querySelector('#pass')
// const fa_eye = document.querySelector('.fa-eye')
// const fa_eye_slash = document.querySelector('.fa-eye-slash')


// fa_eye.addEventListener('click', () => {
//     password.type = 'text'
//     fa_eye.style.display = 'none'
//     fa_eye_slash.style.display = 'block'
// })
// fa_eye_slash.addEventListener('click', () => {
//     password.type = 'password'
//     fa_eye.style.display = 'block'
//     fa_eye_slash.style.display = 'none'
// })