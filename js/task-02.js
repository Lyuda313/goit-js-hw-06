const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngradients = document.querySelector("#ingredients")

function addIngradientList(array) {
  const arrayLi = array.map(item => {
    const elementLi =  document.createElement("li");
    elementLi.textContent = item;
    elementLi.classList.add("item");
    return elementLi
  })

  console.log(arrayLi);
  ulIngradients.append(...arrayLi)

}

addIngradientList(ingredients)