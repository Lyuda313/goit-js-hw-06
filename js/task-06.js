const inputText = document.querySelector("#validation-input");



inputText.addEventListener("blur", function(event) {   
    const target =  event.currentTarget;
    if (target.value.length === Number(target.dataset.length)) {
        inputText.classList.add("valid")
        inputText.classList.remove("invalid")
    } else {
        inputText.classList.add("invalid")
        inputText.classList.remove("valid")
    }
})