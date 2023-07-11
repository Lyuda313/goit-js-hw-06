
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
//const body = document.body;

const spanColor = document.querySelector(".color")



changeColorBtn.addEventListener("click", function (event) {
 
  const colorBody = getRandomHexColor()
  body.style.backgroundColor = colorBody;
  spanColor.textContent = colorBody
})




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
