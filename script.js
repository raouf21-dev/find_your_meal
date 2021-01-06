



const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    singleMealEl = document.getElementById('single-meal');

    
    // Search meal with API
    
    function searchMeal(e){
        e.preventDefault();
        let term = search.value;
        if(term.trim()){
            fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Result for '${term}' :</h2>`
                if(data.meals === null){
                    resultHeading.innerHTML = `<h4 class="error-msg">There is no '${term}' meal available please try another meal!</h4>`
                }else {
                    mealsEl.innerHTML = data.meals.map(meal => `
                        <div class="meal">
                            <img src='${meal.strMealThumb}' alt='${meal.strMeal}'/>
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3 class=>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `).join('');
                }
            })
            search.value = '';
        }else {
            alert('Please enter any meal name you wish');
        }
        
}

function getMealByID(mealID){
    fetch(` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            let meal = data.meals[0]
            addMealToDom(meal)
        })
}

function addMealToDom(meal){
    let ingredients = [];
    for(let i = 1; i < 20; i++) {
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}` ]} -  ${meal[`strMeasure${i}`]}`)
        }else {
            break;
        }
    }
    singleMealEl.innerHTML = `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}"/>
            <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
            </div>
            <div class='main'>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
    `
}

submit.addEventListener('submit', searchMeal);

mealsEl.addEventListener('click',  e => {
    let mealInfo = e.path.find( item => {
        if(item.classList){
            return item.classList.contains('meal-info')
        }else {
            return false;
        }
    })
    if(mealInfo){
        let mealID = mealInfo.getAttribute('data-mealID');
        getMealByID(mealID)
    }
})
































// // Search meal and fetch from API
// function searchMeal(e){
//     e.preventDefault();

//     // Clear single meal
//     singleMealEl.innerHTML = "";

//     // Get search term
//     let term = search.value;

//     // Check for empty 
//     if(term.trim()){
//         fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             resultHeading.innerHTML = `<h2>Search result for '${term}':</h2>`;   
//             if(data.meals === null){
//                 resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
//             } else {
//                 mealsEl.innerHTML = data.meals.map(meal => `
//                     <div class="meal">
//                         <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
//                     </div>
//                     <div class="meal-info" data-mealID="${meal.idMeal}">
//                         <h3>${meal.strMeal}</h3>
//                     </div>
//                 `)
//                 .join('');
//             }
//         });
//         // Clear search text
//         search.value = '';
//     }else{
//         alert('Please enter a search term');
//     }
// }

// // Fetch meal by ID 
// function getMealByID(mealID){
//     fetch(` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
//     .then(res => res.json())
//     .then(data => {
//         const meal = data.meals[0]  ;
    
//         addMealToDOM(meal);
//     })
// }

// // Fetch random meal from API

// function getRandomMeal(){
//     // Clear meals and heading
//     mealsEl.innerHTML = "";
//     resultHeading.innerHTML = "";

//     fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//     .then(res => res.json())
//     .then(data => {
//         const meal = data.meals[0];

//         addMealToDOM(meal);
//     })
// }

// // Add meal to DOM

// function addMealToDOM(meal){
//     const ingredients = [];

//     for(let i=1; i <= 20; i++){
//         if(meal[`strIngredient${i}`]){
//             ingredients.push(`${meal[ `strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
//         } else {
//             break;
//         }
//     }

//     singleMealEl.innerHTML =  `
//         <div class="single-meal">
//             <h1>${meal.strMeal}</h1>
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
//             <div class="single-meal-info">
//                 ${meal.strCategory ? `<h2>${meal.strCategory}</h2>` : ''}
//                 ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
//             </div>  
//             <div class="main">
//                 ${meal.strInstructions ? `<p>${meal.strInstructions}</p>` : ''}
//                 <h2>Ingredients</h2>
//                 <ul>
//                     ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
//                 </ul>
//             </div>
//         </div>
//     `;
// }

// // Event listeners 
// submit.addEventListener('submit', searchMeal);
// random.addEventListener('click', getRandomMeal);

// mealsEl.addEventListener('click', e => {
//     const mealInfo = e.path.find(item => {
//         if(item.classList) {
//             return item.classList.contains('meal-info');
//         } else {
//             return false;
//         }
//     });
//     if(mealInfo){
//         const mealID = mealInfo.getAttribute('data-mealID');
//         getMealByID(mealID);    
//     }
// })