const ulCategories = document.querySelector("#categories");



function f(element) {
    //console.log(element);
    const children = [...element.children]
    console.log(`Number of categories: ${children.length}`);

    children.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`)
        console.log(`Elements: ${item.lastElementChild.children.length}`)
    })
}

f(ulCategories)