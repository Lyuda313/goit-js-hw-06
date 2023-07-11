const inputNumber = document.querySelector("[type='number']")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
const divBox = document.querySelector("#boxes")


createBtn.addEventListener("click", function() {
  const countBox = +inputNumber.value;
  const maxAttr = inputNumber.getAttribute("max")
  if (countBox > maxAttr) {
    countBox = maxAttr
    inputNumber.value = maxAttr
  }
  createBoxes(countBox)
})

destroyBtn.addEventListener("click", destroyBoxes)




function createBoxes(amount) {
  let sizeDiv = 30;
  const arrayDiv = []


  for(let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor()
    const createDiv = `<div style='background-color:${randomColor}; width:${sizeDiv}px; height:${sizeDiv}px;'></div>`
    arrayDiv.push(createDiv);
    sizeDiv += 10
  }
  divBox.insertAdjacentHTML("beforeend", arrayDiv.join(""))
}


function destroyBoxes() {
  divBox.innerHTML = "";
  inputNumber.value = ""
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
