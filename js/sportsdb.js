const loadSports = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySports(data.countrys[0]))

    inputField.value = '';
}

const displaySports = country => {
//    console.log(countries);

   const searchResult = document.getElementById('search-result');
   searchResult.textContent = '';
   const div = document.createElement('div');
   div.classList.add('league');
    div.innerHTML = `
         <div onclick="loadLeagueDetails('${country.idLeague}')">
            <h3>Country Name: ${country.strCountry}</h3>
            <h5>League Name: ${country.strLeague}</h5>
            <img src ="${country.strBanner}">
         </div>
    `;
    searchResult.appendChild(div);
}

const loadLeagueDetails = idLeague => {
    // console.log(leagueDetail);
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_seasons.php?id=${idLeague}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}