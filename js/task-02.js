const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);
const ingredientsList = document.querySelector('#ingredients');

 ingredients.forEach(option => {
  const itemListEl = document.createElement('li');
  itemListEl.textContent = option;
  itemListEl.classList.add('item');
  ingredientsList.append(itemListEl);


console.log(itemListEl);
 })