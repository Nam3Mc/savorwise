import { setSearchOptions } from "./SearchBar.mjs";

const ALL_INGREDIENTS = [
    { name: 'Tomato', emoji: '🍅' },
    { name: 'Onion', emoji: '🧅' },
    { name: 'Garlic', emoji: '🧄' },
    { name: 'Olive Oil', emoji: '🫒' },
    { name: 'Basil', emoji: '🌿' },
    { name: 'Chicken', emoji: '🍗' },
    { name: 'Beef', emoji: '🥩' },
    { name: 'Pork', emoji: '🐖' },
    { name: 'Shrimp', emoji: '🦐' },
    { name: 'Egg', emoji: '🥚' },
    { name: 'Milk', emoji: '🥛' },
    { name: 'Cheese', emoji: '🧀' },
    { name: 'Butter', emoji: '🧈' },
    { name: 'Yogurt', emoji: '🫗' },
    { name: 'Flour', emoji: '🌾' },
    { name: 'Rice', emoji: '🍚' },
    { name: 'Carrot', emoji: '🥕' },
    { name: 'Broccoli', emoji: '🥦' },
    { name: 'Spinach', emoji: '🥬' },
    { name: 'Lettuce', emoji: '🥬' },
    { name: 'Cucumber', emoji: '🥒' },
    { name: 'Peas', emoji: '🫛' },
    { name: 'Green Beans', emoji: '🫘' },
    { name: 'Lemon', emoji: '🍋' },
    { name: 'Lime', emoji: '🍋‍🟩' },
    { name: 'Orange', emoji: '🍊' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Mango', emoji: '🥭' },
    { name: 'Coconut', emoji: '🥥' },
    { name: 'Avocado', emoji: '🥑' },
    { name: 'Zucchini', emoji: '🥒' },
    { name: 'Pumpkin', emoji: '🎃' },
    { name: 'Ginger', emoji: '🫚' },
    { name: 'Turmeric', emoji: '🟡' },
    { name: 'Cinnamon', emoji: '🟤' },
    { name: 'Nutmeg', emoji: '🥜' },
    { name: 'Oregano', emoji: '🌿' },
    { name: 'Thyme', emoji: '🌿' },
    { name: 'Rosemary', emoji: '🌿' },
    { name: 'Parsley', emoji: '🌿' },
    { name: 'Cilantro', emoji: '🌿' },
    { name: 'Mint', emoji: '🌿' },
    { name: 'Sage', emoji: '🌿' },
    { name: 'Bay Leaf', emoji: '🍃' },
    { name: 'Cumin', emoji: '🟫' },
    { name: 'Paprika', emoji: '🌶️' },
    { name: 'Black Pepper', emoji: '⚫' },
    { name: 'Salt', emoji: '🧂' },
    { name: 'Soy Sauce', emoji: '🫗' },
    { name: 'Vinegar', emoji: '🫗' },
    { name: 'Honey', emoji: '🍯' },
    { name: 'Maple Syrup', emoji: '🍁' },
    { name: 'Sugar', emoji: '🍬' },
    { name: 'Brown Sugar', emoji: '🟫' },
    { name: 'Cocoa Powder', emoji: '🍫' },
    { name: 'Vanilla', emoji: '🍦' },
    { name: 'Tofu', emoji: '🧈' },
    { name: 'Tempeh', emoji: '🫘' },
    { name: 'Quinoa', emoji: '🌾' },
    { name: 'Oats', emoji: '🌾' },
    { name: 'Couscous', emoji: '🍚' },
    { name: 'Noodles', emoji: '🍜' },
]

export async function showIngredients() {
  const ulContainer = document.querySelector('#ingredient-grid');
  const indexUsed = [];
  const ingredients = [];
  const total = Math.min(10, ALL_INGREDIENTS.length);

  // Clear container
  ulContainer.textContent = '';
  ulContainer.className = 'ingredient-grid';   // ← added class

  for (let i = 0; i < total; i++) {
    let randomIndex;
    let attempts = 0;

    do {
      randomIndex = Math.floor(Math.random() * ALL_INGREDIENTS.length);
      attempts++;
    } while (indexUsed.includes(randomIndex) && attempts < 100);

    if (indexUsed.includes(randomIndex)) break;

    indexUsed.push(randomIndex);
    const ingredient = ALL_INGREDIENTS[randomIndex];

    // Create list item (card)
    const li = document.createElement('li');
    li.className = 'ingredient-card';          // ← added class

    // Create button (whole card is clickable)
    const btn = document.createElement('button');
    btn.className = 'ingredient-card__button'; // ← added class

    // Emoji span
    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'ingredient-card__emoji';
    emojiSpan.textContent = ingredient.emoji;

    // Name span
    const nameSpan = document.createElement('span');
    nameSpan.className = 'ingredient-card__name';
    nameSpan.textContent = ingredient.name;

    // Assemble button
    btn.appendChild(emojiSpan);
    btn.appendChild(nameSpan);
    li.appendChild(btn);
    ulContainer.appendChild(li);

    // Attach click event to the button
    btn.addEventListener('click', async () => {
      const inputSearch = document.querySelector('#search-input');
      inputSearch.value = ingredient.name;
      setSearchOptions();   // triggers search
    });
  }
}