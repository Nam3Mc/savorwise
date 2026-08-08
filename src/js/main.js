import { getMealById, getMealByIngredient, getMealByTitle } from "./FetchMeal.mjs";
import { showIngredients } from "./Ingredients.mjs";
import { loadHeaderFooter } from "./LoadHeaderFooter.mjs";
import {  handdlerSearch } from "./SearchBar.mjs";

console.log('🚀 SavorWise is running!');
loadHeaderFooter()
showIngredients()
handdlerSearch()