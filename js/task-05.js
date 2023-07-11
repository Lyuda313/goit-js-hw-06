const inputName = document.querySelector("#name-input")
const outputName =  document.querySelector("#name-output")



inputName.addEventListener("input", function(event) {
    outputName.textContent = event.currentTarget.value.trim();
    if (!outputName.textContent) {
        outputName.textContent = "Anonymous"
    }
})


