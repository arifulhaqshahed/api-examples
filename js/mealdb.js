const searchFood = async () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.meals);

    /* fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals)) */

    searchField.value = '';

}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
    // .catch(error => console.log(error))
}

const displayMealDetail = mealDetail => {
    // console.log(mealDetail);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${mealDetail.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${mealDetail.strMeal}</h5>
      <p class="card-text">${mealDetail.strInstructions}</p>
      <a href="${mealDetail.strYoutube}" class="btn btn-primary target">See tutorial</a>
    </div>
    `;
    mealDetails.appendChild(div);
    document.getElementById('search-result').style.display = 'none';
}

const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`;
console.log(bondCode);