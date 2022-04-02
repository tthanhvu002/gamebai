const hides = document.querySelectorAll('.show')
const password = document.querySelector('.pass')
const cf_password = document.querySelector('.cf-pass')

Array.from(hides).forEach((item,index) => {
    item.onclick = () => {
        if(item.classList.contains('fa-eye')){

            item.classList.replace('fa-eye', 'fa-eye-slash')
        } else{
            item.classList.replace('fa-eye-slash', 'fa-eye')

        }
        if(index == 0 && password.type == "text"){
            password.type = 'password'
        } else if(index == 0 && password.type == "password"){
            password.type = 'text'

        } else if(index == 1 && cf_password.type == "text"){
            cf_password.type = 'password'

        } else{
            cf_password.type = 'text'

        }
    }
})

cf_password.oninput = () => {
    const pass = password.value
    const cf_pass = cf_password.value
    const error = document.querySelector('.error-mess')
    if(pass != cf_pass) {
        error.innerHTML = "Nhập lại mật khẩu không đúng"
    } else{
        error.innerHTML = ''
    }
}