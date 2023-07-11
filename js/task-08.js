
const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", function(event){
    event.preventDefault();
    const target = event.currentTarget;


    const {email, password} = target.elements;
    if (!email.value || !password.value) {
        alert("Please fill in all fields")
    } else {
        const formObj = {
            email: email.value,
            password: password.value
        }
        console.log(formObj);
        target.reset()
    }
})
