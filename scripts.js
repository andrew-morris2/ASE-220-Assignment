function loadHomeRecipes() {
    fetch('https://jsonblob.com/api/jsonblob/1209605678733058048')
    .then(response => response.json())
    .then(data => {
        displayRecipes(data.recipes.slice(0, 3)); //this will only display the 3 recipes for the homepage
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    //dynamically creating the html for the recipe cards
    const row = document.createElement('div');
    row.classList.add('row');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card', 'col-md-4', 'font-body');

        const image = document.createElement('div');
        image.classList.add('image');
        const imageName = recipe.name.toLowerCase().replace(/\s+/g, '-'); 
        const imagePath = `./images/${imageName}.jpeg`; 
        // used chatgpt to help with the error 
        //in image file names that contain spaces like "Spaghetti Carbonara.jpeg" This will create a imageName element
        //that will store recipe.name and if a space is found, it will replace it with a hyphon
        const recipe_img = document.createElement('img');
        recipe_img.src = imagePath;
        recipe_img.alt = recipe.name;

        image.appendChild(recipe_img);

        const customLine = document.createElement('div');
        customLine.classList.add('custom-line');

        const recipeCardTitle = document.createElement('div');
        recipeCardTitle.classList.add('recipe-card-title');
        const title = document.createElement('p');
        title.textContent = recipe.name;

        const nutritionList = document.createElement('ul');
        const caloriesItem = document.createElement('li');
        const proteinItem = document.createElement('li');
        const carbsItem = document.createElement('li');

        caloriesItem.textContent = `Calories: ${recipe.nutrition.calories}`;
        proteinItem.textContent = `Protein: ${recipe.nutrition.protein}`;
        carbsItem.textContent = `Carbs: ${recipe.nutrition.carbs}`;
        //appending to appropriate elements
        nutritionList.appendChild(caloriesItem);
        nutritionList.appendChild(proteinItem);
        nutritionList.appendChild(carbsItem);

        recipeCardTitle.appendChild(title);
        recipeCardTitle.appendChild(nutritionList);

        recipeCard.appendChild(image);
        recipeCard.appendChild(customLine);
        recipeCard.appendChild(recipeCardTitle);

        row.appendChild(recipeCard);
    });

    recipeList.appendChild(row);
}



