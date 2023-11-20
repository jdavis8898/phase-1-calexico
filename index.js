fetch("http://localhost:3000/menu")
.then(response => response.json())
.then(foods => menu(foods))

function menu(foods)
{
    foods.forEach(food => {
        const newSpanElement = document.createElement("span")
        newSpanElement.innerText = food.name
        const menuDiv = document.getElementById("menu-items")
        menuDiv.appendChild(newSpanElement)

        newSpanElement.addEventListener("click", () => displayMainFoodItem(food))
    })

    const newCartForm = document.getElementById("cart-form")
    newCartForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const addToCartAmountElement = document.getElementById("cart-amount")
        let addToCartAmountValue = parseInt(addToCartAmountElement.value)


        const numberInCartElement = document.getElementById("number-in-cart")
        let previousCartAmount = parseInt(numberInCartElement.textContent)
        let updatedCartAmount = addToCartAmountValue + previousCartAmount
        numberInCartElement.textContent = updatedCartAmount

        newCartForm.reset()
    })

    displayMainFoodItem(foods[0])
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
}
