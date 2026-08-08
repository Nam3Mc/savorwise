import { getRandonMeal } from "./FetchMeal.mjs"

export async function getIngredients() {

    const ingredients = new Set()

    for (let i = 1; i <= 10 ; i++) {

        const meal = await getRandonMeal()
        const meañIngredients  = extractIngredientsFromMeal(meal)

        meañIngredients.forEach(ing => ingredients.push(ing) )
    }

    return Array.from(ingredients)
}

function extractIngredientsFromMeal(meal) {

    const ingredients = []

    for (let i = 1; i <= 20; i++) {

        const key = `strIngredient${i}`
        const ingredient = meal[key]

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(ingredient.trim())
        }
    }

    return ingredients
}