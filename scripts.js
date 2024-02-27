 //loading the recipes
function loadRecipes() {
    fetch('recipes.json')
    .then(response => response.json())
    .then(data => {
        //create recipe cards
        displayRecipes(data);
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}

// showing recipes on the page
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
