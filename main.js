//! get loadCatagories 
const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error))
}

const displayCatagories = (categories) =>{
    //?button container from html file 
    const categoryBtnContainer = document.getElementById("btn-categories")

    categories.forEach((item) => {
        const button = document.createElement("button")
        button.classList = "btn"
        button.innerText = item.category
        categoryBtnContainer.append(button)
    });
}

loadCatagories()