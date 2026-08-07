export default function mealTemplate(meal) {

    const {
        idMeal,
        strMeal: title,
        strCategory: category,
        strArea: area,
        strMealThumb: image,
        strInstructions: instructions,
        strTags: tags,
        strYoutube: youtube
    } = meal;

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {

        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ing && ing.trim() !== '') {

            ingredients.push({
                ingredient: ing.trim(),
                measure: measure ? measure.trim() : ''
            });
        }
    }

    const mealCard = document.createElement('div');
    const leftCol = document.createElement('div');
    const mealName = document.createElement('h2');
    const mealImage = document.createElement('img');
    const rightCol = document.createElement('div');
    const tableWrapper = document.createElement('div');
    const tableHeading = document.createElement('h3');
    const ingTable = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const thIng = document.createElement('th');
    const thMeasure = document.createElement('th');
    const tbody = document.createElement('tbody');
    
    mealCard.className = 'meal-card'
    leftCol.className = 'meal-left';
    mealName.className = 'meal-title';
    mealName.textContent = title;
    mealImage.className = 'meal-image';
    mealImage.src = image;
    mealImage.alt = title;
    rightCol.className = 'meal-right';
    tableWrapper.className = 'meal-table-wrapper';
    tableHeading.className = 'meal-table-heading';
    tableHeading.textContent = 'Ingredients';
    ingTable.className = 'meal-table';
    thIng.textContent = 'Ingredient';
    thMeasure.textContent = 'Quantity';

    leftCol.appendChild(mealName);
    leftCol.appendChild(mealImage);
    headerRow.appendChild(thIng);
    headerRow.appendChild(thMeasure);
    thead.appendChild(headerRow);
    ingTable.appendChild(thead);

    ingredients.forEach(({ ingredient, measure }) => {

        const tr = document.createElement('tr');
        const tdIng = document.createElement('td');
        const tdMeas = document.createElement('td');

        tdIng.textContent = ingredient;
        tdMeas.textContent = measure;
        
        tr.appendChild(tdIng);
        tr.appendChild(tdMeas);
        tbody.appendChild(tr);
    });

    ingTable.appendChild(tbody);
    tableWrapper.appendChild(tableHeading);
    tableWrapper.appendChild(ingTable);
    rightCol.appendChild(tableWrapper);

    const instrDiv = document.createElement('div');
    const instrHeading = document.createElement('h3');
    const instrText = document.createElement('p');
    
    instrDiv.className = 'meal-instructions';
    instrHeading.className = 'meal-instructions-heading';
    instrHeading.textContent = 'Instructions';
    instrText.className = 'meal-instructions-text';
    instrText.textContent = instructions;

    instrDiv.appendChild(instrHeading);
    instrDiv.appendChild(instrText);
    mealCard.appendChild(leftCol);
    mealCard.appendChild(rightCol);
    mealCard.appendChild(instrDiv);

    return mealCard;
}