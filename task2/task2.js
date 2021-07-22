let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let content = document.getElementById('content')
let photo = document.getElementById('photo')

let f1 = document.forms['f1']
console.log(f1);

btn.addEventListener('click', () => {

    if (f1.firstName.value && f1.lastName.value && f1.email.value ) {
        form.style.display = 'none'
        form2.style.display = 'block'
        content.innerHTML = `
        <br/>
        <div>${f1.firstName.value}</div>
        <div>${f1.lastName.value}</div>
        <div>${f1.email.value}</div>
        `
        if (man.checked) {
            photo.innerHTML = `<img src="./foto/computer-icons-avatar-login-user-avatar.jpg" alt="">`
        } else {
            photo.innerHTML = `<img src="./foto/Без названия.png" alt="">`
        }
        f1.reset()

    } else {
        alert('Введіть свої дані')
    }
})

btn2.addEventListener('click', () => {
    form.style.display = 'block'
    form2.style.display = 'none'
})