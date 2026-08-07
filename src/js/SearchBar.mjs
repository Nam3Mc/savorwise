import { getMealByIngredient, getMealByTitle } from "./FetchMeal.mjs";

function recipeCardTemplate(recipeData) {
  // Main card container
    const div = document.createElement('div');
    div.className = 'recipe-card';
    
    // Title with link
    const h2 = document.createElement('h2');
    h2.className = 'recipe-card__title';
    
    const atag = document.createElement('a');
    atag.className = 'recipe-card__link';
    atag.textContent = recipeData.strMeal;
    atag.href = `/meal/index.html/${recipeData.idMeal}`;
    h2.appendChild(atag);
    
    // Image
    const img = document.createElement('img');
    img.className = 'recipe-card__image';
    img.src = recipeData.strMealThumb;
    img.alt = recipeData.strMeal;  // was img.href – fixed
    
    // Ingredients container
    const ingContainer = document.createElement('div');
    ingContainer.className = 'recipe-card__ingredients';
    
    // Loop ingredients (max 20)
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipeData[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== '') {
        const p = document.createElement('p');
        p.className = 'recipe-card__ingredient';
        p.textContent = ingredient;
        ingContainer.appendChild(p);
      }
    }
  
    // Assemble card
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(ingContainer);
  
    return div;
}

function getSeachType(inputList) {
    for ( const selected of inputList ) {
        if (selected.checked) return selected.value
    }
}

async function fetchRecipes(serachType, searchInput) {
    if (serachType === 'recipe') {
        const recipes = await getMealByTitle(searchInput)
        return recipes
    } else {
        const recipes = await getMealByIngredient(searchInput)
        return recipes
    }
}

export async function setSearchOptions() {

    const container = document.querySelector('#recipe-results')
    const input = document.querySelector('#search-input').value
    const searchBy = document.querySelectorAll('.search-type')
    const searchType = getSeachType(searchBy)
    const recipes = await fetchRecipes(searchType, input)
    
    container.textContent = ''

    if (!recipes || recipes.length === 0) {
        container.textContent = 'No recipe found with that name'
    } else {
        recipes.forEach(recipe => {
            const recipeCard = recipeCardTemplate(recipe)
            container.appendChild(recipeCard)
        });
    }
}

export async function handdlerSearch() {

    const searchBtn = document.querySelector('#search-btn')

    searchBtn.addEventListener('click', async () => {
        event.preventDefault()
        setSearchOptions()
    })
}