export async function getMealByTitle(title) {

    const url = `${import.meta.env.VITE_THE_MEAL_DB_URL}search.php?s=${title}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const mealsJson = await response.json();
        return mealsJson.meals;

    } catch (error) {
        console.error('Error in getMealByTitle:', error.message);
        return null; 
    }
}

export async function getMealById(id) {

    const url = `${import.meta.env.VITE_THE_MEAL_DB_URL}lookup.php?i=${id}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const mealsJson = await response.json();
        return mealsJson.meals;

    } catch (error) {
        console.error('Error in getMealById:', error.message);
        return null; 
    }
}

export async function getMealByIngredient(ingredient) {

    const url = `${import.meta.env.VITE_THE_MEAL_DB_URL}filter.php?i=${ingredient}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const mealsJson = await response.json();
        return mealsJson.meals;

    } catch (error) {
        console.error('Error in getMealByIngredient:', error.message);
        return null; 
    }
}

export async function getRandonMeal() {

    const url = `${import.meta.env.VITE_THE_MEAL_DB_URL}random.php`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const mealsJson = await response.json();
        return mealsJson.meals;

    } catch (error) {
        console.error('Error in getMealByIngredient:', error.message);
        return null; 
    }
}

