const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (const country of countries) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadDetailsByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    }
}

const loadDetailsByName = (name) => {
    // const countryDetails = document.getElementById('details');
   
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
        <h4>country name: ${country.name.common}</h4>
        <p>population: ${country.population}</p>
        <p>area: ${country.area}</p>
        <img src="${country.flags.png}">
    `
}