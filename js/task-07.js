const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text")

spanText.style.fontSize = `${inputRange.value}px`

inputRange.addEventListener("input", function(event) {
    const target = event.currentTarget;
    spanText.style.fontSize = `${target.value}px`
})