const listOfCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const itemsCount = item.querySelectorAll('ul li').length;
    
    console.log(`Category: ${title}`);

    console.log(`Elements: ${itemsCount}`);
});
