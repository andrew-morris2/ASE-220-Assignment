
function loadRecipes() {
    fetch('https://jsonblob.com/api/jsonblob/1209605678733058048')
    .then(response => response.json())
    .then(data => {
        displayRecipes(data.recipes);
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}


function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
            <p>Instructions: ${recipe.instructions}</p>
            <p>Rating: ${recipe.rating}</p>
        `;
        recipeList.appendChild(card);
    });
}


loadRecipes();
