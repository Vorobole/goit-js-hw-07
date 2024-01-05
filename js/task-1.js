const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);
const allTitleCategories = document.querySelectorAll('.item>h2');

const firstElCategory = allCategories[0].querySelectorAll('li');
const secondElCategory = allCategories[1].querySelectorAll('li');
const thirdElCategory = allCategories[2].querySelectorAll('li');

console.log(`Category: ${allTitleCategories[0].textContent}`);
console.log(`Elements: ${firstElCategory.length}`);
console.log(`Category: ${allTitleCategories[1].textContent}`);
console.log(`Elements: ${secondElCategory.length}`);
console.log(`Category: ${allTitleCategories[2].textContent}`);
console.log(`Elements: ${thirdElCategory.length}`);
