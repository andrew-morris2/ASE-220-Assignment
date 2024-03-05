function loadHomeRecipes() {
    fetch('https://jsonblob.com/api/jsonblob/1214331063873953792')
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
        // used chatgpt to help with the error of dynamically displaying images
        //in image file names that contain spaces like "Spaghetti Carbonara" this will create a imageName variable
        //that will store recipe.name and replace spaces with a hyphon and use lowercase formatting
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

        //creating link to recipe
        const linkToRecipe = document.createElement('a');
        linkToRecipe.classList.add('font-body');
        linkToRecipe.href = '';
        linkToRecipe.textContent = 'See more details';

        //establshing parent/child relationship 
        nutritionList.appendChild(caloriesItem);
        nutritionList.appendChild(proteinItem);
        nutritionList.appendChild(carbsItem);

        recipeCardTitle.appendChild(title);
        recipeCardTitle.appendChild(nutritionList);

        recipeCard.appendChild(image);
        recipeCard.appendChild(customLine);
        recipeCard.appendChild(recipeCardTitle);
        recipeCard.appendChild(linkToRecipe);

        row.appendChild(recipeCard);
    });

    recipeList.appendChild(row);
}


function fetchDessertRecipes() {
        fetch('https://jsonblob.com/api/jsonblob/1214331063873953792')
        .then(response => response.json())
        .then(data => {
            displayDesserts(data.recipes);
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
}

function displayDesserts(recipes){
    const dessertRecipe = recipes.filter(recipe => recipe.category === "dessert").slice(0, 2);

    dessertRecipe.forEach(recipe => {
        const dessertCardContainer = document.createElement('div');
        dessertCardContainer.classList.add('row', 'dessert-card-container');

        const dessertCard = document.createElement('div');
        dessertCard.classList.add('dessert-card');

        const imageName = recipe.name.toLowerCase().replace(/\s+/g, '-'); 
        const imagePath = `./images/${imageName}.jpeg`; 
        const dessertImgCol = document.createElement('div');
        dessertImgCol.style.marginTop = "25px";
        dessertImgCol.style.marginLeft = "50px"
        dessertImgCol.classList.add('dessert-image', 'col-md-6');
        dessertImgCol.innerHTML = `<img src="${imagePath}">`;

        const dessertCardDetails = document.createElement('div');
        dessertCardDetails.classList.add('dessert-details', 'col-md-6', 'font-body');
        dessertCardDetails.style.marginTop = "45px";
        dessertCardDetails.innerHTML = `<h3 style="margin-top: 50px; margin-left: 25px; text-align: center">${recipe.name}</h3>`;

        const ingredientsListLeft = document.createElement('ul');
        const ingredientsListRight = document.createElement('ul');

        // Divide ingredients into two sections
        const ingredientsLeft = recipe.ingredients.slice(0, 5);
        const ingredientsRight = recipe.ingredients.slice(5);

        // Populate left section
        ingredientsLeft.forEach(ingredient => {
            const listIngredient = document.createElement('li');
            listIngredient.textContent = ingredient;
            ingredientsListLeft.appendChild(listIngredient);
        });

        // Populate right section
        ingredientsRight.forEach(ingredient => {
            const listIngredient = document.createElement('li');
            listIngredient.textContent = ingredient;
            ingredientsListRight.appendChild(listIngredient);
        });

        dessertCardDetails.appendChild(ingredientsListLeft);
        dessertCardDetails.appendChild(ingredientsListRight);

        dessertCard.appendChild(dessertImgCol);
        dessertCard.appendChild(dessertCardDetails);

        dessertCardContainer.appendChild(dessertCard);

        const line = document.createElement('div');
        line.style.marginTop = "25px";
        line.style.borderTop = '1px solid orange';
        line.style.marginLeft = "150px";
        line.style.width = "1000px";
        dessertCardContainer.appendChild(line);
        document.getElementById('dessert-container').appendChild(dessertCardContainer);
    })
}


