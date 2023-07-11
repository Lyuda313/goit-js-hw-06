const elementCount = document.querySelector("#value");
const incrementBtn =  document.querySelector("button[data-action='increment']")
const dercementBtn =  document.querySelector("button[data-action='decrement']")

let counterValue = 0;

incrementBtn.addEventListener("click", function() {
    counterValue += 1;
    elementCount.textContent = counterValue;
})
dercementBtn.addEventListener("click", function() {
    counterValue -= 1;
    elementCount.textContent = counterValue;
})