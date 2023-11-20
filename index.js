fetch("http://localhost:3000/menu")
.then(response => response.json())
.then(foods => addFoodToMenu(foods))

function addFoodToMenu(foods)
{
    foods.forEach(food => {
        const newSpanElement = document.createElement("span")
        newSpanElement.innerText = food.name
        const menuDiv = document.getElementById("menu-items")
        menuDiv.appendChild(newSpanElement)

        newSpanElement.addEventListener("click", () => displayMainFoodItem(food))
    })
,
    displayMainFoodItem(foods[0])
    
    // const menuItemsElement = document.getElementById("menu-items")
    // menuItemsElement.addEventListener("click", console.log("working?"))
}

function displayMainFoodItem(food)
{
    const dishImage = food.image
    const imageElement = document.getElementById("dish-image")
    imageElement.src = dishImage

    const dishName = food.name
    const nameElement = document.getElementById("dish-name")
    nameElement.textContent = dishName

    const dishDescription = food.description
    const descriptionElement = document.getElementById("dish-description")
    descriptionElement.textContent = dishDescription

    const dishPrice = food.price
    const priceElement = document.getElementById("dish-price")
    priceElement.textContent = "$" + dishPrice

    // const menuItemsElement = document.getElementById("menu")
    // menuItemsElement.addEventListener("click", console.log("working"))
}