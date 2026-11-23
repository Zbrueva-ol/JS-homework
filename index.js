const form = {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    button: document.querySelector('.button'),
}

function handleInput(e, name) {
    const { value } = e.target
    if (value) {
        form[name].classList.add('filed')
    } else {
        form[name].classList.remove('filed')
    }
}

function checkForm(){
    const email = form.email.getElementsByTagName('input')[0].value
    const password = form.password.getElementsByTagName('input')[0].value
    if (email && password){
        form.botton.classList.remove('disable')
    } else {
        form.botton.classList.add('disable')
    }
}

form.email.oninput = (e) => handleInput(e, 'email')
form.password.oninput  = (e) => handleInput(e, 'password')
form.email.onblur = checkForm
form.password.onblur  =checkForm
form.button.onclick = () => alert('Вы вошли!')

// function onMaxClick() {
    
// }

// const getRandomColor = () => {
//     const colors = ['red', 'blue', 'green'];
//     return color[Math.floor(Math.random() * colors.length)];
// }

// function onMaxButtonClick() {
//     const maxButton = document.querySelector('#max-button');
    
//     maxButton.style.color = getRandomColor();
// }